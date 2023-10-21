import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu , GiCrossMark } from "react-icons/gi";
import "../styles/navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <><div className="navbarfull">
      <nav className={showMenu ? "main-nav" : "main-nav shadow"}>
        <div className="brand">
          <h2>Ashish</h2>
        </div>

        <div className="menu-link">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/reminders">Reminders</NavLink>

          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <GiCrossMark /> : <GiHamburgerMenu /> }
            
          </a>
        </div>
        
      </nav>
      
      <div
          className={showMenu ? "mobile-menu-open" : "mobile-menu-close"}
        >
          <NavLink to="/">Home</NavLink>

          <NavLink to="/reminders">Reminders</NavLink>

          <NavLink to="/contact">Contact</NavLink>
        </div>
        </div>
        
      <div className="shadow-space"></div>
    </>
  );
};

export default Navbar;
