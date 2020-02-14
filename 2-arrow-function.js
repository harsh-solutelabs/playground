// const square = function(x) {
//   return x * x;
// };

// const square = x => {
//   return x * x;
// };

// const square = x => x * x;
// console.log(square(3));

const event = {
  name: "Birthday Party",
  guestList: ["raj", "ram", "ravi"],

  printGuestList() {
    // const that = this;

    console.log("Guest list " + this.name);

    // this.guestList.forEach(function(guest) {
    // Arrow function does bind this function
    this.guestList.forEach(guest => {
      console.log(guest + "is attending" + this.name);
    });
  }
};
event.printGuestList();
