import { render, screen } from '@testing-library/react';
import AddTaskForm from './AddTaskForm';

describe("Add Task Form", () => {
  test('Should open with an empty checkbox', () => {
    render(<AddTaskForm />);

    const taskForm = screen.getByTestId('newTaskForm');
    const reminderInput = screen.getByTestId('reminderCheckbox');

    expect(taskForm).toBeInTheDocument();
    expect(reminderInput.nodeValue).toEqual(null);

    // const spy = jest.spyOn(Component.prototype, 'parentFunction');
  });
})

