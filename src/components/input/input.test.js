import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./input";

describe("Input", () => {
  test("renders input", () => {
    render(<Input type={"text"} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });
  test("shows value", () => {
    const value = "INPUT TEST";
    render(<Input type="text" value={value} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue(value);
  });
  test("fires onChange event", () => {
    const onChange = jest.fn();
    render(<Input type="text" onChange={onChange} />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "ABC" } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "ABC" }),
      })
    );
  });
});
