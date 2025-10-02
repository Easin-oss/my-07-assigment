import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Banner from './components/Banner/Banner';
function App() {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [taskStatus, setTaskStatus] = useState([]);
const [resolvedCount, setResolvedCount] = useState(0);

   const addToTaskStatus = (ticket) => {
    setInProgressCount(prev => prev + 1);
    toast.success(`Ticket #${ticket.id} has been added to Task Status.`);
    setTaskStatus(prev => [...prev, { ...ticket, status: 'in-progress' }]);
  return (
    <>
      <Navbar></Navbar>
      <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount}></Banner>
    </>
  )
}

export default App;
