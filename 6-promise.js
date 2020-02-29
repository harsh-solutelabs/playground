// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([7, 7, 7]);
//     // reject("Thingd went wrong");
//   }, 2000);
// });
// doWorkPromise
//   .then(result => {
//     console.log("success", result);
//   })
//   .catch(error => {
//     console.log("error", error);
//   });

//Nested promise --------------------

const sum = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b), 2000;
    });
  });
};

// sum(1, 2)
//   .then(add => {
//     console.log(add);
//     sum(add, 2)
//       .then(add => {
//         console.log(add);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   })
//   .catch(e => {
//     console.log(e);
//   });

//Channing Promise

sum(1, 2)
  .then(add => {
    console.log(add);
    return sum(add, 5);
  })
  .then(add2 => {
    console.log(add2);
  })
  .catch(e => {
    console.log(e);
  });
