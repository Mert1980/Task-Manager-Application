require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("5e15fe61e1d4501ea8d015c2", { age: 12 })
//   .then(result => {
//     console.log(result);
//     return User.countDocuments({ age: 12 });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e.message);
//   });

const updateAgeandCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeandCount("5e13b1d0f36c40273d39cc8b", 12)
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e.message);
  });
