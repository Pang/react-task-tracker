import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Tasks from './components/Tasks/Tasks';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import About from './components/About';


function App() {
  const name = 'Ryan';
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }
  
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });

    const data = await res.json();
    setTasks([...tasks, data]);
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder};

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })
    const data = await res.json();

    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, reminder: data.reminder } : task)
    )
  }
  
  return (
    <Router>
      <div className="container mx-auto">
        <Header 
          name={name} 
          onAdd={() => setShowAddTask(!showAddTask)} 
          showAdd={showAddTask}
        />
        
        <Route 
          path='/' 
          exact 
          render={(props) => (
            <>
              {showAddTask && <AddTaskForm onAdd={addTask} />}
              { tasks.length > 0 
                ? <Tasks 
                    tasks={tasks} 
                    onDelete={deleteTask} 
                    onToggle={toggleReminder}
                  />
                : 'No Tasks! :D'
              }
            </>
          )} 
        />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
