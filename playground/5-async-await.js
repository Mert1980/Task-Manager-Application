/* *** Async functions always return a promise. That promise is fulfilled
with the value the developer choose to return from the function
*/

const doWork = async () => {
  throw new Error("Something went wrong");
  return "Mert"; // --> returns Promise { 'Mert' }
};
// console.log(doWork());
doWork()
  .then(result => {
    console.log("Result:", result);
  })
  .catch(e => {
    console.log("Error:", e.message);
  });
