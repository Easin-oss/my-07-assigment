import React from 'react';
import './TaskStatusSection.css';
import InProgressCard from './InProgressCard';
import ResolvedCard from './ResolvedCard';

const TaskStatusSection = ({ 
  taskStatus, 
  resolvedTasks, 
  onCompleteTask, 
  onRemoveResolvedTask 
}) => {
  return (
    <div className="task-status-section">
      <h2 className="section-title">Task Status</h2>
      <div className="status-cards-container">
        <InProgressCard 
          taskStatus={taskStatus} 
          onCompleteTask={onCompleteTask} 
        />
        <ResolvedCard 
          resolvedTasks={resolvedTasks} 
          onRemoveResolvedTask={onRemoveResolvedTask} 
        />
      </div>
    </div>
  );
};

export default TaskStatusSection;