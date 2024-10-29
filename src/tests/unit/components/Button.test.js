import { render, screen } from "@testing-library/react";
import Button from "../../../components/Button";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  test("renders button", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("renders buttonText", () => {
    const buttonText = "TEXT";
    render(<Button buttonText={buttonText} />);
    const text = screen.getByText(buttonText);
    expect(text).toBeInTheDocument();
  });
  test("is disabled", () => {
    const isDisabled = true;
    render(<Button isDisabled={isDisabled} />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("disabled");
  });
  test("will call onClick when enabled", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} isDisabled={false} />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  test("will not call onClick when disabled", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} isDisabled={true} />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});
