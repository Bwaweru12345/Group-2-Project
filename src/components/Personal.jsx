import React, { useState } from "react";

    const Personal = () => {
        const [personal, setPersonal] = useState([]);
        const [newPersonal, setNewPersonal] = useState({
            name: '',
            amount: '',
            isPaid: false,
            dueDate: '',
        });
    

        const addPersonal = () => {
            setPersonal([...personal, newPersonal]);
            setNewPersonal({
                name: '',
                amount: '',
                isPaid: false,
                dueDate: '',
            });
        };

        const togglePayment = (id) => {
            setPersonal(
                personal.map((personal) =>
                personal.id === id ? {...personal, isPaid: !bill} : bill
            )
            );
        };

        return (
            <div className="personal-container">
                <h1>Personal</h1>
                <table className="personal-table">
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
                        {personal.map((personal) => (
                            <tr key={personal.id}>
                                <td>{personal.name}</td>
                                <td>${personal.amount}</td>
                                <td
                                    className={personal.isPaid ? 'paid' : 'not-paid'}
                                    onClick={() => togglePayment(personal.id)}
                                    >
                                        {personal.isPaid ? 'Paid' : 'Not Paid'}
                                </td>
                                <td>{personal.dueDate}</td>
                                <td>
                                    <button onClick={() => togglePayment(personal.id)}>
                                        {personal.isPaid ? 'Unpay' : 'Pay'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="add-personal-container">
                    <h3>Add a Personal Item</h3>
                    <input 
                    type="text"
                    placeholder="Name"
                    value={newPersonal.name}
                    onChange={(e) => setNewPersonal({ ...newPersonal, name: e.target.value })} 
                    />
                    <input
                    type="number"
                    placeholder="Amount"
                    value={newPersonal.amount}
                    onChange={(e) => setNewPersonal({ ...newPersonal, amount: e.target.value })}
                    />
                    <input
                    type="date"
                    placeholder="Due Date"
                    value={newPersonal.dueDate}
                    onChange={(e) => setNewPersonal({ ...newPersonal, dueDate: e.target.value })}
                    />
                    <button onClick={addPersonal}>Add Item</button>
                </div>
            </div>
        );
    };

    export default Personal;