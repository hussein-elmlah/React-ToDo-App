import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onComplete, onDelete }) => {
  return (
    <div className="task-list mt-4">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          id={task.id}
          description={task.description}
          completed={task.completed}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
