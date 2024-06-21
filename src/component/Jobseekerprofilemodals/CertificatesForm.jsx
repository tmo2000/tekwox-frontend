import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import Modal from "../Modal";

const CertificatesForm = () => {
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
        Certificates and Awards
        <FontAwesomeIcon className="ml-[18rem]" icon={faEdit} />
      </div>
      <Modal shouldShow={show} onClose={onClose}>
        <div className="ml-3 mt-16 ">
          <h1 className="text-left ml-16 text-4xl ">Cerificates/Awards </h1>
          <div className="mb-4 ml-16 mt-9">
            <div className="mb-2">
              <label
                htmlFor="nationality"
                className="mb-2 block text-left text-sm font-medium text-gray-700"
              >
                Name of Certification/Awards
              </label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                className="mt-1 p-2 mb-8 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="mb-2 block text-left text-sm font-medium text-gray-700"
              >
                Institution
              </label>
              <input
                type="text"
                id="country"
                name="country"
                className="mt-1 p-2 mb-8 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="bio"
                className="mb-2 block text-left text-sm font-medium text-gray-700"
              >
                Details
              </label>
              <input
                type="text"
                id="bio"
                name="bio"
                className="mt-1 mb-8 p-2 border border-gray-300 rounded-md w-full h-20"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="resume"
                className="block text-left text-sm font-medium text-gray-700"
              >
                Attach your Certificate/Awards
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                className="mt-1 p-2 border mr-[25rem] border-gray-300 rounded-md w-[40%] h-16"
                accept=".pdf, .doc, .docx"
              />
              <p className="text-sm text-gray-500 mr-[25rem]">
                Attach a PDF or Word document
              </p>
            </div>
          </div>
          <div className="flex">
            {/* Add More Div */}
            <div className="mr-4">
              <span className="inline-block p-2 ">
                Add More <i className="fas fa-plus ml-2"></i>
              </span>
            </div>

            {/* Trash Icon Div */}
            <div>
              <i className="fas fa-trash text-red-500"></i>
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

export default CertificatesForm;
