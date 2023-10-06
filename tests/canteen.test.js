const Canteen = require("../service/canteen");

describe("Canteen", () => {
  let canteen;

  beforeEach(() => {
    canteen = new Canteen();
  });

  test("should add food to the canteen", () => {
    const canteen = new Canteen();
    canteen.addFood("Pizza", "Cheese, Dough, Sauce");
    const food = canteen.findFoodByName("Pizza");
    expect(food).toBeDefined();
    expect(food.name).toBe("Pizza");
  });

  test("should order a food", () => {
    canteen.addFood("Pizza", "Cheese, Dough, Sauce");
    canteen.orderFood("Pizza");
    const food = canteen.findFoodByName("Pizza");
    expect(food.ordered).toBeTruthy();
  });

  test("should cancel a food order", () => {
    canteen.addFood("Pizza", "Cheese, Dough, Sauce");
    canteen.orderFood("Pizza");
    canteen.cancelFoodOrder("Pizza");
    const food = canteen.findFoodByName("Pizza");
    expect(food.ordered).toBeFalsy();
  });

  test("should throw error if trying to order non-existent food", () => {
    expect(() => {
      canteen.orderFood("Pizza");
    }).toThrowError(new Error('Food "Pizza" not found in the canteen.'));
  });

  test("should throw error if trying to cancel order for non-existent food", () => {
    expect(() => {
      canteen.cancelFoodOrder("Pizza");
    }).toThrowError(new Error('Food "Pizza" not found in the canteen.'));
  });
});
