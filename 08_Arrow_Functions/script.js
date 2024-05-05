const myFirstFunc = () => {
    console.log("My First Function");
};
myFirstFunc();

const mySecFunc = (a, b) => a + b; // One Liner Function
console.log(mySecFunc(10, 50));

// arguments keyword is only available in the normal function
function myFunc() {
    console.log(arguments);
}
// myFunc(10, 20, 30);

// using return function
// const myNewFunc = () => {
//     console.log(arguments);
// };
// myNewFunc(10, 29, 30);

// To solve this issue --> we use spread operator
const myNewFunc = (...arg) => {
    console.log(arg);
};
myNewFunc(10, 29, 30);

// Another difference in return function is hoisting
// in normal function --> works normally
sum(10, 20);

function sum(a, b) {
    console.log(a + b);
}

// in return function
// div(a, b);
// const div = (a, b) => a / b;

// Another Difference is this keyword
// const myObj = {
//     value: 20,
//     myFunction: function () {
//         console.log("Hi, dear: ", this.value);
//     },
// };
// myObj.myFunction();

// In Return Function
// Another Difference is this keyword
const myObj = {
    value: 20,
    myFunction: () => {
        console.log("Hi, dear: ", this.value);
    },
};

myObj.myFunction();
