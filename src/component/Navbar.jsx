import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className="bg-white z-20 fixed top-0 left-0 w-full border-b">
      <div className="md:py-4 md:px-6  w-full flex items-center justify-between">
        <div className="flex items-center gap-8 ml-4">
          <img src="logo.png" className="w-24 h-auto" alt="Logo" />
          <ul className="hidden md:flex items-center gap-4">
            <li>
              <a href="#" className="ml-4">
                Job Seekers
              </a>
              <FontAwesomeIcon className="ml-2" icon={faAngleDown} />
            </li>
            <li>
              <a href="#" className="ml-4">
                Business
              </a>
              <FontAwesomeIcon className="ml-2" icon={faAngleDown} />
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          {/* Hamburger Icon for Small Screens */}
          <button
            className="md:hidden p-4 focus:outline-none"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} className="text-gray-600" />
          </button>

          {/* Sign Up and Login Buttons for Large Screens */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/jobseekerlogin"
              className="p-2 px-4 py-2 flex items-center font-medium hover:bg-gray-200 rounded-3xl"
            >
              Login
            </Link>
            <Link
              to="/signUp"
              className="p-2 px-4 py-2 rounded-3xl flex items-center font-medium bg-indigo-800 hover:bg-gray-200 text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      
      {/* Sidebar Modal */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-30 ${
          isSidebarOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="absolute right-0 top-0 h-full bg-white w-64 shadow-lg">
          <button
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 md:hidden"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faTimes} className="text-gray-600" />
          </button>
          <ul className="p-4">
            <li className="py-2">
              <a href="#" className="text-lg font-medium text-gray-800" onClick={closeSidebar}>
                Job Seekers
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-lg font-medium text-gray-800" onClick={closeSidebar}>
                Business
              </a>
            </li>
            <li className="py-2">
              <Link
                to="/jobseekerlogin"
                className="block px-4 py-2 font-medium hover:bg-gray-200 rounded"
                onClick={closeSidebar}
              >
                Login
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/signUp"
                className="block px-4 py-2 font-medium bg-indigo-800 text-white hover:bg-gray-200 rounded"
                onClick={closeSidebar}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
