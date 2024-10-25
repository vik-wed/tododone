import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Homepage", () => {
  test("renders heading", () => {
    render(<App />);
    const heading = screen.getByText(/To Do - Done/);
    expect(heading).toBeInTheDocument();
  });
  test("renders input", () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });
  test("renders button", () => {
    render(<App />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("renders to Do List heading", () => {
    render(<App />);
    const heading = screen.getAllByRole("heading", { level: 2 });
    expect(heading.length).toBe(2);
  });
});
