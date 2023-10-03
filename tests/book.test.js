// book.test.js

const Book = require("../models/book");

describe("Book", () => {
  it("should create a book with title and author", () => {
    const book = new Book("The Great Gatsby", "F. Scott Fitzgerald");
    expect(book.title).toBe("The Great Gatsby");
    expect(book.author).toBe("F. Scott Fitzgerald");
  });

  it("should check out a book", () => {
    const book = new Book("The Catcher in the Rye", "J.D. Salinger");
    book.checkOut();
    expect(book.isCheckedOut).toBe(true);
  });

  it("should check in a book", () => {
    const book = new Book("To Kill a Mockingbird", "Harper Lee");
    book.checkOut();
    book.checkIn();
    expect(book.isCheckedOut).toBe(false);
  });

  it("should throw an error when checking out an already checked-out book", () => {
    const book = new Book("1984", "George Orwell");
    book.checkOut();
    expect(() => book.checkOut()).toThrowError(
      "The book is already checked out."
    );
  });

  it("should throw an error when checking in an already checked-in book", () => {
    const book = new Book("The Hobbit", "J.R.R. Tolkien");
    expect(() => book.checkIn()).toThrowError("The book is not checked out.");
  });
});
