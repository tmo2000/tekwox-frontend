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
        <Link to="/listedprojectdetails" className="absolute top-1 left-1">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        </Link>
      </div>
      <h2 className="text-center text-4xl font-bold mb-4">
        Bid For Project A01
      </h2>

      <div className="border border-1 rounded-2xl h-auto w-[70%] px-10 mt-[2rem] ml-[11rem] text-left  ">
        {/* Form with Email, Password, and Button */}
        <form className="text-left w-[100%]">
          <div className="ml-3  mt-16 ">
            <div className="mb-4 ml-2 mt-9">
              <div className="mb-4">
                <label
                  htmlFor="resume"
                  className="block text-left text-sm font-medium text-gray-700"
                >
                  Attach Bid Documents
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  className="mt-1 p-2 border mr-[25rem] border-gray-300 rounded-md w-[40%] h-16"
                  accept=".pdf, .doc, .docx"
                />
                <p className="text-sm text-gray-500 mr-[25rem]">
                  Attach Documents
                </p>
              </div>

              <div className="flex w-[100%] gap-[15rem]">
                <div>
                  <label
                    htmlFor="website"
                    className="mb-2 block  text-left text-sm font-medium text-gray-700"
                  >
                    Currency
                  </label>
                  <select
                    type="text"
                    id="website"
                    name="website"
                    className="mt-1 p-2 mb-4 border border-gray-300 rounded-3xl w-[500%] "
                  >
                    <option value="" className="" disabled selected></option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="website"
                    className="mb-2 block  text-left text-sm font-medium text-gray-700"
                  >
                    Amount
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    className="mt-1 p-2 mb-4 border border-gray-300 rounded-3xl w-[28em]"
                  />
                </div>
              </div>
              <p className="text-gray-500">
                *this bid has a limit of $5,000.00{" "}
              </p>
            </div>
          </div>
          <div className="mb-4 ml-8">
            <label
              htmlFor="resume"
              className="block text-left text-sm font-medium text-gray-700"
            >
              Please attach any supporting documents here
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              className="mt-1 p-2 border mr-[25rem] border-gray-300 rounded-md w-[40%] h-16"
              accept=".pdf, .doc, .docx"
            />
            <p className="text-sm text-gray-500 mr-[25rem]">
              Attach supporting documents
            </p>
          </div>
          <div className="flex items-center ml-6 mb-10">
            <FontAwesomeIcon icon={faPlus} className="ml-2" />
            <p className="ml-2">Add More Supporting Documenrs here.</p>
          </div>

          <div className=" flex items-center justify-center">
            <Link to="/thank">
              <button className="px-16 py-2 mt-6 bg-[#5d6aa8e0] mb-6 text-white font-bold rounded-full hover:bg-[#5d6aa8]  hover:border-[#5d6aa8] hover:border text-[#5D6AA8]">
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
