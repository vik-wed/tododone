const { add } = require("./add");

describe("Add to to-do list", () => {
  test("it adds an item to the list", () => {
    const initialList = ["Buy groceries"];
    const newItem = "Walk the dog";
    const updatedList = add(newItem, initialList);

    expect(updatedList).toContain("Buy groceries");
    expect(updatedList).toContain("Walk the dog");
    expect(updatedList.length).toBe(2);
  });
});
