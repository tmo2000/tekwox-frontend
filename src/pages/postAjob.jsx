import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const postAJob = () => {
  return (
 <div className="max-w-[1000px] mx-auto mt-12 px-4 md:px-0">
  {/* Logo and Profile Images */}
  <div className="flex justify-between items-center">
    {/* Left-aligned image */}
    <div>
      <img
        src="logo.png" // Replace with the actual path to your logo image
        alt="Logo"
        className="w-32 h-auto ml-12 mt-6"
      />
    </div>

    {/* Right-aligned image */}
    <div>
      <img
        src="profile.png" // Replace with the actual path to your second image
        alt="Another Image"
        className="w-12 h-auto mr-12 mt-6"
      />
    </div>
  </div>

  {/* Back Button */}
  <div className="flex relative">
    <Link to="/businessDashboard" className="absolute top-1 left-1">
      <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
    </Link>
  </div>

  {/* Heading */}
  <h2 className="text-center text-4xl font-bold mb-4">Post a Job</h2>

  {/* Form Section */}
  <div className="border border-1 rounded-2xl mt-8 md:mt-16 px-10 md:ml-[11rem] md:w-[70%]">
    <form className="text-left">
      {/* Job Title */}
      <div className="mb-4 mt-4">
        <label
          htmlFor="jobtitle"
          className="block text-sm font-medium text-gray-700"
        >
          Job Title
        </label>
        <input
          type="text"
          id="jobtitle"
          name="jobtitle"
          className="mt-1 p-2 border border-gray-300 rounded-3xl w-full"
        />
      </div>

      {/* Workplace Type */}
      <div className="mb-4">
        <label
          htmlFor="businessInfo"
          className="block text-sm font-medium text-gray-700"
        >
          Workplace Type
        </label>
        <select
          id="businessInfo"
          name="businessInfo"
          className="mt-1 p-2 border border-gray-300 text-gray-500 rounded-3xl w-full"
        >
          <option value="" disabled selected>
            E.g Remote, Hybrid, On-Site
          </option>
        </select>
      </div>

      {/* Work Type */}
      <div className="mb-4">
        <label
          htmlFor="workType"
          className="block text-sm font-medium text-gray-700"
        >
          Work Type
        </label>
        <select
          id="workType"
          name="workType"
          className="mt-1 p-2 border border-gray-300 text-gray-500 rounded-3xl w-full"
        >
          <option value="" disabled selected>
            E.g Full-time Contract, Part time
          </option>
        </select>
      </div>

      {/* Employment location */}
      <div className="mb-4">
        <label
          htmlFor="employmentLocation"
          className="block text-sm font-medium text-gray-700"
        >
          Employment Location
        </label>
        <select
          id="employmentLocation"
          name="employmentLocation"
          className="mt-1 p-2 border border-gray-300 rounded-3xl w-full"
        >
          {/* Add options for employment location */}
        </select>
      </div>

      {/* Next Button */}
      <Link to="/jobdescription" className="flex items-center justify-center">
        <button className="px-16 py-2 mt-6 bg-[#5d6aa8e0] mb-6 text-white font-bold rounded-full hover:bg-[#5d6aa8] hover:border-[#5d6aa8] hover:border">
          Next
        </button>
      </Link>
    </form>
  </div>
</div>

  );
};

export default postAJob;
