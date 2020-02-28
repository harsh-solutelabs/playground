setTimeout(() => {
  console.log("Two seconds are up");
}, 2000);

const names = ["rabv", "raj", "param"];

const four = names.filter(name => {
  return name.length <= 4;
});

const geo = (location, callBack) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      logitude: 0
    };
    callBack(data);
  }, 1000);
};

geo("phili", data => {
  console.log(data);
});

const add = (val1, val2, callBack) => {
  setTimeout(() => {
    const data = val1 + val2;
    callBack(data);
  }, 2000);
};

add(1, 4, sum => {
  console.log(sum);
});
