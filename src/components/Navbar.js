import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../images/NITKKR_logo.png";
import { Button } from "react-bootstrap";

import AuthService from "./services/auth.service";
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
    setCurrentUser(user);
    // If User is logged in , then change state according to User Role
    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.level >= 1 && user.level <= 6);
      setShowAdminBoard(user.level === 1);
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
          <div className="col-md-12" style={{ padding: "0px" }}>
            <img
              src={img1}
              alt="Logo"
              style={{
                width: "150px",
                height: "100px",
                float: "left",
                marginRight: "15px",
              }}
            />
            <h1 className="ht1">
              Shiksha : A Initiative for helping those in need
            </h1>
            <h3 className="ht4">We are empowering Students</h3>
          </div>
        </div>
      </div>
      {/* Header Ended */}
      {/* Navbar Starts */}
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark custom-class1">
        <div>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 custom-class1">
              <li className="nav-item px-4">
                <Link className="nav-link custom-class2" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item px-4">
                <Link className="nav-link" to="/about">
                  About Organization
                </Link>
              </li>
              <li className="nav-item px-4">
                <Link className="nav-link" to="/education">
                  Education
                </Link>
              </li>
              <li className="nav-item px-4">
                <Link className="nav-link" to="/csr">
                  Institution CSR
                </Link>
              </li>
              <li className="nav-item px-4">
                <Link className="nav-link" to="/admission">
                  Admission
                </Link>
              </li>
              <li className="nav-item px-4">
                <Link className="nav-link" to="/employment">
                  Employment
                </Link>
              </li>
              <li className="nav-item px-4">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item px-4">
                <Link className="nav-link" to="/overseas">
                  Overseas
                </Link>
              </li>
              <li className="nav-item px-4">
                <Link className="nav-link" to="/center">
                  Center of Excellence
                </Link>
              </li>
              <li className="nav-item px-4">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              {showModeratorBoard && (
                <li className="nav-item px-4">
                  <Link to="/mod" className="nav-link">
                    Administration
                  </Link>
                </li>
              )}
              {/* {showAdminBoard && (
                <li className="nav-item px-4">
                  <Link to="/admin" className="nav-link">
                    Admin
                  </Link>
                </li>
              )} */}
              {/* {currentUser && (
                <li className="nav-item px-4">
                  <Link to="/user" className="nav-link">
                    User
                  </Link>
                </li>
              )} */}
              {currentUser ? (
                <div className="navbar-nav">
                  <li className="nav-item px-4">
                    <Link to="/profile" className="nav-link">
                      {currentUser.firstName}
                    </Link>
                  </li>
                  <li className="nav-item px-4">
                    <Link
                      to="/"
                      className="nav-link justify-content-end btn btn-danger"
                      onClick={logOut}
                    >
                      Log Out
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

            
              
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </div>
  );
};
