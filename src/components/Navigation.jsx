import React from "react";
import { NavLink } from "react-router-dom";
import HomeLink from "../assets/favicon-32x32.png"

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand d-flex" to="/">
            <img src={HomeLink} alt="Home Link" style={{height: 30 + 'px'}}/>
            <span className="pl-3"
              dangerouslySetInnerHTML={{__html: "T&E Software"}}>
            </span>
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link pr-4" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pr-4" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pr-4" to="/contact">
                  Contact
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/gaming">
                  Gaming
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;