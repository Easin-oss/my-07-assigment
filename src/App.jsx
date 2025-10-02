import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import TicketsSection from './components/TicketsSection/TicketsSection';
import TaskStatusSection from './components/TaskStatusSection/TaskStatusSection';
import Footer from './components/Footer/Footer';
import { initialTickets } from './data/ticketData';

function App() {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [tickets, setTickets] = useState(initialTickets);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const addToTaskStatus = (ticket) => {
    setInProgressCount(prev => prev + 1);
    toast.success(`Ticket #${ticket.id} has been added to Task Status.`);
    setTaskStatus(prev => [...prev, { ...ticket, status: 'in-progress' }]);


    if (taskStatus.some(task => task.id === ticket.id)) {
      toast.warning(`Ticket #${ticket.id} is already in the task status section.`);
      return;
    }

    if (ticket.status === "resolved") {
      toast.warning(`Ticket #${ticket.id} is already resolved.`);
      return;
    }
    setTickets(prevTickets =>
      prevTickets.map(t =>
        t.id === ticket.id ? { ...t, status: 'in-progress' } : t
      )
    );
  };











  
    return (
      <>
        <Navbar></Navbar>
        <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount}></Banner>
      </>
    )
  }

  export default App;
