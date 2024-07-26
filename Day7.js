// Activity 1 : Object Creation and Access

// Task 1
const book = {
    title: "The Book of life",
    author: "Jorge R. Gutirrez",
    year: 1813,
    type: "non-friction"
};

console.log(book);  // output :{ title: 'The Book of life',author: 'Jorge R. Gutirrez',year: 1813,type: 'non-friction'}

// Task 2
console.log(book.title);    // output : The Book of Life
console.log(book.author);   // output : Jorge R. Gutirrez


// Activity 2 : Object Methods

// Task 3
book.string = function() {
    console.log(`${this.title} by ${this.author}`);
}
book.string();  // output : The Book of life by Jorge R. Gutirrez

// Task 4
book.updateYear = function(currentYear){
    this.year = currentYear;
}
book.updateYear(2024);
console.log(book.year); // output : 2024
console.log(book);
/* output : {
 title: 'The Book of life',
  author: 'Jorge R. Gutirrez',
  year: 2024,
  type: 'non-friction',
  string: [Function (anonymous)],
  updateYear: [Function (anonymous)]
}*/


// Activity 3: Nested Objects

// Task 5
const book1 = {
    title: "The Art of Happiness",
    author: "The Dalai Lama",
    year: 1999
};

const book2 = {
    title: "A Sense of Time",
    author: "H.S.Vatsyayan",
    year: 1925
}

const library = {
    name: "Book Store",
    books: [book1, book2]
};
console.log(library);
/* output : {
  name: 'Book Store',
  books: [
    {
      title: 'The Art of Happiness',
      author: 'The Dalai Lama',
      year: 1999
    },
    { title: 'A Sense of Time', author: 'H.S.Vatsyayan', year: 1925 }
  ]
} */

// Task 6
console.log(`Library Name: ${library.name}`);
library.books.forEach((book, index) => {
    console.log(`Book ${index + 1} Title: ${book.title}`);
});
/* output :
Library Name: Book Store
Book 1 Title: The Art of Happiness
Book 2 Title: A Sense of Time
*/


// Activity 4 : The 'this' keyword

// Task 7   
const book3 = {
    title: "The Art of Happiness",
    author: "The Dalai Lama",
    year:1999
};
book3.string = function() {
    console.log(`${this.title} ${this.year}`);
}
book3.string();  // output : The Art of Happines 1999


// Activity 5 : Object Iteration

// Task 8
const book4 = {
    title: "A sense of Time",
    author: "H.S.Vatsyayan",
    year: 1925
};
for (const property in book4) {
    console.log(`${property}: ${book4[property]}`);
}

// output : 
// title: A sense of Time
 // author: H.S.Vatsyayan
 // year: 1925

// Task 9
const keys = Object.keys(book4);
console.log("Keys:", keys);     // output : Keys: [ 'title', 'author', 'year' ]

const values = Object.values(book4);
console.log("Values:", values);     // output : Values: [ 'A sense of Time', 'H.S.Vatsyayan', 1925 ]