import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ currentUSer, logout }) => {
  const links = (
    <>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Sign In</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">Sign Up</NavLink>
      </li>
    </>
  );

  const authLinks = (
    <>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/profile">Profile</NavLink>
      </li>
      <li className="nav-item">
        <span className="nav-link" style={{ cursor: 'pointer' }} onClick={logout}>Sign Out</span>
      </li>
    </>
  );

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-5">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Auth API</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarExample04">
          <ul className="navbar-nav ml-auto">
            { currentUser ? authLinks : links}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;