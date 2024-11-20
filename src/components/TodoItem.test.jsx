/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "./TodoItem";

test("renders todo item and responds to user actions", () => {
  const todo = { id: 1, title: "Test Todo", completed: false };
  const handleCompletedChange = vi.fn();
  const handleDelete = vi.fn();

  render(<TodoItem todo={todo} onCompletedChange={handleCompletedChange} onDelete={handleDelete} />);

  const checkbox = screen.getByRole("checkbox");
  const deleteButton = screen.getByRole("button");

  fireEvent.click(checkbox);
  expect(handleCompletedChange).toHaveBeenCalledWith(todo.id, true);

  fireEvent.click(deleteButton);
  expect(handleDelete).toHaveBeenCalledWith(todo.id);
});
