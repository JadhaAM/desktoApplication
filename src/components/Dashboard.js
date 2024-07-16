import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>Civil Manager</h1>
      </header>
      <main className="main-content">
        <div className="left-panel">
          <div className="button">Site Management</div>
          <div className="button">Staff Management</div>
          <div className="button">Account Management</div>
          <div className="button">Vehicle Management</div>
          <div className="button">Report Generation</div>
          <div className="button">Admin Panel</div>
        </div>
        <div className="right-panel">
          <div className="logo">
            <img src="logo.png" alt="Bajrang Constructions" />
            <h2>Bajrang Constructions</h2>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>Important Updates Scrollings</p>
      </footer>
    </div>
  );
};

export default Dashboard;
