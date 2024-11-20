/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import AddTodoForm from "./AddTodoForm";

describe("calls onSubmit with input value when form is submitted", () => {
  it("calls onSubmit with input value when form is submitted", () => {
    const handleSubmit = vi.fn();
    render(<AddTodoForm onSubmit={handleSubmit} />);
  
    const input = screen.getByPlaceholderText(/what needs to be done/i);
    const button = screen.getByRole("button", { name: /add/i });
  
    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(button);
  
    expect(handleSubmit).toHaveBeenCalledWith("Test Todo");
    expect(input.value).toBe(""); // input should reset
  })

});
