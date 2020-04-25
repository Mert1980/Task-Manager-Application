const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");

const userOne = {
    name: "Yigit",
    email: "example@gmail.com",
    password: "Green12345"
}

// This function runs before each test case in this test suite
// Delete all the users before creating a new user in database
beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save()
});



// Test signup router
// This test case fails 2nd time (due to duplication of mail address )
// unless jest lifecycle methods are defined in advance
test("Should signup a user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Mert",
      email: "mertdemirok80@gmail.com",
      password: "Green12345",
    })
    .expect(201);
});
