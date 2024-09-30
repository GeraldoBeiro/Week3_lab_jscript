/* Georgian College
24F Client-Side JavaScript - 200
Student: Geraldo Beiro Neto
Student_ID: 200587023
Date/Time: 09-18-2024 02:16PM
*/

// Here I created an array of objects called library
const library = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];

// Here I am setting the status read to true using dot notation.
library.forEach(book => { // for each book I am setting true for read
    book.status.read = true; // change status to true

});

console.log(library);
// and I am printing the library with the read status true

// Here I am changing the variable title of the first book in the array to First book

library[0].title = "First Book";
console.log(library[0].title); // Output: "First book"


// now Turning the library object into a JSON string
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);

