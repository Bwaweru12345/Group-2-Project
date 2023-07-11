import { Link } from "react-router-dom";
import './Header.css'
function LandingPage() {
  return (
    <div className="container">
      <nav className="navbar">
        <ul className="navbar-list">
        <li className="navbar-item">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Income">
              Income
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/usage">
              Personal
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Bills">
              Bills
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Savings">
              Savings
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/graph">
              Graphical Analysis
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default LandingPage;
