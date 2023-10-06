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
