import React from 'react';

const ResolvedCard = ({ resolvedTasks, onRemoveResolvedTask }) => {
    return (
        <div className="status-card">
            <h2>Resolved</h2>
            <div className="resolved-tasks">
                {resolvedTasks.length === 0 ? (
                    <p className="placeholder-text">No resolved tasks yet.</p>
                ) : (
                    resolvedTasks.map(task => (
                        <div key={task.id} className="resolved-item">
                            <div>
                                <h4>{task.title}</h4>
                                <span className="task-id">#{task.id}</span>
                            </div>
                            <p className="task-customer">{task.customer}</p>
                            <div className="task-meta">
                                <span className="task-category">{task.category}</span>
                                <span className="task-date">{task.createdAt}</span>
                            </div>
                            <div className="resolved-actions">
                                <span >Resolved</span>
                                <button
                                    className="remove-btn"
                                    onClick={() => onRemoveResolvedTask(task)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ResolvedCard;