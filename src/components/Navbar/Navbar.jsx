import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">CS — Ticket System</div>
        <div className="nav-menu">
          <a href="#home">Home</a>
          <a href="#faq">FAQ</a>
          <a href="#changelog">Changelog</a>
          <a href="#blog">Blog</a>
          <a href="#download">Download</a>
          <a href="#contact">Contact</a>
          <button className="new-ticket-btn">+ New Ticket</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;