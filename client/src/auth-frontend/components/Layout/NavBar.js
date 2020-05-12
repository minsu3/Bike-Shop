import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ currentUser, logout }) => {
  const links = (
    <>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/userauth">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/userauth/login">
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/userauth/register">
          Register
        </NavLink>
      </li>
    </>
  );

  const authLinks = (
    <>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/userauth/profile">
          Profile
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/userauth/contacts">
          Contacts
        </NavLink>
      </li>
      <li className="nav-item">
        <span
          className="nav-link"
          style={{ cursor: "pointer" }}
          onClick={logout}
        >
          Logout
        </span>
      </li>
    </>
  );

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-secondary mb-5" style={{position:"absolute", top: "95px", width: "100%"}}>
      <div className="container">
        {/* <NavLink className="navbar-brand" exact to="/userauth">
          Sign In or Register
        </NavLink> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ml-auto">
            {currentUser ? authLinks : links}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
