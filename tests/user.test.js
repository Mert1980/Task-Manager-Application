const request = require("supertest");
const app = require("../src/app");

// Test signup router
// This test case fails 2nd time (due to duplication of mail address )
// unless jest lifecycle methods are defined in advance
test("Should signup a user", async () => {
  await request(app).post("/users").send({
    name: "Mert",
    email: "mertdemirok80@gmail.com",
    password: "Green12345",
  }).expect(201)
});
