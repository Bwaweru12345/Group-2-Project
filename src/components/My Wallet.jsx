import React from 'react';
import { Link } from 'react-router-dom';
import './wallet.css';

const Wallet = () => {
  return (
    <div className="wallet-container">
      <div className="card-grid">
        <div className="card">
          <div className="image-container">
            <div className="image-overlay">
              <h2>Financia</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="home-container">
        <h1>Welcome to My Finance App!</h1>
        <p>Take control of your finances and achieve your financial goals.</p>
        <div className="cta-buttons">
          <Link to="/income" className="cta-button">
            Track Income
          </Link>
          <Link to="/expenses" className="cta-button">
            Manage Expenses
          </Link>
          <Link to="/savings" className="cta-button">
            Save Money
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
