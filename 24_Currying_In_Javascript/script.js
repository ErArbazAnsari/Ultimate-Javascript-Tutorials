function addition(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(addition(1)(1)(1));

// Practical Example of currying
// function sendingMail(to) {
//     return function (subject) {
//         return function (body) {
//             console.log("Sending Mail Process");
//         };
//     };
// }

// Or using modern javascript
const sendingMail = (to) => (subject) => (body) =>
    console.log("Sending Mail Process");

let step1 = sendingMail("mail.arbazansari@gmail.com");
let step2 = step1("Order Details");
let step3 = step2("Here is something for you!");
