const request = require("supertest");
const app = require("../src/app");
const Task = require("../src/models/task");
const {
  userOneId,
  userTwoId,
  userOne,
  userTwo,
  taskOne,
  taskTwo,
  taskThree,
  setupDatabase,
} = require("../tests/fixtures/db");

// This function runs before each test case in this test suite
// Delete all the users before creating a new user in database
beforeEach(setupDatabase);

// test create task
test("Should create task user", async () => {
  const response = await request(app)
    .post("/tasks")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      description: "This is for testing",
    })
    .expect(201);
  const task = await Task.findById(response.body._id);
  expect(task).not.toBeNull;
  expect(task.completed).toEqual(false);
});

// test GET/tasks
test("Should get the tasks for userOne", async () => {
  const response = await request(app)
    .get("/tasks")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .expect(200);
  expect(response.body.length).toEqual(2);
});

// test delete task security
test("Should a user not delete other user's task", async () => {
  await request(app)
    .delete(`/tasks/${taskOne._id}`)
    .set("Authorization", `Bearer ${userTwo.tokens[0].token}`)
    .send()
    .expect(404);
    const task = await Task.findById(taskOne._id)
    expect(task).not.toBeNull()
});
