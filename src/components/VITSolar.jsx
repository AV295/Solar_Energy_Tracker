import React from 'react';
import './VITSolar.css';

const VITSolar = () => {
  return (
    <div className="vit-solar-container">
      <h1 className="vit-solar-title">Solar Energy at VIT Vellore</h1>
      <div className="vit-solar-subtitle">Leading the way in sustainable campus energy</div>
      
      <div className="vit-solar-content">
        <section className="vit-solar-section">
          <h2>Pioneering Sustainability</h2>
          <p>
            VIT Vellore has emerged as a leading institution in sustainable energy practices by 
            implementing one of the largest on-campus solar installations in India. The university's 
            commitment to renewable energy has transformed its energy consumption patterns and set 
            a benchmark for educational institutions across the country.
          </p>
          
          <div className="vit-stats-container">
            <div className="vit-stat-card">
              <h3>5 MW</h3>
              <p>Total solar capacity installed</p>
            </div>
            <div className="vit-stat-card">
              <h3>80%</h3>
              <p>Campus energy needs met by solar</p>
            </div>
            <div className="vit-stat-card">
              <h3>7,500 MWh</h3>
              <p>Annual clean energy generated</p>
            </div>
            <div className="vit-stat-card">
              <h3>₹4.5 Cr</h3>
              <p>Annual savings on electricity</p>
            </div>
          </div>
        </section>
        
        <section className="vit-solar-section">
          <h2>Implementation Strategy</h2>
          <p>
            VIT's solar journey began in 2015 with a pilot project that has since expanded across the campus.
            The university implemented a phased approach:
          </p>
          <ul className="vit-solar-list">
            <li><strong>Phase 1 (2015-2016):</strong> Rooftop installations on academic buildings (1 MW)</li>
            <li><strong>Phase 2 (2017-2018):</strong> Expansion to hostel buildings and parking areas (2 MW)</li>
            <li><strong>Phase 3 (2019-2020):</strong> Ground-mounted solar farm on campus periphery (2 MW)</li>
            <li><strong>Phase 4 (Ongoing):</strong> Integration of smart grid technologies and battery storage</li>
          </ul>
        </section>
        
        <section className="vit-solar-section">
          <h2>Environmental Impact</h2>
          <p>
            The solar initiative at VIT Vellore has had significant environmental benefits:
          </p>
          <ul className="vit-solar-list">
            <li>Reduction of over 6,500 tonnes of CO₂ emissions annually</li>
            <li>Equivalent to planting approximately 300,000 trees</li>
            <li>Decreased reliance on coal-powered electricity by 80%</li>
            <li>Reduced campus carbon footprint by 60% since implementation</li>
          </ul>
        </section>
        
        <section className="vit-solar-section">
          <h2>Educational Integration</h2>
          <p>
            Beyond the environmental and economic benefits, VIT has integrated its solar infrastructure into its educational framework:
          </p>
          <ul className="vit-solar-list">
            <li>Real-time monitoring systems provide data for research and academic projects</li>
            <li>Dedicated renewable energy lab for students to study solar technology</li>
            <li>Internship opportunities with the campus solar maintenance team</li>
            <li>Annual solar energy innovation competitions for students</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default VITSolar; 