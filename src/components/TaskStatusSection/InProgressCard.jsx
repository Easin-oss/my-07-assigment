import React from 'react';

const InProgressCard = ({ taskStatus, onCompleteTask }) => {
  return (
    <div className="status-card">
      <h2>In Progress</h2>
      <div className="task-status-content">
        {taskStatus.length === 0 ? (
          <p className="placeholder-text">Select a ticket to add to In Progress</p>
        ) : (
          taskStatus.map(task => (
            <div key={task.id} className="task-item">
              <div className="task-header">
                <h4>{task.title}</h4>
                <span className="task-id">#{task.id}</span>
              </div>
              <p className="task-customer">{task.customer}</p>
              <div className="task-meta">
                <span className="task-category">{task.category}</span>
                <span className="task-date">{task.createdAt}</span>
              </div>
              <button
                className="complete-btn"
                onClick={() => onCompleteTask(task)}
              >
                Mark as Complete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default InProgressCard;