import React from 'react';
import './TicketsSection.css';
import TicketCard from './TicketCard';

const TicketsSection = ({ tickets, onAddToTaskStatus }) => {
  return (
    <div className="tickets-section">
      <h2 className="section-title">Customer Tickets</h2>
      <div className="tickets-grid">
        {tickets.map(ticket => (
          <TicketCard 
            key={ticket.id} 
            ticket={ticket} 
            onAddToTaskStatus={onAddToTaskStatus} 
          />
        ))}
      </div>
    </div>
  );
};

export default TicketsSection;