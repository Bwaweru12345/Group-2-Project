import React, { useState } from 'react';
import './Income.css';

const IncomeList = () => {
  const [incomes, setIncomes] = useState([]);
  const [source, setSource] = useState('');
  const [dateReceived, setDateReceived] = useState('');
  const [amount, setAmount] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddIncome = (e) => {
    e.preventDefault();

    const newIncome = {
      source,
      dateReceived,
      amount: parseFloat(amount),
    };

    setIncomes([...incomes, newIncome]);
    setSource('');
    setDateReceived('');
    setAmount('');
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredIncomes = incomes.filter((income) => {
    const incomeSource = income.source.toLowerCase();
    const query = searchQuery.toLowerCase();

    return incomeSource.includes(query);
  });

  return (
    <div className='background2'>
    <div className="income-list-container">
      
      <input
        type="text"
        placeholder="Search by source"
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="incomes-container">
        {filteredIncomes.map((income, index) => (
          <div className="income-card" key={index}>
            <div className="income-source">{income.source}</div>
            <div className="income-date">Date Received: {income.dateReceived}</div>
            <div className="income-amount">Amount: {income.amount}</div>
          </div>
        ))}
      </div>

     
      <form onSubmit={handleAddIncome}> 
      <h54>Add New Income</h54>
        <label>
          Source:
          <input
            type="text"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </label>
        <br />
        <label>
          Date Received:
          <input
            type="date"
            value={dateReceived}
            onChange={(e) => setDateReceived(e.target.value)}
          />
        </label>
        <br />
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Income</button>
      </form>
    </div></div>
  );
};

export default IncomeList;
