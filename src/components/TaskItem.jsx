// TaskItem.js
import React from 'react';
import './TaskItem.css';

const TaskItem = ({ id, description, completed, onComplete, onDelete }) => {
  return (
    <div className="task-item mb-2 row justify-content-between">
      <div className='col-1'> 
        <input type="checkbox" checked={completed} onChange={() => onComplete(id)} className="m-0 bg-black text-danger start-0 " />
      </div>
      <div className='col-7 start-0 text-start'>
        <span className={completed ? "completed" : ""}>{description}</span>
      </div>
      <button className="btn btn-danger col-4 m-0" onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
