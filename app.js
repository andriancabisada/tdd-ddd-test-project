// app.js

const Book = require("./models/book");

class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    const book = new Book(title, author);
    this.books.push(book);
  }

  findBookByTitle(title) {
    return this.books.find((book) => book.title === title);
  }

  checkOutBook(title) {
    const book = this.findBookByTitle(title);
    if (!book) {
      throw new Error(`Book "${title}" not found in the library.`);
    }
    book.checkOut();
  }

  checkInBook(title) {
    const book = this.findBookByTitle(title);
    if (!book) {
      throw new Error(`Book "${title}" not found in the library.`);
    }
    book.checkIn();
  }
}

module.exports = Library;

// Usage example
const library = new Library();

library.addBook("The Great Gatsby", "F. Scott Fitzgerald");
library.addBook("To Kill a Mockingbird", "Harper Lee");
library.addBook("1984", "George Orwell");

// Check out a book
library.checkOutBook("The Great Gatsby");

// Check in a book
library.checkInBook("The Great Gatsby");

console.log(library);
