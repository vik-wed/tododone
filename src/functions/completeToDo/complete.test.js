const { complete } = require("./complete");

describe("complete function", () => {
  test("it marks an item in the list as complete", () => {
    const initialList = [
      { toDo: "Code", isCompleted: false },
      { toDo: "Walk the dog", isCompleted: false },
    ];
    const itemToMarkCompleted = "Code";
    const updatedList = complete(itemToMarkCompleted, initialList);

    expect(updatedList).toEqual([
      { toDo: "Code", isCompleted: true },
      { toDo: "Walk the dog", isCompleted: false },
    ]);
    expect(updatedList.length).toBe(2);
  });

  test("it marks an item in the list as incomplete", () => {
    const initialList = [
      { toDo: "Code", isCompleted: true },
      { toDo: "Walk the dog", isCompleted: false },
    ];
    const itemToMarkIncomplete = "Code";
    const updatedList = complete(itemToMarkIncomplete, initialList);

    expect(updatedList).toEqual([
      { toDo: "Code", isCompleted: false },
      { toDo: "Walk the dog", isCompleted: false },
    ]);
    expect(updatedList.length).toBe(2);
  });

  test("it does not modify the list if the item is not found", () => {
    const initialList = [
      { toDo: "Code", isCompleted: false },
      { toDo: "Walk the dog", isCompleted: false },
    ];
    const itemToMarkCompleted = "Read a book";
    const updatedList = complete(itemToMarkCompleted, initialList);

    expect(updatedList).toEqual(initialList);
    expect(updatedList.length).toBe(2);
  });
});
