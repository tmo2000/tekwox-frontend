import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const postAProject = () => {
  return (
   <div>
  <div className="flex justify-between items-center">
    {/* Left-aligned image */}
    <div>
      <img
        src="logo.png"
        alt="Logo"
        className="w-32 h-auto ml-12 mt-6"
      />
    </div>

    {/* Right-aligned image */}
    <div>
      <img
        src="profile.png"
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

  <h2 className="text-center text-4xl mt-[2rem] font-bold mb-4">
    Post a Project
  </h2>

  <div className="border border-1 rounded-2xl mt-8 md:mt-16 px-4 md:px-10 md:ml-[11rem] md:w-[70%]">
    <form className="text-left">
      <div className="ml-3 mt-16">
        <div className="mb-6">
          <label
            htmlFor="projectRefnum"
            className="block text-sm font-medium text-gray-700"
          >
            Project Reference number
          </label>
          <input
            type="text"
            id="projectRefnum"
            name="projectRefnum"
            className="mt-1 p-2 border border-gray-300 rounded-3xl w-full"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="projectTitle"
            className="block text-sm font-medium text-gray-700"
          >
            Project Title
          </label>
          <input
            type="text"
            id="projectTitle"
            name="projectTitle"
            className="mt-1 p-2 border border-gray-300 rounded-3xl w-full"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="projectDetails"
            className="block text-sm font-medium text-gray-700"
          >
            Project Details
          </label>
          <input
            type="text"
            id="projectDetails"
            name="projectDetails"
            className="mt-1 p-2 border border-gray-300 rounded-3xl w-full"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="projectAttachment"
            className="block text-sm font-medium text-gray-700"
          >
            Project Attachment
          </label>
          <input
            type="file"
            id="projectAttachment"
            name="projectAttachment"
            className="mt-1 p-2 border border-gray-300 rounded-2xl w-full"
            accept=".pdf, .doc, .docx"
          />
          <p className="text-sm text-gray-500">
            Attach a PDF or Word document
          </p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <select
            id="location"
            name="location"
            className="mt-1 p-2 border border-gray-300 text-gray-500 rounded-3xl w-full"
          >
            <option value="" disabled selected>
              Country
            </option>
          </select>
        </div>
        <div className="flex flex-wrap gap-6 mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="openToLocal"
              name="openToLocal"
              className="mr-2"
            />
            <label htmlFor="openToLocal">Open to local businesses</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="openToInternational"
              name="openToInternational"
              className="mr-2"
            />
            <label htmlFor="openToInternational">Open internationally</label>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="preferredCurrency"
            className="block text-sm font-medium text-gray-700"
          >
            Preferred Bidding Currency
          </label>
          <select
            id="preferredCurrency"
            name="preferredCurrency"
            className="mt-1 p-2 border border-gray-300 text-gray-500 rounded-3xl w-full"
          >
            <option value="" disabled selected>
              Currency
            </option>
          </select>
        </div>
        <div className="mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="makeCurrencyMandatory"
              name="makeCurrencyMandatory"
              className="mr-2"
            />
            <label htmlFor="makeCurrencyMandatory">
              Make this bidding currency mandatory
            </label>
          </div>
        </div>
        <div className="mb-6 flex justify-between gap-6">
          <label
            htmlFor="includeBidLimit"
            className="block text-sm font-medium text-gray-700"
          >
            Include limit on bid amount
          </label>
          <div className="flex gap-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="includeBidLimitYes"
                name="includeBidLimitYes"
                className="mr-2"
              />
              <label htmlFor="includeBidLimitYes">Yes</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="includeBidLimitNo"
                name="includeBidLimitNo"
                className="mr-2"
              />
              <label htmlFor="includeBidLimitNo">No</label>
            </div>
          </div>
        </div>
        <div className="mb-6 flex flex-wrap gap-6">
          <div>
            <label
              htmlFor="startDate"
              className="block text-sm font-medium text-gray-700"
            >
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label
              htmlFor="endDate"
              className="block text-sm font-medium text-gray-700"
            >
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="includeTime"
              name="includeTime"
              className="mr-2"
            />
            <label htmlFor="includeTime">Include Time</label>
          </div>
        </div>
      </div>
      <Link to="/businessDashboard">
        <button className="px-16 py-2 bg-[#5d6aa8] text-white font-bold rounded-full hover:bg-white hover:text-[#5d6aa8] hover:border-[#5d6aa8] hover:border mb-5">
          Post a Project
        </button>
      </Link>
    </form>
  </div>
</div>

  );
};

export default postAProject;
