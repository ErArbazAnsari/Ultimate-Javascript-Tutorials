// Datatypes in javascript
// number

let num1 = 10.5;
console.log("Vale of num: ", num1);
console.log("Type of num1 is: ", typeof num1);

// strings
let firstName = "Arbaz Ansari"; // either we use "" or '' both works same;
console.log("First Name is : ", firstName);
console.log("Type of firstName is :", typeof firstName);

// concatenation of two strings
let string1 = "arbaz!@#$%^&*()"; // anything you can store in the string
let string2 = "ansari";
console.log("string1 + string2 : ", string1 + string2);

// Booleans -- (true and false)
let isLoggedIn = true;
console.log("User is Log In? :", isLoggedIn);
console.log("isloggedIn datatype: ", typeof isLoggedIn);

// Null
let data = null;
console.log("data : ", data);
console.log("type of data : ", typeof data);

// Undefined
let myData = undefined;
console.log("myData : ", myData);
console.log("type of myData : ", typeof myData);

// Objects
const person = {
  firstName: "Arbaz",
  lastName: "Ansari",
  isLoggedIn: false,
  age: 20,
};

console.log("Data In Person: ", person);
console.log("Typeof Person: ", typeof person);

// Operators in JavaScript
// (+, -, *, /, %)
let num2 = 10;
let num3 = 10;
console.log(num2 + num3);
console.log(num2 - num3);
console.log(num2 * num3);
console.log(num2 / num3);
console.log(num2 % num3);

/*
"1" + "1" --> string --> 11
"1" + num --> string
"1" * num --> number
*/
