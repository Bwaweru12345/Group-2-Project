import React, { useState } from 'react';
import './Bills.css'; // Import the CSS file

const Bills = ({ handlePayBill }) => {
  const [bills, setBills] = useState([]);
  const [billName, setBillName] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const [billDate, setBillDate] = useState('');

  const handleAddBill = (e) => {
    e.preventDefault();

    const newBill = {
      name: billName,
      amount: parseFloat(billAmount),
      date: billDate,
      paid: false,
    };

    setBills([...bills, newBill]);
    setBillName('');
    setBillAmount('');
    setBillDate('');
  };

  return (
    <div className='background'>
      <div className="bills-container">
        <h2 className="bills-title">Bills</h2>
        <form onSubmit={handleAddBill}>
          <label>
            Name:
            <input
              type="text"
              value={billName}
              onChange={(e) => setBillName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Amount:
            <input
              type="number"
              step="0.01"
              value={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
            />
          </label>
          <br />
          <label>
            Date:
            <input
              type="date"
              value={billDate}
              onChange={(e) => setBillDate(e.target.value)}
            />
          </label>
          <br />
          <button type="submit" className="add-bill-button">
            Add Bill
          </button>
        </form>

        <h3 className="bill-list-title">Your List</h3>
        {bills.length === 0 ? (
          <p>Get started 😀.</p>
        ) : (
          <ul className="bill-list">
            {bills.map((bill, index) => (
              <li key={index} className="bill-item">
                <div className="bill-name">Name: {bill.name}</div>
                <div className="bill-amount">Amount: {bill.amount}</div>
                <div className="bill-date">Date: {bill.date}</div>
                {!bill.paid ? (
                  <button
                    className="pay-button"
                    onClick={() => handlePayBill(index)}
                  >
                    Pay
                  </button>
                ) : (
                  <div className="paid-text">Paid 🎉</div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Bills;
