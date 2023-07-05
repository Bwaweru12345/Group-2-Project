import React, { useState } from 'react';

const Bills = () => {
  const [bills, setBills] = useState([]);
  const [newBill, setNewBill] = useState({
    name: '',
    amount: '',
    isPaid: false,
    dueDate: '',
  });

  const addBill = () => {
    setBills([...bills, newBill]);
    setNewBill({
      name: '',
      amount: '',
      isPaid: false,
      dueDate: '',
    });
  };

  const togglePayment = (id) => {
    setBills(
      bills.map((bill) =>
        bill.id === id ? { ...bill, isPaid: !bill.isPaid } : bill
      )
    );
  };

  return (
    <div className="bills-container">
      <h1>My Bills</h1>
      <table className="bills-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id}>
              <td>{bill.name}</td>
              <td>${bill.amount}</td>
              <td
                className={bill.isPaid ? 'paid' : 'not-paid'}
                onClick={() => togglePayment(bill.id)}
              >
                {bill.isPaid ? 'Paid' : 'Not Paid'}
              </td>
              <td>{bill.dueDate}</td>
              <td>
                <button onClick={() => togglePayment(bill.id)}>
                  {bill.isPaid ? 'Unpay' : 'Pay'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-bill-container">
        <h3>Add a Bill</h3>
        <input
          type="text"
          placeholder="Name"
          value={newBill.name}
          onChange={(e) => setNewBill({ ...newBill, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          value={newBill.amount}
          onChange={(e) => setNewBill({ ...newBill, amount: e.target.value })}
        />
        <input
          type="date"
          placeholder="Due Date"
          value={newBill.dueDate}
          onChange={(e) => setNewBill({ ...newBill, dueDate: e.target.value })}
        />
        <button onClick={addBill}>Add Bill</button>
      </div>
    </div>
  );
};

export default Bills;
