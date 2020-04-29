const request = require('supertest')
const app = require("../src/app");
const Task = require('../src/models/task')
const {userOneId, userOne, setupDatabase} = require('../tests/fixtures/db')

// This function runs before each test case in this test suite
// Delete all the users before creating a new user in database
beforeEach(setupDatabase);

// test create task
test('Should create task user', async () => {
    const response = await request(app)
    .post("/tasks")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
        description: "This is for testing"
    })
    .expect(201)
    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull
    expect(task.completed).toEqual(false)

})