console.log("Conditional Statements in JavaScript");
//if else

if (false) {
  console.log("1-Do this");
}

if (true) {
  console.log("2-Do this");
}

const age = prompt("Enter you age.");
if (age >= 18) {
  document.body.innerHTML = "<h1>You are eligible to vote.</h1>";
} else {
  document.body.innerHTML = "<h1>You are not eligible to vote.</h1>";
}

// Ternary Operator
age >= 18 ? console.log("Eligible") : console.log("No");

// Switch Statement in JavaScript
let option = 11;
switch (option) {
  case 1: {
    console.log("Arbaz");
    break;
  }
  case 2: {
    console.log("Ansari");
    break;
  }
  default: {
    console.log("No Switch Options Available");
    break;
  }
}
