const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.port || 3000;

//"next()" is specific to register the middelware. 
//If “do something” function doesn’t call “next()”, 
//route handler doesn’t ever going to run.
app.use((req, res, next)=>{
  console.log(req.method, req.path);
  next();
})

app.use(express.json()); // this configures express to automatically parse JSON into
// object so we can access it in our request handlers
app.use(userRouter);
app.use(taskRouter);

// 
// Without middelware: new request --> run route handler
//
// With middelware: new request --> do something --> run route handler
//

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

const jwt = require("jsonwebtoken");

const myFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {expiresIn:'7 days'}); // return value of jwt.sign is a new token
  console.log(token);

  const data = jwt.verify(token, "thisismynewcourse");
  console.log(data);
};
myFunction();
