import React from "react";
import { Link } from "react-router-dom";

const jobDescription = () => {
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

      <div className="border border-1 rounded-2xl h-auto w-[70%] px-10 mt-[2rem] ml-[11rem] text-left ">
        {/* Form with Email, Password, and Button */}
        <form className="text-left w-[100%]">
          <div className="ml-3  mt-16 ">
            <div className="mb-4 ml-2 mt-9">
              <div>
                <label
                  htmlFor="country"
                  className="mb-2 block text-left text-sm font-medium text-gray-700"
                >
                  Job Description
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="mt-1 p-2 mb-8 border border-gray-300 rounded-3xl w-full h-[6rem]"
                />
              </div>
              <div>
                <label
                  htmlFor="website"
                  className="mb-2 block  text-left text-sm font-medium text-gray-700"
                >
                  Required Skills
                </label>
                <select
                  type="text"
                  id="website"
                  name="website"
                  className="mt-1 p-2 mb-4 border border-gray-300 text-gray-500 rounded-3xl w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="website"
                  className="mb-2 block  text-left text-sm font-medium text-gray-700"
                >
                  Additional Skills
                </label>
                <select
                  type="text"
                  id="website"
                  name="website"
                  className="mt-1 p-2 mb-4 border border-gray-300 text-gray-500 rounded-3xl w-full"
                />
              </div>
            </div>
          </div>
          <Link to="/screeningquestions">
            <button className="px-16 py-2 mt-[30rem] bg-[#5d6aa8] mb-6 text-white font-bold rounded-full hover:bg-white hover:text-[#5d6aa8] hover:border-[#5d6aa8] hover:border">
              Next
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default jobDescription;
