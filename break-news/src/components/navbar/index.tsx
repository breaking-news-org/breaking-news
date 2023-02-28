import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Navbar({ links = [] }) {
  return (
    <div className="container">
      <nav className="navbar navbar-expand text-white">
        <div className="me-auto">
          <span className="d-flex align-items-center">
            <img src={logo} height={20} className={"me-2"} />
            <Link to="/" className="brand-name me-auto">
              FDP
            </Link>
          </span>
        </div>

        <ul className="navbar-nav">
          {links.length > 0 &&
            links.map((link, key) => (
              <li className="nav-link" key={key}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "navlink isActive" : "navlink"
                  }
                  to={link.url}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;