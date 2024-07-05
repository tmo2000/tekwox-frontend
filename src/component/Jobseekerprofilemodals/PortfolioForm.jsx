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
        className="text-slate-500 text-2xl font-semibold font-['Inter'] cursor-pointer"
        onClick={() => setShow(true)}
      >
        Portfolio
        <FontAwesomeIcon className="ml-4" icon={faEdit} />
      </div>
      <Modal shouldShow={show} onClose={onClose}>
        <div className="p-4 sm:p-6 md:p-10 lg:p-16 xl:p-20">
          <h1 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Portfolio</h1>
          <div className="mt-6">
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
                className="mt-1 p-2 border border-gray-300 rounded-md w-full sm:w-[75%] md:w-[60%] lg:w-[50%] h-16"
                accept=".pdf, .doc, .docx"
              />
              <p className="text-sm text-gray-500">
                Attach a PDF or Word document
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-[#5D6AA8] py-2 px-4 rounded-md mt-8 hover:bg-blue-600 text-white" onClick={onClose}>
              Save
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PortfolioForm;
