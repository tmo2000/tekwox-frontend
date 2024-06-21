import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const postAJob = () => {
  return (
    <div>
      <div className="flex">
        {/* Left-aligned image */}
        <div>
          <img
            src="logo.png" // Replace with the actual path to your logo image
            alt="Logo"
            className="w-32 h-auto ml-12 mt-6"
          />
        </div>

        {/* Right-aligned image */}
        <div className="ml-auto">
          <img
            src="profile.png" // Replace with the actual path to your second image
            alt="Another Image"
            className="w-12 h-auto mr-12 mt-6"
          />
        </div>
      </div>
      <div className="flex relative">
        <Link to="/businessDashboard" className="absolute top-1 left-1">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        </Link>
      </div>
      <h2 className="text-center text-4xl font-bold mb-4">Post a Job</h2>

      <div className="border border-1 rounded-2xl h-auto w-[70%] px-10 mt-[2rem] ml-[11rem] text-left  ">
        {/* Form with Email, Password, and Button */}
        <form className="text-left w-[100%]">
          <div className="ml-3  mt-16 ">
            <div className="mb-4 ml-2 mt-9">
              <div className="mb-2">
                <label
                  htmlFor="jobtitle"
                  className="mb-2 block text-left text-sm font-medium text-gray-700"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobtitle"
                  name="jobtitle"
                  className="mt-1 mb-4 p-2 border border-gray-300 rounded-3xl w-full"
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="businessInfo"
                  className="mb-2 block  text-left text-sm font-medium text-gray-700"
                >
                  Workplace Type
                </label>
                <select
                  type="text"
                  id="businessInfo"
                  name="businessInfo"
                  className="mt-1 p-2 mb-4 border border-gray-300 text-gray-500 rounded-3xl w-full"
                >
                  <option value="" className="" disabled selected>
                    E.g Remote, Hybrid, On-Site
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="mb-2 block  text-left text-sm font-medium text-gray-700"
                >
                  Work Type
                </label>
                <select
                  type="text"
                  id="website"
                  name="website"
                  className="mt-1 p-2 mb-4 border border-gray-300 text-gray-500 rounded-3xl w-full"
                >
                  <option value="" className="" disabled selected>
                    E.g Full-time Contract, Part time
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="website"
                  className="mb-2 block  text-left text-sm font-medium text-gray-700"
                >
                  Employment location
                </label>
                <select
                  type="text"
                  id="website"
                  name="website"
                  className="mt-1 p-2 mb-4 border border-gray-300 rounded-3xl w-full"
                />
              </div>
            </div>
          </div>
          <Link
            to="/jobdescription"
            className=" flex items-center justify-center"
          >
            <button className="px-16 py-2 mt-6 bg-[#5d6aa8e0] mb-6 text-white font-bold rounded-full hover:bg-[#5d6aa8]  hover:border-[#5d6aa8] hover:border">
              Next
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default postAJob;
