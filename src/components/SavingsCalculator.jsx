import React, { useState } from 'react';
import './SavingsCalculator.css';

const SavingsCalculator = () => {
  const [result, setResult] = useState(null);

  const calculateSavings = (e) => {
    e.preventDefault();
    const monthlyBill = parseFloat(e.target.monthlyBill.value);
    const solarCapacity = parseFloat(e.target.solarCapacity.value);
    const sunlightHours = parseFloat(e.target.sunlightHours.value);

    if (isNaN(monthlyBill) || isNaN(solarCapacity) || isNaN(sunlightHours) || 
        monthlyBill <= 0 || solarCapacity <= 0 || sunlightHours <= 0) {
      setResult({ error: 'Please enter valid positive numbers.' });
      return;
    }

    const monthlySolarGeneration = solarCapacity * sunlightHours * 30;
    const savings = monthlySolarGeneration * 0.12;
    const yearlySavings = savings * 12;
    const fiveYearSavings = yearlySavings * 5;

    setResult({
      monthly: savings.toFixed(2),
      yearly: yearlySavings.toFixed(2),
      fiveYear: fiveYearSavings.toFixed(2)
    });
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">Solar Savings Calculator</h1>
      
      <form className="calculator-form" onSubmit={calculateSavings}>
        <div className="input-group">
          <label htmlFor="monthlyBill">Monthly Electricity Bill ($):</label>
          <input 
            type="number" 
            id="monthlyBill" 
            name="monthlyBill"
            placeholder="Enter bill amount" 
            required 
          />
        </div>

        <div className="input-group">
          <label htmlFor="solarCapacity">Solar Panel Capacity (kW):</label>
          <input 
            type="number" 
            id="solarCapacity" 
            name="solarCapacity"
            placeholder="Enter installed capacity" 
            required 
          />
        </div>

        <div className="input-group">
          <label htmlFor="sunlightHours">Average Sunlight Hours per Day:</label>
          <input 
            type="number" 
            id="sunlightHours" 
            name="sunlightHours"
            placeholder="Enter sunlight hours" 
            required 
          />
        </div>

        <button type="submit" className="calculate-btn">Calculate Savings</button>
      </form>

      {result && (
        <div className="result-box">
          {result.error ? (
            <p className="error">{result.error}</p>
          ) : (
            <>
              <h2>Estimated Savings</h2>
              <div className="savings-grid">
                <div className="savings-item">
                  <h3>Monthly Savings</h3>
                  <p>${result.monthly}</p>
                </div>
                <div className="savings-item">
                  <h3>Yearly Savings</h3>
                  <p>${result.yearly}</p>
                </div>
                <div className="savings-item">
                  <h3>5-Year Savings</h3>
                  <p>${result.fiveYear}</p>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SavingsCalculator; 