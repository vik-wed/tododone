import { render, screen } from "@testing-library/react";
import List from "./list";

describe("List component", () => {
  const mockListItems = [
    { toDo: "Buy groceries", isCompleted: false },
    { toDo: "Walk the dog", isCompleted: false },
  ];

  test("renders unordered list", () => {
    render(<List listItems={mockListItems} />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });

  test("renders complete button for noncompleted list items", () => {
    render(
      <List
        listItems={mockListItems}
        handleComplete={() => console.log("complete")}
      />
    );
    const completeButtons = screen.getAllByText("✔");
    const filteredList = mockListItems.filter(
      (item) => item.isCompleted === false
    );
    expect(completeButtons.length).toBe(filteredList.length);
  });

  test("renders delete button for each list item", () => {
    render(<List listItems={mockListItems} />);
    const deleteButtons = screen.getAllByText("×");
    expect(deleteButtons.length).toBe(mockListItems.length);
  });
});
