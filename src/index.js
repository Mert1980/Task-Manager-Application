const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.port || 3000;

/* 
"next()" is specific to register the middelware. If “do something” function doesn’t call 
“next()”, route handler doesn’t ever going to run.

app.use((req, res, next) => {
  if (req.method === "GET") {
    res.send("GET requests are disabled");
  } else {
    next();
  }
});
*/

/*
app.use((req, res, next) => {
  res.status(503).send("Site is under maintenance. Please try again soon");
});
*/

app.use(express.json()); // this configures express to automatically parse JSON into
                        // object so we can access it in our request handlers
app.use(userRouter);
app.use(taskRouter);

/*
Without middelware: new request --> run route handler
With middelware: new request --> do something --> run route handler
*/

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

/* const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
    console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}
myFunction();

***EXAMPLE*** toJSON Method
const pet = {
  name : "Tekir"
}
pet.toJSON = function (){
  console.log(this)
  return this
}
console.log(JSON.stringify(pet))

***EXAMPLE*** how to make connection between two models
*/

const Task = require('./models/task')

const main = async () => {
    const task = await Task.findById('5e57ab32737a5419b2a8c39e')
    // populate the data from a relationship using the code below, so that we can access 
    // not only the ID of the user but also entire profile. Finds user who created the task
    await task.populate('owner').execPopulate();
    console.log(task.owner)
}
main()



