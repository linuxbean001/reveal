import React, { useState } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
import {
  FaRegBell,
  FaFingerprint,
  FaDesktop,
  FaUserTie,
  FaCog,
} from "react-icons/fa";
import { FaFileCircleCheck } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="notifications">
        <div className="sidebar-option">
          <FaRegBell />
          Notifications
          <span className="Badge position-relative ms-5">12</span>
        </div>
      </div>
      <div className="options">
        {/* <div
          className={selectedOption === 'dashboard' ? "selected" : "sidebar-option"}
          onClick={() => handleOptionClick('dashboard')}
        >
          <FaDesktop />
          Dashboard
        </div>
        <div
         className={selectedOption === 'orderCheck' ? "selected" : "sidebar-option"}
         onClick={() => handleOptionClick('orderCheck')}
        >
          <FaFingerprint />
          Order Background Check
        </div>
        <div
         className={selectedOption === 'candidates' ? "selected" : "sidebar-option"}
         onClick={() => handleOptionClick('candidates')}
        >
          <FaUserTie />
          Candidates
        </div>
        <div
         className={selectedOption === 'packages' ? "selected" : "sidebar-option"}
         onClick={() => handleOptionClick('packages')}
        >
          <FaFileCircleCheck />
          Packages
        </div>
      </div> */}

        <nav>
          <ul>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "selected" : "sidebar-option"
                }
              >
                <FaDesktop /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/orderBackgroundCheck"
                className={({ isActive }) =>
                  isActive ? "selected" : "sidebar-option"
                }
              >
                <FaFingerprint /> Order Background Check
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/candidates"
                className={({ isActive }) =>
                  isActive ? "selected" : "sidebar-option"
                }
              >
                <FaUserTie /> Candidates
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/packages"
                className={({ isActive }) =>
                  isActive ? "selected" : "sidebar-option"
                }
              >
                <FaFileCircleCheck /> Packages
              </NavLink>
            </li>

           
          </ul>
        </nav>
      </div>
    
      <div className="sidebar-option space sidebar-bottom-option">
        <FaCog />
        Settings
      </div>
    </div>
  );
};

export default Sidebar;
