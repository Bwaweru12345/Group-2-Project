import React, { useState } from 'react';
import './Savings.css'; 

const Savings = () => {
  const [savings, setSavings] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanBalance, setLoanBalance] = useState(0);
  const [savingsInput, setSavingsInput] = useState(0);
  const [loanInput, setLoanInput] = useState(0);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [repaymentDate, setRepaymentDate] = useState('');

  const handleSave = () => {
    setSavings((prevSavings) => prevSavings + savingsInput);
    setSavingsInput(0);
  };

  const handleWithdraw = () => {
    if (savingsInput <= savings) {
      setSavings((prevSavings) => prevSavings - savingsInput);
      setSavingsInput(0);
    } else {
      alert('Insufficient savings');
    }
  };

  const handleLoanRequest = () => {
    if (!termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }

    setLoanAmount((prevLoanAmount) => prevLoanAmount + loanInput);
    setLoanBalance((prevLoanBalance) => prevLoanBalance + loanInput);
    setLoanInput(0);
  };

  const handleLoanRepayment = () => {
    if (loanInput <= loanBalance) {
      setLoanBalance((prevLoanBalance) => prevLoanBalance - loanInput);
      setLoanInput(0);
    } else {
      alert('Invalid loan repayment amount');
    }
  };

  const handleTermsAccepted = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleRepaymentDateChange = (e) => {
    setRepaymentDate(e.target.value);
  };

  return (
    <div className='background3'>
    <div className="savings-container">
      <div className="savings-form">
        <h3>Savings Account</h3>
        <p>Current Savings: ${savings}</p>
        <input
          type="number"
          value={savingsInput}
          onChange={(e) => setSavingsInput(parseFloat(e.target.value))}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={handleWithdraw}>Withdraw</button>
      </div>

      <div className="loan-form">
        <h3>Loan Account</h3>
        <p>Loan Amount: ${loanAmount}</p>
        <p>Loan Balance: ${loanBalance}</p>
        <input
          type="number"
          value={loanInput}
          onChange={(e) => setLoanInput(parseFloat(e.target.value))}
        />
        <label>
          Repayment Date:
          <input
            type="date"
            value={repaymentDate}
            onChange={handleRepaymentDateChange}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={handleTermsAccepted}
          />
          Accept Terms and Conditions
        </label>
        <button onClick={handleLoanRequest}>Request Loan</button>
        <button onClick={handleLoanRepayment}>Repay Loan</button>
      </div>
    </div>
    </div>
  );
};

export default Savings;
