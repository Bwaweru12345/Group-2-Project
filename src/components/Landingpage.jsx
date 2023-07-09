import { Link } from "react-router-dom";


function LandingPage() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/wallet">My Wallet</Link>
          </li>
          <li className="navbar-item" >
            <Link to="/Income">Income</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Transactions">Transactions</Link>
          </li>
          <li className="navbar-item">
            <Link to="/usage">Personal</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Bills">Bills</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Savings">Savings</Link>
          </li>
          <li className="navbar-item">
            <Link to="/graph">Graphical analysis</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default LandingPage;
