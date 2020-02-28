const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([7, 7, 7]);
    // reject("Thingd went wrong");
  }, 2000);
});
doWorkPromise
  .then(result => {
    console.log("success", result);
  })
  .catch(error => {
    console.log("error", error);
  });
