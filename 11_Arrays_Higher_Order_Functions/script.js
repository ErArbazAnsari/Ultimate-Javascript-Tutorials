// Arrays Higher Order Functions

const newArray = [10, 20, 30, 40, 50];
// forEach() ---> Returns Nothing
// newArray.forEach((e) => console.log(e));

//map() ---> Returns New Array
// newArray.map((e) => console.log(e));

// Difference b/t forEach() and map()
const new1 = [1, 2, 3, 4, 5];
// let newData = new1.forEach((e) => console.log(e * 2));
// console.log(newData);  //undefined

let newData = new1.map((e) => e * 2);
console.log(newData); // returns new array

console.log(new1.includes(50));

//filter
const data = new1.filter((num) => num % 2 == 0);
console.log(data);

//slice
const data1 = newData.slice(1, 4); // slice returns new array
console.log(data1);

//splice
console.log("Splice");
let array = [1, 2, 3, 4, 5];
const data2 = array.splice(0, 2);
console.log(data2);
console.log(array);
