import { add } from "../../../functions/add";

describe("Add to to-do list", () => {
  test("it adds an item to the list", () => {
    const initialList = [{ toDo: "Buy groceries", isCompleted: false }];
    const newItem = "Walk the dog";
    const updatedList = add(newItem, initialList);

    expect(updatedList).toEqual([
      { toDo: "Buy groceries", isCompleted: false },
      { toDo: "Walk the dog", isCompleted: false },
    ]);
    expect(updatedList.length).toBe(2);
  });

  test("it does add a non-string value", () => {
    const initialList = [{ toDo: "Buy groceries", isCompleted: false }];
    const newItem = 12345;
    const updatedList = add(newItem, initialList);

    expect(updatedList).toEqual([
      { toDo: "Buy groceries", isCompleted: false },
      { toDo: "12345", isCompleted: false },
    ]);
    expect(updatedList.length).toBe(2);
  });

  test("it adds an item to an empty list", () => {
    const initialList = [];
    const newItem = "Do laundry";
    const updatedList = add(newItem, initialList);

    expect(updatedList).toEqual([{ toDo: "Do laundry", isCompleted: false }]);
    expect(updatedList.length).toBe(1);
  });

  test("it does not add a duplicate item to the list", () => {
    const initialList = [
      { toDo: "Buy groceries", isCompleted: false },
      { toDo: "Walk the dog", isCompleted: false },
    ];
    const newItem = "Buy groceries";
    const updatedList = add(newItem, initialList);

    expect(updatedList).toEqual(initialList);
    expect(updatedList.length).toBe(2);
  });

  test("it does not add an empty string", () => {
    const initialList = ["Buy groceries"];
    const newItem = "";
    const updatedList = add(newItem, initialList);

    expect(updatedList).toEqual(initialList);
    expect(updatedList.length).toBe(1);
  });
});
