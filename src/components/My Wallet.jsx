import React, { useState, useEffect } from "react";
import { Card, Button, Header } from "semantic-ui-react";

const MyWallet = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // Get the user's balance from the API
    fetch("/api/balance")
      .then((res) => res.json())
      .then((data) => setBalance(data.balance));
  }, []);

  return (
    <Card>
      <Header>My Wallet</Header>
      <p>Balance: ${balance}</p>
      <Button>Add Money</Button>
      <Button>Withdraw Money</Button>
    </Card>
  );
};

export default MyWallet;