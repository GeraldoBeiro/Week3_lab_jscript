/* Georgian College
24F Client-Side JavaScript - 200
Student: Geraldo Beiro Neto
Student_ID: 200587023
Date/Time: 09-18-2024 02:16PM
*/

// CHALLENGE ONE
const arr = [1, 2, 3, 4, 5];

// here I am adding 0 to the start
arr.unshift(0);

// Now I'm adding 6 to the end
arr.push(6);

// I will reverse the array below
arr.reverse();

console.log(arr); 
// Now the system will output the revers array: [6, 5, 4, 3, 2, 1, 0]


// CHALLENGE TWO
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// I will remove the last element ( number 5)
arr1.pop();

// Now concatenating the arr1 and arr2 into arr3
let arr3 = arr1.concat(arr2);

console.log(arr3); 
// Output displaying array 3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

