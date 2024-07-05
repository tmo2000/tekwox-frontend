import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import Modal from "../Modal";

const PersonalForm = () => {
  const [show, setShow] = useState(false);

  const onClose = () => {
    setShow(false);
  };

  return (
    <>
      <div
        className="text-slate-500 text-2xl font-semibold font-['Inter'] "
       
      >
        Personal
        <FontAwesomeIcon className="ml-4 cursor-pointer" icon={faEdit} onClick={() => setShow(true)}/>
      </div>
      <Modal shouldShow={show} onClose={onClose}>
        <div className="p-8">
          <h1 className="text-4xl mb-8">Personal Information</h1>
          <div className="mb-4">
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700"
            >
              Bio
            </label>
            <input
              type="text"
              id="bio"
              name="bio"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="nationality"
              className="block text-sm font-medium text-gray-700"
            >
              Nationality
            </label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country of Residence
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700"
            >
              Attach Your Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              accept=".pdf, .doc, .docx"
            />
            <p className="text-sm text-gray-500">
              Attach a PDF or Word document
            </p>
          </div>

          <button
            className="bg-[#5D6AA8] text-white py-2 px-4 rounded-md hover:bg-blue-600"
            onClick={onClose}
          >
            Save
          </button>
        </div>
      </Modal>
    </>
  );
};

export default PersonalForm;
