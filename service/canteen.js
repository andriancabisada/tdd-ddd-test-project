const Food = require("../models/food");

class Canteen {
  constructor() {
    this.foods = [];
  }

  addFood(name, ingredients) {
    const food = new Food(name, ingredients);
    this.foods.push(food);
  }

  findFoodByName(name) {
    return this.foods.find((food) => food.name === name);
  }

  orderFood(name) {
    const food = this.findFoodByName(name);
    if (!food) {
      throw new Error(`Food "${name}" not found in the canteen.`);
    }
    food.order();
  }

  cancelFoodOrder(name) {
    const food = this.findFoodByName(name);
    if (!food) {
      throw new Error(`Food "${name}" not found in the canteen.`);
    }
    food.cancelOrder();
  }
}

module.exports = Canteen;
