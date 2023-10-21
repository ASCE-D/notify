import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 980) {
        setShowMenu(false);
      }
    };

    // Add a listener for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="navbarfull">
        <nav className={showMenu ? "main-nav" : "main-nav shadow"}>
          <div className="brand">
            <NavLink to="/">
              <h2>Notify</h2>
            </NavLink>
          </div>

          <div className="menu-link">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/reminders">Reminders</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMenu(!showMenu)}>
              {showMenu ? <GiCrossMark /> : <GiHamburgerMenu />}
            </a>
          </div>
        </nav>

        <div className={showMenu ? "mobile-menu-open" : "mobile-menu-close"}>
          <AnimatePresence>
            {showMenu && (
              <motion.div
                className="dropdown-menu"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
              >
                <NavLink to="/">Home</NavLink>
                <NavLink to="/reminders">Reminders</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="shadow-space"></div>
    </>
  );
};

export default Navbar;
