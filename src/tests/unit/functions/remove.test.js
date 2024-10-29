import { remove } from "../../../functions/remove";

describe("Remove from to-do list", () => {
  test("it removes an item from the list", () => {
    const initialList = [
      { toDo: "Buy groceries", isCompleted: false },
      { toDo: "Walk the dog", isCompleted: false },
      { toDo: "Get a haircut", isCompleted: false },
      { toDo: "Code", isCompleted: false },
    ];
    const toBeDeleted = "Walk the dog";
    const updatedList = remove(toBeDeleted, initialList);

    expect(updatedList).toEqual([
      { toDo: "Buy groceries", isCompleted: false },
      { toDo: "Get a haircut", isCompleted: false },
      { toDo: "Code", isCompleted: false },
    ]);
    expect(updatedList.length).toBe(3);
  });

  test("if element not in list it returns list", () => {
    const initialList = [
      { toDo: "Buy groceries", isCompleted: false },
      { toDo: "Walk the dog", isCompleted: false },
      { toDo: "Get a haircut", isCompleted: false },
      { toDo: "Code", isCompleted: false },
    ];
    const toBeDeleted = "Hello World";
    const updatedList = remove(toBeDeleted, initialList);

    expect(updatedList).toEqual([
      { toDo: "Buy groceries", isCompleted: false },
      { toDo: "Walk the dog", isCompleted: false },
      { toDo: "Get a haircut", isCompleted: false },
      { toDo: "Code", isCompleted: false },
    ]);
    expect(updatedList.length).toBe(4);
  });

  test("it handles empty list", () => {
    const initialList = [];
    const toBeDeleted = "Walk the dog";
    const updatedList = remove(toBeDeleted, initialList);

    expect(updatedList).toEqual([]);
    expect(updatedList.length).toBe(0);
  });
});
