import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => (
  <aside className="sidebar">
    <h2 className="logo">Finance</h2>
    <nav>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/transactions">Transactions</NavLink>
      <NavLink to="/categories">Categories</NavLink>
      <NavLink to="/budget">Budget</NavLink>
      <NavLink to="/reports">Reports</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </nav>
  </aside>
);

export default Sidebar;
