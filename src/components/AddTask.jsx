import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleChange = (e) => {
    setNewTaskDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskDescription.trim() !== '') {
      onAdd(newTaskDescription);
      setNewTaskDescription('');
    }
  };

  return (
    <div className="add-task mb-2 row justify-content-between align-content-between m-0 p-0">
      <form onSubmit={handleSubmit} className=" row justify-content-between m-0 mt-4 p-0">
        <div className=' col-8 m-0 pe-4 p-0'>
          <input
            type="text"
            value={newTaskDescription}
            onChange={handleChange}
            placeholder="Add a new task"
            className='form-control'
          />
        </div>
        <button type="submit" className="btn btn-primary col-4 m-0">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
