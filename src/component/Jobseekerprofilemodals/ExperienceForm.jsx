import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import Modal from "../Modal";

const ExperienceForm = () => {
  const [show, setShow] = useState(false);

  const onClose = () => {
    setShow(false);
  };

  return (
    <>
      <div
        className="text-slate-500 text-2xl font-semibold font-['Inter']"
        
      >
        Work Experience
        <FontAwesomeIcon className="ml-4 cursor-pointer" icon={faEdit} onClick={() => setShow(true)} />
      </div>
      <Modal shouldShow={show} onClose={onClose}>
        <div className="lg:mr-10 lg:mt-16 p-8 ">
          <h1 className="lg:text-left lg:ml-16 text-4xl mb-8 ">Experience</h1>
          <div className="mb-4 lg:ml-16 lg:mt-9">
            <div>
              <label
                htmlFor="country"
                className="mb-2 block text-left text-sm font-medium text-gray-700"
              >
                Experience
              </label>
              <textarea
                type="text"
                id="country"
                name="country"
                className="mt-1 p-2 mb-8 border border-gray-300 rounded-md w-full h-40 lg:h-60"
              />
            </div>
          </div>
          <button className="lg:ml-[30rem] bg-[#5D6AA8] py-2 px-4 rounded-md mt-8 hover:bg-blue-600 text-white" onClick={onClose}>
            Save
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ExperienceForm;
