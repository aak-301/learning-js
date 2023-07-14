// this is called as objectliteral because we are using: '{}';
// const data = {
//   firstName: "Aakash",
//   lastName: "Shivanhsu",
//   job: "Student",
//   friends: ["Nandan", "Aman"],
// };

// console.log(data);
// console.log(data.firstName);
// console.log(data["firstName"]);

// console.log(data.firstName);
// console.log(data["firstName"]);

// const value = prompt("What do you want to know about me?");
// console.log(value);

// console.log(data.value); // here undefined becuase we dont have any key named value in object
// console.log(data[value]); // in square bracket we access key as string so vlaue stores job as : value="job". So this works.

// if (data[value]) {
//   console.log(data[value]);
// } else {
//   console.log("Wrong request");
// }

// data.loc = "India";
// data["twitter"] = "aakash";
// console.log(data);

const data2 = {
  firstName: "Aakash",
  lastName: "Shivanhsu",
  job: "Student",
  friends: ["Nandan", "Aman"],
  hasLis: true,
  birthYear: 2001,

  // using function inside the object:
  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },

  // using this pointer inside function inside the object:
  // calcAge: function () {
  //   return 2023 - this.birthYear;
  // },

  // using function inside the object to create an entity inside a object:
  //  this methodcan beused if we have to use this age multiple places. In this way computation task is easy and only done once
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  summary: function () {
    return `${this.firstName} is a ${this.age} years old and he ${
      this.hasLis ? "have" : "does not have"
    } the driving liscense `;
  },
};

// console.log(data2.calcAge(2001));
// console.log(data2["calcAge"](2001));

console.log(data2.calcAge());
// console.log(data2["calcAge"](2001));
console.log(data2.age);
console.log(data2.summary());
