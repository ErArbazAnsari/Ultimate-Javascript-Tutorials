// Logical Operators in Javascript
// AND  --> all the conditions, must be true (&&)
// OR  --> atleast one condition, must be true (||)
// NOT  --> true -> false, false -> true

const age = 12;
const gender = "male";

if (age >= 18 || gender == "male") {
  console.log("An adult male.");
}

let num = 50;
if (num % 2 != 0) {
  console.log("Odd");
} else console.log("Even");
