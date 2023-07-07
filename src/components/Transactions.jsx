import React, { useEffect, useState } from 'react';
const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
      fetchTransactions();
    }, []);
  const fetchTransactions = async () => {
    try {
      const response = await axios.get('/api/transactions');
      setTransactions(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Transaction History</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Day</th>
            <th>Time</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Recipient</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{moment(transaction.created_at).format('YYYY-MM-DD')}</td>
              <td>{moment(transaction.created_at).format('dddd')}</td>
              <td>{moment(transaction.created_at).format('HH:mm:ss')}</td>
              <td>{transaction.deposited ? 'Deposited' : 'Withdrawn'}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.recipient}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Transactions;