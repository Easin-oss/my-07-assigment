import React from 'react';

const TicketCard = ({ ticket, onAddToTaskStatus }) => {
  return (
    <div
      className={`ticket-card ${ticket.priority.toLowerCase()}-priority ${ticket.status}`}
      onClick={() => onAddToTaskStatus(ticket)}
    >
      <div className="ticket-category">{ticket.category}</div>
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <div className="ticket-meta">
        <span className="ticket-id">#{ticket.id}</span>
        <span className={`priority ${ticket.priority.toLowerCase()}`}>
          {ticket.priority} PRIORITY
        </span>
      </div>
      <div className="ticket-footer">
        <span className="customer">{ticket.customer}</span>
        <span className="date">{ticket.createdAt}</span>
      </div>
     
    </div>
  );
};

export default TicketCard;