// Functions in javascript

function sayHello() {
    console.log("Hello, Arbaz");
}

sayHello();
sayHello();

// Functions with Parameters
function myFunc(a, b) {
    console.log(a + b);
}
myFunc(10, 20);

function mulNum(a, b) {
    return a * b;
}

console.log(mulNum(10, 5));

// Spread Operator
console.log("\nSpread Operator in JS");
function myRestFunction(...arg) {
    let total = 0;
    for (let pointer of arg) {
        total += pointer;
    }
    return total;
}

console.log(myRestFunction(1, 2, 3, 4, 5));

// Another way
console.log("\n\nAnother way to do the same.");
function newSumFunc() {
    let sum = 0;
    //   console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(newSumFunc(10, 30));
