const fs = require("fs");
const book = {
  title: "Ego is the Enemy",
  author: "Ryan cbc"
};

//converting to string------
// const booJson = JSON.stringify(book);

//creting new file--------
// fs.writeFileSync("1-json.json", booJson);

// console.log(booJson);

//converting to object--------
// const parseJson = JSON.parse(booJson);
// console.log(parseJson.author);

//Reading from file---------
const databuffer = fs.readFileSync("1-json.json");
const dataJson = databuffer.toString();
console.log(dataJson);
const data = JSON.parse(dataJson);
console.log(data.title);

//Writing into file-----

data.title = "new xyz";
data.author = "new author";

const str = JSON.stringify(data);
console.log(str);

fs.writeFileSync("1-json.json", str);
