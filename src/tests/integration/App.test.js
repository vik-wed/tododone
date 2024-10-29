import { render, screen, fireEvent, within } from "@testing-library/react";
import App from "../../App";

beforeEach(() => {
  localStorage.clear();
});

describe("App integration test", () => {
  test("renders initial elements", () => {
    render(<App />);
    expect(screen.getByText(/To Do - Done/)).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
    expect(screen.getByText("To Do")).toBeInTheDocument();
    expect(screen.getByText("Done")).toBeInTheDocument();
  });
  test("should add a new to-do item", () => {
    render(<App />);

    const input = screen.getByRole("textbox");
    const addButton = screen.getByRole("button", { name: "+" });

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });
  test("saves a new task to localStorage when added", () => {
    render(<App />);

    const input = screen.getByRole("textbox");
    const addButton = screen.getByRole("button", { name: "+" });

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    const storedList = JSON.parse(localStorage.getItem("TO_DO_LIST"));

    expect(storedList).toEqual([{ toDo: "New Task", isCompleted: false }]);
  });
  test("should mark a to-do item as completed", () => {
    render(<App />);

    const input = screen.getByRole("textbox");
    const addButton = screen.getByRole("button", { name: "+" });

    fireEvent.change(input, { target: { value: "Complete Task" } });
    fireEvent.click(addButton);

    const toDoList = screen.getByTestId("toDo");
    const doneList = screen.getByTestId("done");

    expect(within(toDoList).getByText("Complete Task")).toBeInTheDocument();

    const completeButton = screen.getByRole("button", { name: "✔" });
    fireEvent.click(completeButton);

    expect(within(doneList).getByText("Complete Task")).toBeInTheDocument();
    expect(
      within(toDoList).queryByText("Complete Task")
    ).not.toBeInTheDocument();
  });
  test("updates the list in localStorage when a task is marked as completed", () => {
    render(<App />);

    const input = screen.getByRole("textbox");
    const addButton = screen.getByRole("button", { name: "+" });

    fireEvent.change(input, { target: { value: "Complete Task" } });
    fireEvent.click(addButton);

    const completeButton = screen.getByRole("button", { name: "✔" });
    fireEvent.click(completeButton);

    const storedList = JSON.parse(localStorage.getItem("TO_DO_LIST"));

    expect(storedList).toEqual([{ toDo: "Complete Task", isCompleted: true }]);
  });
  test("should remove a to-do item", () => {
    render(<App />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Task to Remove" },
    });
    fireEvent.click(screen.getByRole("button", { name: "+" }));

    const deleteButton = screen.getByRole("button", { name: "×" });
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Task to Remove")).not.toBeInTheDocument();
  });
  test("updates the list in localStorage when a task is removed", () => {
    render(<App />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Task to Remove" },
    });
    fireEvent.click(screen.getByRole("button", { name: "+" }));

    const deleteButton = screen.getByRole("button", { name: "×" });
    fireEvent.click(deleteButton);

    const storedList = JSON.parse(localStorage.getItem("TO_DO_LIST"));

    expect(storedList).toEqual([]);
  });
});
