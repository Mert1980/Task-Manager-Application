const request = require('supertest')
const app = require("../src/app");
const Task = require('../src/models/task')
const {userOneId, userOne, setupDatabase} = require('../tests/fixtures/db')

// This function runs before each test case in this test suite
// Delete all the users before creating a new user in database
beforeEach(setupDatabase);

test('Should create task user', () => {

})