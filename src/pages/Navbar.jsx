import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Navbar.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header>
    

      <nav className="navbar navbar-expand-lg navbar-custom py-3">
        <div className="container-fluid">

          {/* Logo */}
          <NavLink
            to="/"
            className="navbar-brand text-white d-flex align-items-center gap-2"
            onClick={closeMenu}
          >
            <img
              src="https://html.xpressbuddy.com/aivora/demo/assets/img/logo/logo.svg"
              alt="Logo"
              style={{ height: "36px" }}
            />
          </NavLink>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleMenu}
          >
            <span className="text-white fs-2">≡</span>
          </button>

          {/* Menu */}
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto align-items-lg-center ">

              <li className="nav-item">
                <NavLink to="/demos" className="nav-link" onClick={closeMenu}>
                  Pre Built Demos
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/features" className="nav-link" onClick={closeMenu}>
                  Features
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/pages" className="nav-link" onClick={closeMenu}>
                  Pages
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/support" className="nav-link" onClick={closeMenu}>
                  Support
                </NavLink>
              </li>
              

              {/* Button */}
              <li className="nav-item d-flex align-items-center ms-auto ">
                <button className="btn purchase-btn" onClick={() => alert("Purchase clicked")}>
                  PURCHASE NOW
                </button>

                <div className="quick-btn" onClick={() => alert("Quick Action")}>
                  <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                    <path d="M5 12h14M13 5l6 7-6 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
