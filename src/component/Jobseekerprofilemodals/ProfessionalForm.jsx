import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import Modal from "../Modal";

const ProfessionalForm = () => {
  const [show, setShow] = useState(false);

  const onClose = () => {
    setShow(false);
  };

  return (
    <>
      <div className="text-slate-500 text-2xl font-semibold font-['Inter'] cursor-pointer" onClick={() => setShow(true)}>
        Professional Overview
        <FontAwesomeIcon className="ml-4" icon={faEdit} />
      </div>
      <Modal shouldShow={show} onClose={onClose}>
        <div className="p-8">
          <h1 className="text-4xl mb-8">Professional Overview</h1>
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="What do you do?"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full h-32 resize-none"
              placeholder="Briefly describe your professional overview..."
            ></textarea>
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

export default ProfessionalForm;
