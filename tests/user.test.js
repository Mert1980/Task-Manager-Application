const request = require("supertest");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const app = require("../src/app");
const User = require("../src/models/user");

// Create a user ID to test read profile and delete account
const userOneId = new mongoose.Types.ObjectId();

// Create a new user to test other test cases (login, update etc)
const userOne = {
  _id: userOneId,
  name: "Yigit",
  email: "example@gmail.com",
  password: "Green12345",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
    },
  ],
};

// This function runs before each test case in this test suite
// Delete all the users before creating a new user in database
beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

// Test signup router
// This test case fails 2nd time (due to duplication of mail address )
// unless jest lifecycle methods are defined in advance
test("Should signup a user", async () => {
  const response = await request(app)
    .post("/users")
    .send({
      name: "Mert",
      email: "mertdemirok80@gmail.com",
      password: "Green12345",
    })
    .expect(201);

  // Assert that the database changed correctly
  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();

  // Assertions about the response
  expect(response.body).toMatchObject({
    user: {
      name: "Mert",
      email: "mertdemirok80@gmail.com",
    },
    token: user.tokens[0].token,
  });
  expect(user.password).not.toBe("Green12345");
});

// test login user
// validate new token is saved
test("Should login existing user", async () => {
  const response = await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);
  const user = await User.findById(userOneId);
  expect(response.body.token).toBe(user.tokens[1].token);
});
// test login failure
test("Should not login nonexisting user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: "example1@gmail.com",
      password: "Green12345",
    })
    .expect(400);
});

// test for authenticated user
test("Should get profile user", async () => {
  await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

// test for unauthenticated user
test("Should not get profile for unauthenticated user", async () => {
  await request(app).get("/users/me").send().expect(401);
});

// test for delete account
test("Should delete account for authenticated user", async () => {
  await request(app)
    .delete("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
  // validate user is removed
  const user = await User.findById(userOneId);
  expect(user).toBeNull();
});

// test for fail in deleting account
test("Should not delete account for unauthenticated user", async () => {
  await request(app).delete("/users/me").send().expect(401);
});

// test image uploading
test("Should upload avatar image", async () => {
  await request(app)
    .post("/users/me/avatar")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .attach("avatar", "tests/fixtures/profile-pic.jpg")
    .expect(200);
  const user = await User.findById(userOneId);
  expect(user.avatar).toEqual(expect.any(Buffer));
});
