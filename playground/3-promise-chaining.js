require("../src/db/mongoose");
const User = require("../src/models/user");

User.findByIdAndUpdate("5e15fe61e1d4501ea8d015c2", { age: 12 })
  .then(result => {
    console.log(result);
    return User.countDocuments({ age: 12 });
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e.message);
  });
