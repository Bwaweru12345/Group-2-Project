import React, { useState, useEffect } from "react";
import { Card, Button, Header, Divider } from "react-bootstrap";
import Bill from "./Bill";

const Bills = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    // Get the bills from the server
    fetch("/api/bills")
      .then((res) => res.json())
      .then((bills) => setBills(bills));
  }, []);

  return (
    <div>
      <Header>
        <h1>Bills</h1>
      </Header>
      <Divider />
      {bills.map((bill) => (
        <Card key={bill.id}>
          <Bill bill={bill} />
        </Card>
      ))}
    </div>
  );
};

export default Bills;