import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react'

function App() {
  const name = 'Ryan';
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Meeting',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Feed fish',
        day: 'Feb 6th at 10:00am',
        reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  
  return (
    <div className="container">
      <Header name={name} />
      <AddTask />
      {tasks.length > 0 
        ? <Tasks 
            tasks={tasks} 
            onDelete={deleteTask} 
            onToggle={toggleReminder}
          />
        : 'No Tasks! :D'
      }
    </div>
  );
}

export default App;
