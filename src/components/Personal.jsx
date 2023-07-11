import React, { useEffect, useState } from 'react';

function Personal() {
  const [incomes, setIncomes] = useState([]);
  const [newIncome, setNewIncome] = useState({ name: '', amount: 0 });

  // Fetch personal incomes
  useEffect(() => {
    fetchPersonalIncomes();
  }, []);

  const fetchPersonalIncomes = async () => {
    try {
      const response = await fetch('http://localhost:3000/personals');
      if (response.ok) {
        const data = await response.json();
        setIncomes(data);
      } else {
        throw new Error('Error fetching personal incomes');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Create a new personal income
  const createPersonalIncome = async () => {
    try {
      const response = await fetch('http://localhost:3000/personals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ personal: newIncome }),
      });
      if (response.ok) {
        const data = await response.json();
        setIncomes([...incomes, data]);
        setNewIncome({ name: '', amount: 0 });
      } else {
        throw new Error('Error creating personal income');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Delete a personal income
  const deletePersonalIncome = async (incomeId) => {
    try {
      const response = await fetch(`http://localhost:3000/personals/${incomeId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setIncomes(incomes.filter((income) => income.id !== incomeId));
      } else {
        throw new Error('Error deleting personal income');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Pay a personal income
  const payPersonalIncome = async (incomeId) => {
    try {
      const response = await fetch(`http://localhost:3000/personals/${incomeId}/pay`, {
        method: 'PUT',
      });
      if (response.ok) {
        const updatedIncome = await response.json();
        setIncomes(incomes.map((income) => (income.id === incomeId ? updatedIncome : income)));
      } else {
        throw new Error('Error updating personal income');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Personal Incomes</h2>
      <ul>
        {incomes.map((income) => (
          <li key={income.id}>
            <strong>{income.name}</strong> - {income.amount}
            {!income.isPaid && (
              <button onClick={() => payPersonalIncome(income.id)}>Pay</button>
            )}
            <button onClick={() => deletePersonalIncome(income.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h3>Add New Income</h3>
      <form onSubmit={createPersonalIncome}>
        <input
          type="text"
          value={newIncome.name}
          onChange={(e) => setNewIncome({ ...newIncome, name: e.target.value })}
          placeholder="Name"
          required
        />
        <input
          type="number"
          value={newIncome.amount}
          onChange={(e) => setNewIncome({ ...newIncome, amount: Number(e.target.value) })}
          placeholder="Amount"
          required
        />
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
}

export default Personal;
