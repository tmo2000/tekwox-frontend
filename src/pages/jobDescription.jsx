import React from "react";
import { Link } from "react-router-dom";

const jobDescription = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 md:px-0">
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

  {/* Form Section */}
  <div className="border border-1 rounded-2xl mt-8 md:mt-16 px-4 md:px-10 md:ml-[11rem] md:w-[70%]">
    <form className="text-left">
      {/* Job Description */}
      <div className="mb-6">
        <label
          htmlFor="jobDescription"
          className="block text-sm font-medium text-gray-700 mt-6" // Added margin top for label
        >
          Job Description
        </label>
        <input
          type="text"
          id="country"
          name="country"
          className="mt-1 p-2 border border-gray-300 rounded-3xl w-full h-[6rem]"
          style={{ marginTop: '0.5rem' }} // Added inline style for input
        />
      </div>

      {/* Required Skills */}
      <div className="mb-4">
        <label
          htmlFor="website"
          className="block text-sm font-medium text-gray-700"
        >
          Required Skills
        </label>
        <select
          id="website"
          name="website"
          className="mt-1 p-2 border border-gray-300 text-gray-500 rounded-3xl w-full"
        >
          {/* Add options for required skills */}
        </select>
      </div>

      {/* Additional Skills */}
      <div className="mb-4">
        <label
          htmlFor="additionalSkills"
          className="block text-sm font-medium text-gray-700"
        >
          Additional Skills
        </label>
        <select
          id="additionalSkills"
          name="additionalSkills"
          className="mt-1 p-2 border border-gray-300 text-gray-500 rounded-3xl w-full"
        >
          {/* Add options for additional skills */}
        </select>
      </div>

      {/* Next Button */}
      <Link to="/screeningquestions" className="flex items-center justify-center">
        <button className="px-16 py-2 mt-[3rem] ml-[2rem] bg-[#5d6aa8] mb-6 text-white font-bold rounded-full hover:bg-white hover:text-[#5d6aa8] hover:border-[#5d6aa8] hover:border">
          Next
        </button>
      </Link>
    </form>
  </div>
</div>

  );
};

export default jobDescription;
