import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from './images/images.png';

import AuthService from './services/auth.service';
// import EventBus from '../common/EventBus';

export const Navbar = () => {
  // Initial State for ModeratorBoard
  // Only Show if Modal contains Role and valid login with token
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  // Check User When component loads
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    // If User is logged in , then change state according to User Role
    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes('ROLE_MODERATOR'));
      setShowAdminBoard(user.roles.includes('ROLE_ADMIN'));
    }
    // EventBus.on('logout', () => {
    //   logOut();
    // });
    // return () => {
    //   EventBus.remove('logout');
    // };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div>
      {/* Container for Logo and Headline */}
      <div className="container">
        <div className="row ">
          <div className="col-md-4" style={{ padding: '0px' }}>
            <img
              src={img1}
              alt="Logo"
              style={{ width: '80%', height: '150px' }}
            />
          </div>
          <div className="col-md-8 mt-4">
            <h3>Shiksha : A Initiative for helping those in need</h3>
          </div>
        </div>
      </div>
      {/* Navbar Starts */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">
            Siksha
          </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-4">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item px-4">
                <Link className="nav-link" to="/work">
                  Our Work
                </Link>
              </li>
              {showModeratorBoard && (
                <li className="nav-item px-4">
                  <Link to="/mod" className="nav-link">
                    Moderator
                  </Link>
                </li>
              )}
              {showAdminBoard && (
                <li className="nav-item px-4">
                  <Link to="/admin" className="nav-link">
                    Admin
                  </Link>
                </li>
              )}
              {currentUser && (
                <li className="nav-item px-4">
                  <Link to="/user" className="nav-link">
                    User
                  </Link>
                </li>
              )}
              {currentUser ? (
                <div className="navbar-nav">
                  <li className="nav-item px-4">
                    <Link to="/profile" className="nav-link">
                      {currentUser.name}
                    </Link>
                  </li>
                  <li className="nav-item px-4">
                    <Link
                      to="/"
                      className="nav-link justify-content-end"
                      onClick={logOut}
                    >
                      LogOut
                    </Link>
                  </li>
                </div>
              ) : (
                <div className="navbar-nav">
                  <li className="nav-item px-4">
                    <Link to="/signin" className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item px-4">
                    <Link to="/register" className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                </div>
              )}
              {!currentUser && (
                <li className="nav-item dropdown px-4">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/member"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Member
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/register">
                        New
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/signin">
                        Existing
                      </Link>
                    </li>
                  </ul>
                </li>
              )}

              <li className="nav-item px-4">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item px-4">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
