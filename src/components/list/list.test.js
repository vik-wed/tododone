import { render, screen } from "@testing-library/react";
import List from "./list";

describe("list", () => {
  test("renders unordered list", () => {
    render(<List />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });
});
