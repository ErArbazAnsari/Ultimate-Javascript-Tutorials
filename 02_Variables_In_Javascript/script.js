// Variables in JavaScript
// In Old Javascript we have 'var'

// Avg age of family
var age1 = 46;
var age2 = 39;
var age3 = 20;
var age4 = 15;
var age5 = 11;
var familyMembers = 5;

console.log(
  "Family Average Age : ",
  parseInt((age1 + age2 + age3 + age4 + age5) / familyMembers)
);

/*
Note: Other Programming Languages, like Java: datatype variableName = value; -> Strongly Typed Datatype.
      JavaScript --> Loosly Typed Datatype.
*/

// var scope : global
if (true) {
  var var1 = 10;
  console.log(var1);
}
console.log(var1);

// let : scope (Local Scope)
// let is also loosly typed datatype
let rollNumber = 24018;
console.log("let : rollNumber :", rollNumber);

//Example of Loosly Typed Datatype.
rollNumber = "Two Four Zero One Eight";
console.log("let : rollNumber :", rollNumber);

// const
// scope - local (block scope)

const num = 10;
console.log("Const Num: ", num);

/*
num = 12; ---> Gives Error
console.log("Const Num: ", num);
*/

// Note: Compulsory to give the value at the initialization time
// cont age; --> throw an error