import React from 'react';
import './Dashboard.css';
import SolarEnergyGraph from './SolarEnergyGraph';

const Dashboard = ({ selectedMonth }) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Predefined data for each month
  const monthlyData = {
    January: { solarEnergy: 2800, thermalEnergy: 4200, co2Emissions: 2100, treesSaved: 165 },
    February: { solarEnergy: 3100, thermalEnergy: 4000, co2Emissions: 2300, treesSaved: 175 },
    March: { solarEnergy: 3500, thermalEnergy: 3800, co2Emissions: 2500, treesSaved: 185 },
    April: { solarEnergy: 3800, thermalEnergy: 3600, co2Emissions: 2700, treesSaved: 195 },
    May: { solarEnergy: 4200, thermalEnergy: 3400, co2Emissions: 2900, treesSaved: 205 },
    June: { solarEnergy: 4500, thermalEnergy: 3200, co2Emissions: 3100, treesSaved: 215 },
    July: { solarEnergy: 4800, thermalEnergy: 3000, co2Emissions: 3300, treesSaved: 225 },
    August: { solarEnergy: 4500, thermalEnergy: 3200, co2Emissions: 3100, treesSaved: 215 },
    September: { solarEnergy: 4200, thermalEnergy: 3400, co2Emissions: 2900, treesSaved: 205 },
    October: { solarEnergy: 3800, thermalEnergy: 3600, co2Emissions: 2700, treesSaved: 195 },
    November: { solarEnergy: 3100, thermalEnergy: 4000, co2Emissions: 2300, treesSaved: 175 },
    December: { solarEnergy: 2800, thermalEnergy: 4200, co2Emissions: 2100, treesSaved: 165 }
  };

  const currentMonth = months[selectedMonth];
  const data = monthlyData[currentMonth];

  const cards = [
    {
      title: 'Solar Energy Generated',
      value: `${data.solarEnergy} kWh`,
      color: '#2196f3',
      description: `Total solar energy generated in ${currentMonth}`
    },
    {
      title: 'Energy Saved',
      value: `${data.thermalEnergy - data.solarEnergy} kWh`,
      color: '#4caf50',
      description: `Compared to thermal energy generation`
    },
    {
      title: 'CO₂ Emissions Prevented',
      value: `${data.co2Emissions} kg`,
      color: '#f44336',
      description: `Environmental impact reduction`
    },
    {
      title: 'Trees Saved',
      value: `${data.treesSaved}`,
      color: '#8bc34a',
      description: `Equivalent to planting new trees`
    }
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">
        Energy Dashboard - {currentMonth}
      </h2>
      
      <SolarEnergyGraph currentMonth={currentMonth} />

      <div className="cards-grid">
        {cards.map((card, index) => (
          <div className="card" key={card.title}>
            <div className="card-content">
              <h3 className="card-title">
                {card.title}
              </h3>
              <strong className="card-value" style={{ color: card.color }}>
                {card.value}
              </strong>
              <p className="card-description">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard; 