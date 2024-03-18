// App.js
import React, { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { Task } from './models/TaskModel';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [tasksCounter, setTasksCounter] = useState(0);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
    setTasksCounter(savedTasks.length > 0 ? Math.max(...savedTasks.map(task => task.id)) : 0);
  }, []);

  const addTask = (description) => {
    const newTask = Task({ id: tasksCounter + 1, description, completed: false });
    setTasks([...tasks, newTask]);
    setTasksCounter(tasksCounter + 1);
    saveTasksToLocalStorage([...tasks, newTask]);
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
    saveTasksToLocalStorage(filteredTasks);
  };

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  return (
    <div className="App text-white col-md-4 m-auto mt-5 row align-items-center ">
        <h1 className='text-white'>Todo List App</h1>
        <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onComplete={completeTask} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
