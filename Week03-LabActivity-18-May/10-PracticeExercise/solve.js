/* Georgian College
24F Client-Side JavaScript - 200
Student: Geraldo Beiro Neto
Student_ID: 200587023
Date/Time: 09-30-2024 12:50AM
*/


//EXERCISE 1
/* I have here the marks of the students in an array*/
const marks = [85, 97, 44, 37, 76, 60];

// Total marks is the sum of all marks contained in the array "marks"
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);

// I can get the average of the marks by dividing the total marks by the number of marks in the array
const averageMarks = totalMarks / marks.length;

console.log(`The average marks are: ${averageMarks}`);
// displaying the average of the marks

//EXERCISE 2
const prices = [250, 645, 300, 900, 50]; // array of prices

// I'm using map function to change the prices of each array item to 90%
const discountedPrices = prices.map(price => price * 0.9);

console.log('Discounted prices:', discountedPrices);
