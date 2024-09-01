import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/students">Manage Students</Link></li>
        <li><Link to="/teachers">Manage Teachers</Link></li>
      </ul>
    </div>
  );
}

export default Dashboard;
