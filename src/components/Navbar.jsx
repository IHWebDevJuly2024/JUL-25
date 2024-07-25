import { Link, NavLink } from "react-router-dom";
import ditto from "../assets/ditto-happy.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src={ditto} alt="ditto logo" />
      </Link>
      <NavLink
        to="/dice"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        Dice
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
