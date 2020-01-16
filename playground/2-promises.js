// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // either resolve or reject is executed
//     resolve([3, 5, 7]);
//     // reject("Things went wrong!");
//   }, 2000);
// });

// doWorkPromise
//   .then(result => {
//     console.log("Success", result);
//   })
//   .catch(error => {
//     console.log("Error:", error);
//   });
//
//                                fulfilled
//                              /
//  Promise     -- pending -->
//                              \
//                                 rejected
//

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// add(2, 3)
//   .then(sum => {
//     console.log(sum);
//     add(sum, 5)
//       .then(sum2 => {
//         console.log(sum2);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   })
//   .catch(e => {
//     console.log(e);
//   });

add(2, 3)
  .then(sum => {
    console.log(sum);
    return add(sum, 5);
  })
  .then(sum2 => {
    console.log(sum2);
    return add(sum2, 10)
  }).then(sum3=>{
    console.log(sum3)
  })
  .catch(e => {
    console.log(e);
  });
