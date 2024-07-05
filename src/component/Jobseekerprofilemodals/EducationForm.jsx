import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import Modal from "../Modal";

const EducationForm = () => {
  const [show, setShow] = useState(false);

  const onClose = () => {
    setShow(false);
  };

  return (
    <>
      <div className="text-slate-500 text-2xl font-semibold font-['Inter'] cursor-pointer" onClick={() => setShow(true)}>
        Education
        <FontAwesomeIcon className="ml-4" icon={faEdit} />
      </div>
      <Modal shouldShow={show} onClose={onClose}>
        <div className="p-8">
          <h1 className="text-4xl mb-8">Education</h1>
          <div className="mb-4">
            <label htmlFor="school" className="block text-sm font-medium text-gray-700">
              School
            </label>
            <input
              type="text"
              id="school"
              name="school"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="What school did you attend?"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="degree" className="block text-sm font-medium text-gray-700">
              Degree
            </label>
            <input
              type="text"
              id="degree"
              name="degree"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-gray-700">
              Field of Study
            </label>
            <input
              type="text"
              id="fieldOfStudy"
              name="fieldOfStudy"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="flex flex-wrap mb-4">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0 pr-0 sm:pr-4">
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="w-full sm:w-1/2 pl-0 sm:pl-4">
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                Graduation Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>

          <div className="flex items-center">
            <button className="text-blue-500 mr-4">
              <i className="fas fa-plus mr-2"></i> Add More
            </button>
            <button className="text-red-500">
              <i className="fas fa-trash mr-2"></i> Delete
            </button>
          </div>

          <button
            className="bg-[#5D6AA8] text-white py-2 px-4 rounded-md mt-8 hover:bg-blue-600"
            onClick={onClose}
          >
            Save
          </button>
        </div>
      </Modal>
    </>
  );
};

export default EducationForm;
