const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => { // either resolve or reject is executed
    // resolve([3, 5, 7]);  
    reject("Things went wrong!");
  }, 2000);
});

doWorkPromise
  .then(result => {
    console.log("Success", result);
  })
  .catch(error => {
    console.log("Error:", error);
  });
//
//                                fulfilled
//                              /
//  Promise     -- pending -->  
//                              \            
//                                 rejected
//