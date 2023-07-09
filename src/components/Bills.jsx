import React, { useEffect, useState } from 'react';

function Bills() {
  const [bills, setBills] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    fetchBills();
  }, [userId]);

  const fetchBills = async () => {
    if (!userId) return; // Skip fetching if userId is not set

    try {
      const response = await fetch(`http://localhost:3000/users/${userId}/bills`, {
        headers: {
          Authorization: 'Bearer YOUR_AUTH_TOKEN', // Replace with the actual token
        },
      });

      if (response.ok) {
        const data = await response.json();
        setBills(data);
      } else {
        console.error('Error fetching bills:', response.status);
      }
    } catch (error) {
      console.error('Error fetching bills:', error);
    }
  };

  const handleCreateBill = async (e) => {
    e.preventDefault();

    // Implement the logic to create a new bill
    // ...

    // After creating the bill, you may want to fetch the updated list of bills
    fetchBills();
  };

  return (
    <div>
      <h2>Bills</h2>
      <ul>
        {bills.map((bill) => (
          <li key={bill.id}>
            <h3>{bill.name}</h3>
            <p>Amount: {bill.amount}</p>
            <p>Due Date: {bill.due_date}</p>
            <p>Is Paid: {bill.is_paid ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>

      <h3>Create Bill</h3>
      <form onSubmit={handleCreateBill}>
        {/* Form inputs */}
        <button type="submit">Create Bill</button>
      </form>
    </div>
  );
}

export default Bills;
