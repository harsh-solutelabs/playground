const doWorkCallback = callback => {
  setTimeout(() => {
    // callback("This is an error", undefined);
    callback(undefined, [3, 3, 2, 2]);
  }, 2000);
};
doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
});
