let a, b;
a = 2;
b = "2";
// let sum = a + b;
// console.log(sum);

if (a === b) console.log("It is equal");
else console.log("It is not equal");

for (let i = 1; i <= 100; i++) console.log(i);

let person = {
  name: "Shubhradeep",
  age: 22,
  weight: 56,
  dob: "12th Jan",
  address: {
    street: "12th Street",
    city: "Jamshedpur",
    state: "Jharkhand",
  },
  read: function () {
    console.log("I am reading");
  },
};

console.log(person.address.street);
let laptop = {
  company: "lenovo",
  windows: 8,
  core: "I5",
  execution: function () {
    console.log("execution");
  },
};

console.log(laptop.company);
console.log(laptop.windows);
laptop.execution();

document
  .getElementsByTagName("button")[0]
  .addEventListener("click", function () {
    document.getElementsByTagName("h1")[0].style.color = "#FFF47D";
  });
