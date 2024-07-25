// Tasks/Activities:
// Activity 1: Array Creation and Access
//  Task 1:
const arr = [3,4,56,34,2];
console.log(arr); // output: [3,4,56,34,2]

// Task 2: 
const firstElement = arr[0];
const lastElement = arr[arr.length - 1];
console.log(firstElement); // output: 3
console.log(lastElement); // output: 2


// Activity 2: Array Methods (Basic)
// Task 3: // push the element
arr.push(21);
console.log(arr);
// output: [3,4,56,34,2,21]


//  Task 4: // pop the element
const elementPopped = arr.pop();
console.log(elementPopped); // output: 21
console.log(arr); // output: [3,4,56,34,2]

//  Task 5: // shift method
 arr.shift();
console.log(arr); // output: [4,56,34,2]

//  Task 6: // unshift method
arr.unshift(7);
console.log(arr); // output: [7,4,56,34,2]


// Activity 3: Array Methods (Intermediate)
//  Task 7: Map method
 const arr1 = arr.map((num) => num * 2);
console.log(arr1); // output: [14,8,112,68,4]

// Task 8: filter method 
const arr2 = arr.filter((num) => num % 2 === 0);
console.log(arr2); // output: [4,56,34,2]

// Task 9:reduce method 
const arr3 = arr.reduce((total, num) => total + num, 0);
console.log(arr3); // output: 103


// Activity 4: Array Iteration
// Task 10:  loop to iterate 
for (let i = 0; i < arr.length; i++) {
console.log(arr[i]);
}
// output:
// 7
// 4
// 56
// 34
// 2

// Task 11: forEach method to iterate 
arr.forEach((num) => console.log(num));
// output:
// 7
// 4
// 56
// 34
// 2


// Activity 5: Multi-dimensional Arrays
//  Task 12: two-dimensional array (matrix)
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix); // output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

//  Task 13: Access and log a specific element from the two-dimensional array.
const element = matrix[2][2];
console.log(element); // output: 9