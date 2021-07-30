import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'

function App() {
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
    console.log('delete', id);
  }
  let name = 'Ryan';

  return (
    <div className="container">
      <Header name={name} />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
