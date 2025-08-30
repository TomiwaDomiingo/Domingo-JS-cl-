class Product {
  #price; // Private field
  constructor(name, price) {
    this.name = name;
    this.#price = price;
  }

  getPrice() {
    return this.#price;
  }

  display() {
    return `${this.name} costs $${this.getPrice()}`;
  }
}

// Subclass for Books
class Book extends Product {
  constructor(name, price, author) {
    super(name, price);
    this.author = author;
  }

  // Override display method (polymorphism)
  display() {
    return `${this.name} by ${this.author} costs $${this.getPrice()}`;
  }
}


class Electronics extends Product {
  constructor(name, price, brand) {
    super(name, price);
    this.brand = brand;
  }

  display() {
    return `${this.brand} ${this.name} costs $${this.getPrice()}`;
  }
}

const book = new Book("JavaScript Guide", 29.99, "John Doe");
const laptop = new Electronics("Laptop", 999.99, "TechCo");

console.log(book.display()); 
console.log(laptop.display()); 