import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import Modal from "../Modal";

const ProjectsForm = () => {
  const [show, setShow] = useState(false);

  const onClose = () => {
    setShow(false);
  };

  return (
    <>
      <div
        className="text-slate-500 text-2xl font-semibold font-['Inter']"
       
      >
        Projects
        <FontAwesomeIcon className="ml-4 cursor-pointer" icon={faEdit}  onClick={() => setShow(true)} />
      </div>
      <Modal shouldShow={show} onClose={onClose}>
        <div className="p-4 sm:p-6 md:p-10 lg:p-16 xl:p-20">
          <h1 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Project</h1>
          <div className="mt-6">
            <div className="mb-4">
              <input
                type="text"
                id="projectName"
                name="projectName"
                placeholder="Project Name"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="resume"
                className="block text-left text-sm font-medium text-gray-700"
              >
                Attach Your Resume
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full "
                accept=".pdf, .doc, .docx"
              />
              <p className="text-sm text-gray-500 mt-1">
                Attach a PDF or Word document
              </p>
            </div>
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

export default ProjectsForm;
