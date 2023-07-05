import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <div className="list">
        <Link to="/wallet">My Wallet</Link>
        <Link to="/Income">Income</Link>
        <Link to="/Transactions">Transactions</Link>
        <Link to="/usage">Personal</Link>
        <Link to="/Bills">Bills</Link>
        <Link to="/Savings">Savings</Link>
        <Link to="/graph">Graphical analysis</Link>
        <Link to="/Login">Login</Link>
      </div>
    </div>
  );
}

export default LandingPage;
