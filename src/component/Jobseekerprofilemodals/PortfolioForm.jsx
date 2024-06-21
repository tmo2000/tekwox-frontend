import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import Modal from "../Modal";

const PortfolioForm = () => {
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
        Portfolio
        <FontAwesomeIcon className="ml-[18rem]" icon={faEdit} />
      </div>
      <Modal shouldShow={show} onClose={onClose}>
        <div className=" mt-16 ">
          <h1 className="text-left ml-16 text-4xl ">Portfolio </h1>
          <div className="mb-4 ml-16 mt-9">
            <div className="mb-4">
              <label
                htmlFor="resume"
                className="block text-left text-sm font-medium text-gray-700"
              >
                Attach Your Portfolio here
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                className="mt-1 p-2 border mr-[39rem] border-gray-300 rounded-md w-[40%] h-16"
                accept=".pdf, .doc, .docx"
              />
              <p className="text-sm text-gray-500 mr-[25rem]">
                Attach a PDF or Word document
              </p>
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

export default PortfolioForm;
