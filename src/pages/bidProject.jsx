import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProjectBid from "../component/details/ProjectBid";

const bidProject = () => {
  return (
  <div>
  <div className="flex flex-wrap justify-between items-center px-4">
    {/* Left-aligned image */}
    <div className="mt-6">
      <img
        src="logo.png" // Replace with the actual path to your logo image
        alt="Logo"
        className="w-32 h-auto"
      />
    </div>

    {/* Right-aligned image */}
    <div className="mt-6">
      <img
        src="profile.png" // Replace with the actual path to your second image
        alt="Another Image"
        className="w-12 h-auto"
      />
    </div>
  </div>

  <div className="relative flex justify-center mt-4">
    <Link to="/listedprojectdetails" className="absolute left-4 top-1">
      <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
    </Link>
  </div>

  <h2 className="text-center text-4xl font-bold mb-4">
    Bid For Project A01
  </h2>

  <div className="border border-1 rounded-2xl h-auto w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] px-6 py-4 mt-6 mx-auto text-left">
    {/* Form with Email, Password, and Button */}
    <form className="text-left w-full">
      <div className="mt-4">
        <div className="mb-4 mt-6">
          <div className="mb-4">
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700"
            >
              Attach Bid Documents
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full h-16"
              accept=".pdf, .doc, .docx"
            />
            <p className="text-sm text-gray-500">
              Attach Documents
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-[45%]">
              <label
                htmlFor="currency"
                className="block text-sm font-medium text-gray-700"
              >
                Currency
              </label>
              <select
                id="currency"
                name="currency"
                className="mt-1 p-2 border border-gray-300 rounded-3xl w-full"
              >
                <option value="" disabled selected></option>
              </select>
            </div>
            <div className="w-full md:w-[45%]">
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Amount
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                className="mt-1 p-2 border border-gray-300 rounded-3xl w-full"
              />
            </div>
          </div>
          <p className="text-gray-500 mt-2">
            *this bid has a limit of $5,000.00
          </p>
        </div>
      </div>
      <div className="mb-4 mt-6">
        <label
          htmlFor="supporting-documents"
          className="block text-sm font-medium text-gray-700"
        >
          Please attach any supporting documents here
        </label>
        <input
          type="file"
          id="supporting-documents"
          name="supporting-documents"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full h-16"
          accept=".pdf, .doc, .docx"
        />
        <p className="text-sm text-gray-500 mt-1">
          Attach supporting documents
        </p>
      </div>
      <div className="flex items-center mb-6">
        <FontAwesomeIcon icon={faPlus} className="ml-2" />
        <p className="ml-2">Add More Supporting Documents here.</p>
      </div>

      <div className="flex items-center justify-center">
        <Link to="/thank">
          <button className="px-16 py-2 mt-6 bg-[#5d6aa8e0] text-white font-bold rounded-full hover:bg-[#5d6aa8] hover:border-[#5d6aa8] hover:border text-[#5D6AA8]">
            Submit Bid
          </button>
        </Link>
      </div>
    </form>
  </div>
</div>

  );
};

export default bidProject;
