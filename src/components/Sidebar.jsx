import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger / Menu Button */}
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside className={`sidebar ${open ? "show" : ""}`}>
        <h2 className="logo">Finance</h2>
        <nav>
          <NavLink to="/" onClick={() => setOpen(false)}>Dashboard</NavLink>
          <NavLink to="/transactions" onClick={() => setOpen(false)}>Transactions</NavLink>
          <NavLink to="/categories" onClick={() => setOpen(false)}>Categories</NavLink>
          <NavLink to="/budget" onClick={() => setOpen(false)}>Budget</NavLink>
          <NavLink to="/reports" onClick={() => setOpen(false)}>Reports</NavLink>
          <NavLink to="/settings" onClick={() => setOpen(false)}>Settings</NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
