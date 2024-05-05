// Arrays in javascript

const studentList = ["Arbaz", "Arman", "Ashfaq"];
console.log(studentList);
console.log(studentList[0]);
console.log(studentList[1]);
console.log(studentList[2]);
console.log("total element in studentList:", studentList.length);

// Important Functions/Methods in Array
console.log(studentList.push("Aman"));
console.log(studentList);

// Arrays in Javascript support Homogenous as well as Heterogenous elements
//Homogeneous
const newArray = [1, 2, 3, 4, 5];
console.log(newArray);

//Heterogeneous
const newarray1 = [1, true, false, "5", { Name: "Arbaz" }, [1, 2, 3]];
console.log(newarray1);

newarray1.push({rollNo: 24018})
console.log(newarray1);
console.log(newarray1.indexOf(false));

newarray1.reverse();
console.log(newarray1);



