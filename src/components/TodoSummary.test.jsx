import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TodoSummary from './TodoSummary';

describe('TodoSummary', () => {
  it('shows the delete button when there are completed todos', () => {
    const todos = [
      { id: 1, title: 'First Todo', completed: false },
      { id: 2, title: 'Second Todo', completed: true },
    ];
    const mockDeleteAllCompleted = vi.fn();
    
    render(<TodoSummary todos={todos} deleteAllCompleted={mockDeleteAllCompleted} />);

    const button = screen.getByText('Delete all completed');
    expect(button).toBeInTheDocument();
  });

  it('does not show the delete button when there are no completed todos', () => {
    const todos = [
      { id: 1, title: 'First Todo', completed: false },
      { id: 2, title: 'Second Todo', completed: false },
    ];

    render(<TodoSummary todos={todos} deleteAllCompleted={vi.fn()} />);

    expect(screen.queryByText('Delete all completed')).not.toBeInTheDocument();
  });
});
