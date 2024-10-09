import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="sidebar">
      <h1 className="navhead">R+ Corp</h1>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/" className="sidebar-link">Pendaftaran</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/Recruitment" className="sidebar-link">Recruitment</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/Peserta" className="sidebar-link">Peserta</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
