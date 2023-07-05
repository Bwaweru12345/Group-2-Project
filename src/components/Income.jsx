import React, { useEffect, useState } from 'react';

function Income() {
  const [incomeData, setIncomeData] = useState([]);

  useEffect(() => {
    // Fetch income data from the backend
    fetch('/api/income') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => setIncomeData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Income</h2>
      <table>
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
