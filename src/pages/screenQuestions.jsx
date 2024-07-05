import React from "react";
import { Link } from "react-router-dom";

const screenQuestions = () => {
  return (
     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        {/* Left-aligned image */}
        <div>
          <img
            src="logo.png" // Replace with your actual logo path
            alt="Logo"
            className="w-24 h-auto mt-6"
          />
        </div>

        {/* Right-aligned image */}
        <div>
          <img
            src="profile.png" // Replace with your actual profile image path
            alt="Another Image"
            className="w-12 h-auto mt-6"
          />
        </div>
      </div>

      <div className="border border-1 rounded-2xl mt-6 p-6">
        <h1 className="text-3xl font-bold">Screening Questions</h1>
        <p className="mt-4 text-lg">Answer these screening questions</p>

        {/* Question 1 */}
        <div className="border border-1 rounded-xl mt-6 p-4">
          <span className="font-semibold">Have you completed the following level of Education: Bachelor's?</span>
          <div className="border border-1 border-black mt-2"></div>
          <label className="block mt-2" htmlFor="qualification">
            Answer  
            <select
              type="text"
              id="qualification"
              name="qualification"
              className="mt-2 p-2 border border-gray-300 rounded-md text-gray-500 w-full"
              placeholder=""
            >
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
        </div>

        {/* Question 2 */}
        <div className="border border-1 rounded-xl mt-6 p-4">
          <span className="font-semibold">Are you willing to undergo a background check, in accordance with local law/regulations?</span>
          <div className="border border-1 border-black mt-2"></div>
          <label className="block mt-2" htmlFor="backgroundCheck">
            Answer  
            <select
              type="text"
              id="backgroundCheck"
              name="backgroundCheck"
              className="mt-2 p-2 border border-gray-300 rounded-md text-gray-500 w-full"
              placeholder=""
            >
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
        </div>

        {/* Question 3 */}
        <div className="border border-1 rounded-xl mt-6 p-4">
          <span className="font-semibold">Will you now or in the future require sponsorship for employment visa status?</span>
          <div className="border border-1 border-black mt-2"></div>
          <label className="block mt-2" htmlFor="sponsorship">
            Answer  
            <select
              type="text"
              id="sponsorship"
              name="sponsorship"
              className="mt-2 p-2 border border-gray-300 rounded-md text-gray-500 w-full"
              placeholder=""
            >
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-6">
          <Link to="/jobseekerdashboard">
            <button
              type="button"
              className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mr-4"
            >
              Submit Application
            </button>
          </Link>
          <Link to="/jobseekerdashboard">
            <button
              type="button"
              className="bg-[#F2AB39] hover:bg-blue-700 text-black font-bold py-2 px-6 rounded-full"
            >
              Save for later
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default screenQuestions;
