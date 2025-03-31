import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Fixed daily data for each month
const monthlyDailyData = {
  January: [/* 31 values */],
  February: [/* 28/29 values */],
  March: [/* 31 values */],
  April: [/* 30 values */],
  May: [/* 31 values */],
  June: [/* 30 values */],
  July: [/* 31 values */],
  August: [/* 31 values */],
  September: [/* 30 values */],
  October: [/* 31 values */],
  November: [/* 30 values */],
  December: [/* 31 values */]
};

// Generate fixed data for each month (run once)
const generateFixedMonthlyData = () => {
  const months = Object.keys(monthlyDailyData);
  const baseValues = {
    January: 150, February: 180, March: 220, April: 250,
    May: 300, June: 320, July: 350, August: 330,
    September: 280, October: 230, November: 180, December: 150
  };

  months.forEach(month => {
    const daysInMonth = new Date(2024, months.indexOf(month) + 1, 0).getDate();
    const baseValue = baseValues[month];
    
    monthlyDailyData[month] = Array.from({ length: daysInMonth }, (_, day) => {
      // Create slight variations but keep them consistent
      const variation = Math.sin(day * 0.2) * 20; // Using sin for smooth variations
      return Math.round(baseValue + variation);
    });
  });
};

// Generate the fixed data once
generateFixedMonthlyData();

const SolarEnergyGraph = ({ currentMonth }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white',
          font: {
            size: 14
          }
        }
      },
      title: {
        display: true,
        text: `Daily Solar Energy Generation - ${currentMonth}`,
        color: 'white',
        font: {
          size: 16,
          weight: 'bold'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#000',
        bodyColor: '#000',
        borderColor: 'white',
        borderWidth: 1,
        padding: 10
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'white',
          font: {
            size: 12
          }
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'white',
          font: {
            size: 12
          }
        }
      }
    }
  };

  const data = {
    labels: monthlyDailyData[currentMonth].map((_, index) => `Day ${index + 1}`),
    datasets: [
      {
        label: 'Energy Generated (kWh)',
        data: monthlyDailyData[currentMonth],
        borderColor: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointBackgroundColor: 'white',
        pointBorderColor: 'white',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#fff',
        pointRadius: 3,
        pointHoverRadius: 5
      }
    ]
  };

  return (
    <div style={{ 
      height: '400px', 
      width: '100%', 
      marginTop: '20px',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)'
    }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default SolarEnergyGraph; 