import React from 'react';
import './Sidebar.css';

const Sidebar = ({ open, onClose, onViewChange, onMonthSelect, selectedMonth }) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const sidebarStyle = {
    display: open ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '280px',
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '60px 16px 24px 16px', // Reduced top padding to fit more content
    boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
    transition: 'background 0.3s',
    overflowY: 'auto',
    zIndex: 1000,
  };

  const navContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    paddingBottom: '24px', // Add padding at the bottom to ensure last items are visible
  };

  const menuItemStyle = {
    cursor: 'pointer',
    padding: '12px 16px',
    transition: 'box-shadow 0.3s, background 0.3s',
    borderRadius: '5px',
    fontFamily: 'Poppins, sans-serif',
  };

  const handleMonthClick = (index) => {
    onMonthSelect(index);
    onViewChange('dashboard');
  };

  return (
    <div className={`sidebar ${open ? 'open' : ''}`}>
      <div style={navContainerStyle}>
        {/* Top navigation items */}
        <div
          onClick={() => onViewChange('home')}
          className="menu-item"
        >
          Home
        </div>
        
        {/* Scrollable month section with a header */}
        <div style={{ margin: '8px 0 4px 10px', fontWeight: 'bold', fontSize: '18px' }}>
          Select Month
        </div>
        <div style={{ maxHeight: '50vh', overflowY: 'auto', padding: '4px', marginBottom: '8px' }}>
          {months.map((month, index) => (
            <div
              key={month}
              onClick={() => handleMonthClick(index)}
              className={`menu-item ${selectedMonth === index ? 'selected' : ''}`}
            >
              {month}
            </div>
          ))}
        </div>
        
        {/* Additional navigation items positioned below month selection */}
        <div
          onClick={() => onViewChange('benefits')}
          className="menu-item"
        >
          Benefits of Solar Energy
        </div>
      </div>
    </div>
  );
};

export default Sidebar;