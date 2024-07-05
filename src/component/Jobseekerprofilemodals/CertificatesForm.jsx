import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

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
       
      >
        Certificates and Awards
        <FontAwesomeIcon className="ml-4 cursor-pointer" icon={faEdit}  onClick={() => setShow(true)}/>
      </div>
      <Modal shouldShow={show} onClose={onClose}>
        <div className="p-4 sm:p-6 md:p-10 lg:p-16 xl:p-20">
          <h1 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Certificates/Awards</h1>
          <div className="mt-6">
            <div className="mb-4">
              <label
                htmlFor="certificationName"
                className="block text-left text-sm font-medium text-gray-700"
              >
                Name of Certification/Awards
              </label>
              <input
                type="text"
                id="certificationName"
                name="certificationName"
                className="mt-1 p-2 mb-4 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="institution"
                className="block text-left text-sm font-medium text-gray-700"
              >
                Institution
              </label>
              <input
                type="text"
                id="institution"
                name="institution"
                className="mt-1 p-2 mb-4 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="details"
                className="block text-left text-sm font-medium text-gray-700"
              >
                Details
              </label>
              <textarea
                id="details"
                name="details"
                className="mt-1 p-2 mb-4 border border-gray-300 rounded-md w-full h-20"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="attachment"
                className="block text-left text-sm font-medium text-gray-700"
              >
                Attach your Certificate/Awards
              </label>
              <input
                type="file"
                id="attachment"
                name="attachment"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full sm:w-1/2 lg:w-1/3"
                accept=".pdf, .doc, .docx"
              />
              <p className="text-sm text-gray-500 mt-1">
                Attach a PDF or Word document
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            {/* Add More Button */}
            <button className="flex items-center text-[#5D6AA8]">
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add More
            </button>

            {/* Delete Button */}
            <button className="flex items-center text-red-500">
              <FontAwesomeIcon icon={faTrash} className="mr-2" />
              Delete
            </button>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-[#5D6AA8] py-2 px-4 rounded-md mt-8 hover:bg-blue-600 text-white" onClick={onClose}>
              Save
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CertificatesForm;
