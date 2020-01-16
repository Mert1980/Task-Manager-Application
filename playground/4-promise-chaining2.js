require("../src/db/mongoose.js");
const Task = require("../src/models/task");

Task.findByIdAndRemove("5e13b9958120172c2022f161")
  .then(result => {
    console.log(result);
    return Task.countDocuments({ completed: false });
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e.message);
  });
