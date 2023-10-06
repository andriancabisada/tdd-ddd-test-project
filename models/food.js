class Food {
  constructor(name, ingredients) {
    this.name = name;
    this.ingredients = ingredients;
    this.ordered = false;
  }

  order() {
    this.ordered = true;
  }

  cancelOrder() {
    this.ordered = false;
  }
}

module.exports = Food;
