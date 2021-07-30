import { render, screen } from '@testing-library/react';
import AddTask from './components/AddTask';

describe("Add Task Form", () => {
  test('Should open with checkbox empty', () => {
    render(<AddTask />);

    const taskForm = screen.getByTestId('newTaskForm');
    const reminderInput = screen.getByTestId('reminderCheckbox');

    expect(taskForm).toBeInTheDocument();
    expect(reminderInput.nodeValue).toBe(null);
  });
})

