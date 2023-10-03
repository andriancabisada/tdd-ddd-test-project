// Book.js

class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
      this.isCheckedOut = false;
    }
  
    checkOut() {
      if (this.isCheckedOut) {
        throw new Error('The book is already checked out.');
      }
      this.isCheckedOut = true;
    }
  
    checkIn() {
      if (!this.isCheckedOut) {
        throw new Error('The book is not checked out.');
      }
      this.isCheckedOut = false;
    }
  }
  
  module.exports = Book;
  