const { remove } = require("./remove");

describe("Remove from to-do list", () => {
  test("it removes an item from the list", () => {
    const initialList = [
      "Buy groceries",
      "Walk the dog",
      "Get a haircut",
      "Code",
    ];
    const toBeDeleted = "Walk the dog";
    const updatedList = remove(toBeDeleted, initialList);

    expect(updatedList).toContain("Buy groceries");
    expect(updatedList).toContain("Get a haircut");
    expect(updatedList).toContain("Code");
    expect(updatedList.length).toBe(3);
    expect(updatedList).not.toContain("Walk the dog");
  });
  test("if element not in list it returns list", () => {
    const initialList = [
      "Buy groceries",
      "Walk the dog",
      "Get a haircut",
      "Code",
    ];
    const toBeDeleted = "Hello World";
    const updatedList = remove(toBeDeleted, initialList);

    expect(updatedList).toContain("Buy groceries");
    expect(updatedList).toContain("Get a haircut");
    expect(updatedList).toContain("Code");
    expect(updatedList).toContain("Walk the dog");
    expect(updatedList.length).toBe(4);
  });
});
