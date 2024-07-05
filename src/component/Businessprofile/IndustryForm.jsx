import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";

const IndustryForm = () => {
  const [show, setShow] = useState(false);

  const onClose = () => {
    setShow(false);
  };

  return (
    <>
      <div
        className="text-slate-500 text-2xl font-semibold font-['Inter'] flex justify-between"
        
      >
        Industry
        <FontAwesomeIcon className="ml-8 lg:ml-4 cursor-pointer" icon={faEdit} onClick={() => setShow(true)}/>
      </div>
      <Modal shouldShow={show} onClose={onClose}>
        <div className="p-4 lg:mr-14 lg:mt-16">
          <h1 className="text-left lg:ml-16 text-2xl lg:text-4xl">Industry</h1>
          <div className="mb-4 lg:ml-16 mt-9">
            <div className="mb-2">
              <label
                htmlFor="industry"
                className="block text-left text-sm font-medium text-gray-700"
              >
                Industry
              </label>
              <input
                type="text"
                id="industry"
                name="industry"
                className="mt-1 mb-8 p-2 border border-gray-300 rounded-md w-full h-30"
              />
            </div>
          </div>
          <button
            className="ml-auto lg:ml-[30rem] bg-[#5D6AA8] py-2 px-4 rounded-md mt-8 hover:bg-blue-600 text-white"
            onClick={onClose}
          >
            Save
          </button>
        </div>
      </Modal>
    </>
  );
};

export default IndustryForm;
