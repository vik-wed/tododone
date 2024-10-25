import { render, screen } from "@testing-library/react";
import List from "./list";

describe("To Do List", () => {
  test("renders unordered list", () => {
    render(<List />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });
});
