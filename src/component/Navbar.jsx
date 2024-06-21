import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-white fixed top-0 left-0 w-full border-b">
      <div className="py-4 px-6 w-full flex items-center justify-between">
        <div className='flex items-center gap-8 className="ml-4"'>
          <img src="logo.png" className="w-24 h-auto" />
          <ul className="flex items-center gap-4">
            <li>
              <a href="#" className="ml-4">
                Job Seekers
              </a>
              <FontAwesomeIcon className="ml-2 " icon={faAngleDown} />
              <a href="#" className="ml-4">
                Business
              </a>
              <FontAwesomeIcon className="ml-2 " icon={faAngleDown} />
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/jobseekerlogin"
            className="p-4 py-2 px-4 flex items-center font-medium hover:bg-gray-200 rounded-3xl"
          >
            Login
          </Link>
          <Link
            to="/signUp"
            className="p-4 py-2 px-4 rounded-3xl flex items-center font-medium bg-purple bg-indigo-800 hover:bg-gray-200 text-white"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
