const sum = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("Number must be non- negative");
      }
      resolve(a + b);
    }, 2000);
  });
};

const doWork = async () => {
  // throw new Error("Something went Wrong");
  const add = await sum(1, 99);
  const add1 = await sum(add, 99);
  const add2 = await sum(add1, -99);
  return add2;
};

// doWork()
//   .then(result => {
//     console.log("Result:-", result);
//   })
//   .catch(e => {
//     console.log("e", e);
//   });
