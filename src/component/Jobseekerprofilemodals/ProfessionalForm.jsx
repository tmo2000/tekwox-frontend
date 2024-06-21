import { useState } from "react";
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
      <div
        className="text-slate-500 text-2xl font-semibold font-['Inter']"
        onClick={() => setShow(true)}
      >
        Professional Overview
        <FontAwesomeIcon className="ml-[20rem]" icon={faEdit} />
      </div>
      <Modal shouldShow={show} onClose={onClose}>
        <div className="mr-10 mt-16 ">
          <h1 className="text-left ml-16 text-4xl ">Professional Overview </h1>
          <div className="mb-4 ml-16 mt-9">
            <div className="mb-2">
              <label
                htmlFor="nationality"
                className="mb-2 block text-left text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                className="mt-1 p-2 mb-8 border border-gray-300 rounded-md w-full"
                placeholder="What do you do?"
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="mb-2 block text-left text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <input
                type="text"
                id="country"
                name="country"
                className="mt-1 p-2 mb-8 border border-gray-300 rounded-md w-full h-14"
              />
            </div>
          </div>
          <button className="ml-[30rem] text-[#5D6AA8]" onClick={onClose}>
            Save
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ProfessionalForm;
