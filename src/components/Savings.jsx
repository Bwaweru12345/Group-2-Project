import React, { useState, useEffect } from 'react';

const Savings= () => {
  const [savings, setSavings] = useState(0);
  const [lockedSavings, setLockedSavings] = useState(0);
  const [accounts, setAccounts] = useState([]);
  const [goal, setGoal] = useState(0);
  const [loan, setLoan] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => {
        setSavings(data.savings);
        setLockedSavings(data.lockedSavings);
        setAccounts(data.accounts);
        setGoal(data.goal);
        setLoan(data.loan);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Savings: Ksh. {savings}</h2>
      <h2>Locked Savings: Ksh. {lockedSavings}</h2>
      <h2>Accounts:</h2>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>{account.name}: Ksh. {account.balance}</li>
        ))}
      </ul>
      <h2>Goal Savings/Target: Ksh. {goal}</h2>
      <h2>Loan: Ksh. {loan}</h2>
    </div>
  );
};

export default Savings;
