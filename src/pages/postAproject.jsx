import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const postAProject = () => {
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
      <h2 className="text-center text-4xl mt-[2rem] font-bold mb-4">
        Post a Project
      </h2>
      <div className="border border-1 rounded-2xl h-auto w-[70%] px-10 mt-[2rem] ml-[11rem] text-left ">
        {/* Form with Email, Password, and Button */}
        <form className="text-left w-[100%]">
          <div className="ml-3  mt-16 ">
            <div className="mb-4 ml-2 mt-9">
              <div className="mb-2">
                <label
                  htmlFor="projectRefnum"
                  className="mb-2 block text-left text-sm font-medium text-gray-700"
                >
                  Project Reference number
                </label>
                <input
                  type="text"
                  id="projectRefnum"
                  name="projectRefnum"
                  className="mt-1 mb-8 p-2 border border-gray-300 rounded-3xl w-full"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="projectTitle"
                  className="mb-2 block text-left text-sm font-medium text-gray-700"
                >
                  Project Title
                </label>
                <input
                  type="text"
                  id="projectTitle"
                  name="projectTitle"
                  className="mt-1 mb-8 p-2 border border-gray-300 rounded-3xl w-full"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="projectDetails"
                  className="mb-2 block text-left text-sm font-medium text-gray-700"
                >
                  Project Details
                </label>
                <input
                  type="text"
                  id="projectDetails"
                  name="projectDetails"
                  className="mt-1 mb-8 p-10 border border-gray-300 rounded-3xl w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="projectAttachment"
                  className="block text-left text-sm font-medium text-gray-700"
                >
                  Project Attachment
                </label>
                <input
                  type="file"
                  id="projectAttachment"
                  name="projectAttachment"
                  className="mt-1 p-2 border mr-[25rem] border-gray-300 rounded-2xl w-[40%] h-16"
                  accept=".pdf, .doc, .docx"
                />
                <p className="text-sm text-gray-500 mr-[25rem]">
                  Attach a PDF or Word document
                </p>
              </div>

              <div className="mb-2">
                <label
                  htmlFor="location"
                  className="mb-2 block  text-left text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <select
                  type="text"
                  id="location"
                  name="location"
                  className="mt-1 p-2 mb-8 border border-gray-300 text-gray-500 rounded-3xl w-full"
                >
                  <option value="" className="text-gray-500" disabled selected>
                    Country
                  </option>
                </select>
              </div>
              <div className="flex justify-between gap-[3rem]">
                <div className="mb-4">
                  <label
                    htmlFor="isCurrentWorkspace"
                    className="flex items-center"
                  >
                    <input
                      type="checkbox"
                      id="isCurrentWorkspace"
                      name="isCurrentWorkspace"
                      className="mr-2"
                    />
                    Open to local businesses
                  </label>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="isCurrentWorkspace"
                    className="flex items-center"
                  >
                    <input
                      type="checkbox"
                      id="isCurrentWorkspace"
                      name="isCurrentWorkspace"
                      className="mr-2"
                    />
                    Open Internationally
                  </label>
                </div>
              </div>
              <div>
                <label
                  htmlFor="website"
                  className="mb-2 block  text-left text-sm font-medium text-gray-700"
                >
                  Preferred Bidding Currency
                </label>
                <select
                  type="text"
                  id="website"
                  name="website"
                  className="mt-1 p-2 mb-8 border border-gray-300 text-gray-500 rounded-3xl w-full"
                >
                  <option value="" className="text-[#333]" disabled selected>
                    Currency
                  </option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="isCurrentWorkspace"
                  className="flex items-center"
                >
                  <input
                    type="checkbox"
                    id="isCurrentWorkspace"
                    name="isCurrentWorkspace"
                    className="mr-2"
                  />
                  Make this bidding currency mandatory
                </label>
              </div>

              <div>
                <div className="flex gap-7">
                  <label
                    htmlFor="industry"
                    className="mb-2 block  text-left text-sm font-medium text-gray-700"
                  >
                    Include limit on bid amount
                  </label>
                  <div className="flex gap-7">
                    <div className="mb-4">
                      <label
                        htmlFor="isCurrentWorkspace"
                        className="flex items-center"
                      >
                        <input
                          type="checkbox"
                          id="isCurrentWorkspace"
                          name="isCurrentWorkspace"
                          className="mr-2"
                        />
                        Yes
                      </label>
                    </div>{" "}
                    <div className="mb-4">
                      <label
                        htmlFor="isCurrentWorkspace"
                        className="flex items-center"
                      >
                        <input
                          type="checkbox"
                          id="isCurrentWorkspace"
                          name="isCurrentWorkspace"
                          className="mr-2"
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <input
                  type="text"
                  id="industry"
                  name="industry"
                  className="mt-1 p-2 mb-8 border border-gray-300 rounded-3xl w-full"
                />
              </div>
              <div className="mb-4 flex w-[100%] gap-12">
                <div className="mr-4">
                  <label
                    htmlFor="startDate"
                    className="block text-left text-sm font-medium text-gray-700"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-[20rem]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="endDate"
                    className="block text-left text-sm font-medium text-gray-700"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-[20rem]"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="isCurrentWorkspace"
                  className="flex items-center"
                >
                  <input
                    type="checkbox"
                    id="isCurrentWorkspace"
                    name="isCurrentWorkspace"
                    className="mr-2"
                  />
                  Include Time
                </label>
              </div>
            </div>
          </div>
          <Link to="/businessDashboard">
            <button className="px-16 py-2 mt-6 bg-[#5d6aa8] mb-6 text-white font-bold rounded-full hover:bg-white hover:text-[#5d6aa8] hover:border-[#5d6aa8] hover:border">
              Post a Project
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default postAProject;
