import React from "react";
import "./Profile.css"; // Import the CSS file

const Profile = () => {
  const userData = {
    name: "John Doe",
    address: "123 Solar Street, Green City, SC 12345",
    totalEnergySaved: 15000,
    lifetimeSavings: 2500,
    solarPanelsInstalled: 12,
    installationDate: "January 15, 2023",
  };

  const stats = [
    { 
      title: "Total Energy Saved", 
      value: `${userData.totalEnergySaved} kWh`,
      color: "text-blue", 
      description: "Since installation" 
    },
    { 
      title: "Lifetime Savings", 
      value: `$${userData.lifetimeSavings}`,
      color: "text-green", 
      description: "Money saved on energy bills" 
    },
    { 
      title: "Solar Panels", 
      value: `${userData.solarPanelsInstalled}`,
      color: "text-orange", 
      description: "Number of panels installed" 
    },
  ];

  return (
    <div className="profile-container">
      <h2 className="profile-title">User Profile</h2>
      
      <div className="profile-card">
        <h3 className="profile-name">{userData.name}</h3>
        <p className="profile-info">{userData.address}</p>
        <p className="profile-info">Solar Installation Date: {userData.installationDate}</p>
      </div>

      <div className="stats-container">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.title}>
            <h4 className="stat-title">{stat.title}</h4>
            <strong className={`stat-value ${stat.color}`}>{stat.value}</strong>
            <p className="stat-description">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;