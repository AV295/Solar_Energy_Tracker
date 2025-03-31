import React from 'react';
import './Benefits.css';

const Benefits = () => {
  return (
    <div className="benefits-container">
      <h1 className="benefits-title">Solar Energy Benefits</h1>
      {/*<p className="benefits-subtitle">Everything you need to know about going solar</p>*/}
      
      {/* Why Use Solar Energy Section */}
      <section className="benefits-section">
        <h2>🌞 Why Use Solar Energy?</h2>
        <ul className="benefits-list">
          <li><strong>Renewable & Sustainable:</strong> Solar energy is infinite and eco-friendly.</li>
          <li><strong>Cost Savings:</strong> Reduce electricity bills significantly over time.</li>
          <li><strong>Low Maintenance:</strong> Solar panels require minimal upkeep and last for decades.</li>
          <li><strong>Energy Independence:</strong> Reduce reliance on fossil fuels and grid electricity.</li>
          <li><strong>Increases Property Value:</strong> Homes with solar panels sell for more.</li>
          <li><strong>Government Incentives:</strong> Many countries offer tax credits & rebates.</li>
        </ul>
      </section>

      {/* How Solar Panels Work */}
      <section className="benefits-section">
        <h2>⚡ How Do Solar Panels Work?</h2>
        <p>Solar panels absorb sunlight and convert it into electricity using photovoltaic (PV) cells. The generated DC electricity is then converted into AC electricity using an inverter, which powers your home appliances.</p>
      </section>

      {/* Step-by-Step Installation Guide */}
      <section className="benefits-section">
        <h2>🔧 Step-by-Step Installation Process</h2>
        <div className="steps-grid">
          <div className="step-card">
            <h3>1. Assess Your Energy Needs</h3>
            <p>Check your average electricity usage to determine the appropriate solar system size.</p>
          </div>
          <div className="step-card">
            <h3>2. Choose the Right Solar Panels</h3>
            <p>Consider efficiency, cost, and type (monocrystalline, polycrystalline, thin-film).</p>
          </div>
          <div className="step-card">
            <h3>3. Evaluate Roof Condition & Sunlight Exposure</h3>
            <p>Ensure your roof has enough structural strength and optimal sunlight exposure.</p>
          </div>
          <div className="step-card">
            <h3>4. Obtain Necessary Permits</h3>
            <p>Check with local authorities to get approvals and incentives.</p>
          </div>
          <div className="step-card">
            <h3>5. Install Mounting Structures</h3>
            <p>Secure mounting racks on the roof to hold solar panels.</p>
          </div>
          <div className="step-card">
            <h3>6. Install Solar Panels</h3>
            <p>Fix the solar panels onto the mounting structures securely.</p>
          </div>
          <div className="step-card">
            <h3>7. Connect Wiring & Inverter</h3>
            <p>Connect panels to an inverter and your home's electrical system.</p>
          </div>
          <div className="step-card">
            <h3>8. Inspection & System Activation</h3>
            <p>After approval, activate your system to start generating clean energy.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="benefits-section">
        <h2>❓ Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-card">
            <h3>💰 How much does solar installation cost?</h3>
            <p>Costs vary based on panel type, system size, and location. Typical residential systems range from $10,000 to $30,000.</p>
          </div>
          <div className="faq-card">
            <h3>🔋 Do I need a battery for my solar system?</h3>
            <p>A battery is optional but useful for storing excess energy, especially if you live in an area with frequent power outages.</p>
          </div>
          <div className="faq-card">
            <h3>📅 How long do solar panels last?</h3>
            <p>Most panels have a lifespan of 25-30 years with minimal maintenance.</p>
          </div>
          <div className="faq-card">
            <h3>⚡ Can I install solar panels myself?</h3>
            <p>DIY solar installation is possible but can be complex. Hiring a professional ensures compliance and efficiency.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;