import React, { useEffect, useState } from 'react';
import './Income.css';

function Income() {
  const [incomeData, setIncomeData] = useState([]);

  useEffect(() => {
    // Fetch income data from the backend
    fetch('http://localhost:8000/api/incomes')
  .then(response => response.json())
  .then(data => setIncomeData(data))
  .catch(error => console.error(error));

  }, []);

  return (
    <div>
      <h2 className="income-heading">Income</h2>
      <table className="income-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Source</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {incomeData.map((income) => (
            <tr key={income.id}>
              <td>{income.date}</td>
              <td>{income.source}</td>
              <td>{income.description}</td>
              <td>{income.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Income;
