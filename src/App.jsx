import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Benefits from './components/Benefits';
import SavingsCalculator from './components/SavingsCalculator';
import VITSolar from './components/VITSolar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const AppContainer = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
};

const Header = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  background: 'rgba(255, 255, 255, 0.9)',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
};

const IconButton = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0.5rem',
  color: '#333',
};

const MainContent = {
  paddingTop: '80px',
  minHeight: 'calc(100vh - 80px)',
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden'; // Disable body scroll
    } else {
      document.body.style.overflow = 'auto'; // Enable body scroll
    }
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on unmount
    };
  }, [sidebarOpen]);

  const handleViewChange = (view) => {
    setCurrentView(view);
    setSidebarOpen(false);
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setCurrentView('dashboard'); // Ensure dashboard is shown when month is selected
    setSidebarOpen(false);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <Home onViewChange={handleViewChange} />;
      case 'dashboard':
        return <Dashboard selectedMonth={selectedMonth} />;
      case 'profile':
        return <Profile />;
      case 'benefits':
        return <Benefits />;
      case 'calculator':
        return <SavingsCalculator />;
      case 'vit-solar':
        return <VITSolar />;
      default:
        return <Home onViewChange={handleViewChange} />;
    }
  };

  return (
    <Router>
      <div style={AppContainer}>
        <header className="header">
          <button 
            className="header-button menu"
            onClick={toggleSidebar}
          >
            ☰ Menu
          </button>
          <button 
            className="header-button"
            onClick={() => handleViewChange('calculator')}
          >
            Calculator
          </button>
          <button 
            className="header-button profile"
            onClick={() => handleViewChange('profile')}
          >
            👤 Profile
          </button>
        </header>

        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onViewChange={handleViewChange}
          onMonthSelect={handleMonthSelect}
          selectedMonth={selectedMonth}
        />

        <main style={MainContent}>
          <Routes>
            <Route path="/" element={renderContent()} />
            <Route path="/dashboard" element={renderContent()} />
            <Route path="/profile" element={renderContent()} />
            <Route path="/calculator" element={renderContent()} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 