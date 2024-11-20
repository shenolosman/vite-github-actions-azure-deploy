import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TodoList from './TodoList';

describe('TodoList', () => {
  it('renders todo list sorted by completion status', () => {
    const todos = [
      { id: 1, title: 'First Todo', completed: false },
      { id: 2, title: 'Second Todo', completed: true },
    ];
    
    render(<TodoList todos={todos} />);
    
    const items = screen.getAllByRole('checkbox');
    expect(items[0].checked).toBe(false); // Incomplete todo is first
    expect(items[1].checked).toBe(true);  // Completed todo is last
  });
});
