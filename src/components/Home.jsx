import React from 'react';
import './Home.css';

const Home = ({ onViewChange }) => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="site-title">SOLARON</h1>
        <p className="site-description">
        A smart platform for monitoring and optimizing solar energy generation 
        </p>
        
        <div className="image-container">
          <div className="image-wrapper">
            <img 
              src="src\components\assets\Home.jpg" 
              alt="Solar Home" 
              className="home-image"
            />
          </div>
          <div className="image-wrapper">
            <img 
              src="src\components\assets\Bulb.jpg" 
              alt="Solar Bulb" 
              className="bulb-image"
            />
          </div>
        </div>
        
        <div className="vit-link-container">
          <button 
            className="vit-link-button"
            onClick={() => onViewChange('vit-solar')}
          >
            Discover How VIT Vellore Harnesses Solar Energy 
            <span className="arrow-icon">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home; 