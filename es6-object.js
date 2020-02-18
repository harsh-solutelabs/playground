//object property shorthand----------------------------
const name = "Harsh";
const userAge = 39;

const user = {
  //   name: name,
  name,
  age: userAge,
  location: "India"
};
// console.log(user);

//object destructing------------------------------

const product = {
  label: "Red book",
  price: 43,
  stock: 201,
  salePrice: undefined,
  rating: 20
};

// console.log(product.label);
// console.log(product.price);

// const { label, stock, rating = 5 } = product;
// console.log(label);
// console.log(stock);
// console.log(rating);

// const transcation = (type, myproduct) => {
const transcation = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transcation("order", product);
