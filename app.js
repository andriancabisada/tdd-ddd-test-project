// app.js

const express = require("express");
const Library = require("./service/library");
const Canteen = require("./service/canteen");

// Usage example
// const library = new Library();

// library.addBook("The Great Gatsby", "F. Scott Fitzgerald");
// library.addBook("To Kill a Mockingbird", "Harper Lee");
// library.addBook("1984", "George Orwell");

// // Check out a book
// library.checkOutBook("The Great Gatsby");

// // Check in a book
// library.checkInBook("The Great Gatsby");

// console.log(library);

const app1 = express();
const app2 = express();

const library = new Library();
const canteen = new Canteen();

// Library Routes
app1.post("/books", (req, res) => {
  library.addBook(req.body.title, req.body.author);
  res.send("Book added successfully!");
});

app1.post("/checkout", (req, res) => {
  library.checkOutBook(req.body.title);
  res.send("Book checked out successfully!");
});

app1.post("/checkin", (req, res) => {
  library.checkInBook(req.body.title);
  res.send("Book checked in successfully!");
});

app1.listen(3000, () => {
  console.log("Library Books service is running on port 3000");
});

app2.post("/foods", (req, res) => {
  canteen.addFood(req.body.name, req.body.ingredients);
  res.send("Food added successfully!");
});

app2.post("/order", (req, res) => {
  canteen.orderFood(req.body.name);
  res.send("Food ordered successfully!");
});

app2.post("/cancel", (req, res) => {
  canteen.cancelFoodOrder(req.body.name);
  res.send("Food order cancelled!");
});

app2.listen(4000, () => {
  console.log("Canteen Food service is running on port 3000");
});
