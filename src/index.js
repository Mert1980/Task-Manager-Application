const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.port || 3000;

app.use(express.json()); // this configures express to automatically parse JSON into
// object so we can access it in our request handlers
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

const bcrypt = require("bcryptjs");

const myFunction = async () => {
  const password = "Red12345"
  const hashedPassword = await bcrypt.hash(password, 8) 
  // 8 is the number of rounds that the hashing algorithm is to be executed.
  // 8 is the balance between speed and security
  console.log(password);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare("Red12345", hashedPassword);
  console.log(isMatch);
};
myFunction();
// Encryption algorithms are reverseble: mert --> dsldfjsldfhsneouwen --> mert 
// Hashing algorithms are not reverseble: mert --> ekfjsdlfjp43p4jfldcjdcn@434