import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import img1 from "../images/NITKKR_logo.png";

import AuthService from "./services/auth.service";

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

      <div className="row m-1">
        <div className="col-md-2 offset-md-1" style={{ padding: "0px"}}>
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
        </div>
        <div className="col-md-9">
          <h1 className="ht1">
            Shiksha : A Initiative for helping those in need
          </h1>
          <h3 className="ht4">We are empowering Students</h3>
        </div>
      </div>

      {/* Header Ended */}
      {/* Navbar Starts */}
      <>
        <div className="row m-1">
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-dark custom-class1">
              {/* <div className="container-fluid"> */}
              {/* Button Toggle for Smaller Screens */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#main_nav"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                {/* Toggler Icon for Smaller Screens */}
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* Navbar Starting  */}
              <div className="collapse navbar-collapse" id="main_nav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 custom-class1">
                  {/* First Item in Navbar  */}
                  <li className="nav-item px-4">
                    <Link
                      className="nav-link custom-class2"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li
                    className="nav-item dropdown px-4 dropbtn"
                    id="myDropdown"
                  >
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      About Organization
                    </Link>
                    {/* Nested DropDown */}
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/about">
                          About POG
                        </Link>
                      </li>

                      <li>
                        <Link className="dropdown-item" to="/about">
                          Mission and Vision
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Administrative Structure &raquo;
                        </Link>
                        {/* Nested Dropdown for Particular Item */}
                        <ul className="submenu dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="/about">
                              Submenu item 1
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/about">
                              Submenu item 2
                            </Link>
                          </li>
                          <li className="dropbtn">
                            <Link className="dropdown-item" to="/about">
                              Submenu item 3 &raquo;
                            </Link>
                            <ul className="submenu dropdown-menu">
                              <li>
                                <Link className="dropdown-item" to="/about">
                                  Multi level 1
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to="/about">
                                  Multi level 2
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/about">
                              Submenu item 4
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/about">
                              Submenu item 5
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/about">
                          Core's Message
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/about">
                          Our History
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/about">
                          Partnership
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/structure">
                          Structure
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown px-4 dropbtn">
                    <Link
                      className="nav-link dropdown-toggle "
                      to="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Education
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/page/1">
                          Foundational
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/page/2">
                          Preparatory
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/page/3">
                          Middle
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/page/4">
                          Secondary
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/page/5">
                          Competitve Exams
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item px-4 dropdown dropbtn">
                    <Link
                      className="nav-link dropdown-toggle "
                      to="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      CSR Institution
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/page/7">
                          Navodaya School
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/page/8">
                          Central Funded Schools
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown px-4 dropbtn">
                    <Link
                      className="nav-link dropdown-toggle "
                      to="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Admission
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/page/9">
                          IIT JEE
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/page/10">
                          NEET
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/page/11">
                          Central Universities
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/page/12">
                          State Universities
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/page/13">
                          Autonomous Institution
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item px-4 dropdown px-4 dropbtn">
                    <Link
                      className="nav-link dropdown-toggle "
                      to="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Employment
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/page/14">
                          Government Sector
                        </Link>
                      </li>

                      <li>
                        <Link className="dropdown-item" to="/page/15">
                          Private Sector
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/page/16">
                          Businees
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item px-4 dropdown px-4 dropbtn">
                    <Link
                      className="nav-link dropdown-toggle "
                      to="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sports
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/page/17">
                          About Sports
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/page/18">
                          Chess
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item px-4 dropdown px-4 dropbtn">
                    <Link
                      className="nav-link dropdown-toggle "
                      to="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Overseas
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/page/19">
                          Education
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/page/20">
                          Employment
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/page/24">
                          Visit
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="nav-item dropdown px-4 dropbtn"
                    id="myDropdown"
                  >
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      data-bs-toggle="dropdown"
                    >
                      Resources
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/about">
                          Success Stories
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/about">
                          Photo Galleries
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item px-4 dropdown px-4 dropbtn">
                    <Link
                      className="nav-link dropdown-toggle "
                      to="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Center of Excellence
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/page/21">
                          Option 1
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/page/22">
                          Option 2
                        </Link>
                      </li>
                    </ul>
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
                  {currentUser && (
                    <div className="navbar-nav">
                      <li className="nav-item px-4">
                        <Link to="/profile" className="nav-link">
                          {currentUser.firstName}
                        </Link>
                      </li>
                      <li className="nav-item px-4">
                        <Link to="/" className="nav-link px-4" onClick={logOut}>
                          Log Out
                        </Link>
                      </li>
                    </div>
                  )}

                  {!currentUser && (
                    <li className="nav-item dropdown px-4 dropbtn">
                      <Link
                        className="nav-link dropdown-toggle "
                        to="/"
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
              {/* </div> */}
            </nav>
          </div>
        </div>
      </>
    </div>
  );
};
