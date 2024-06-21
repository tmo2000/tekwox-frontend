import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import Modal from "../Modal";

const SkillsForm = () => {
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
        Skills
        <FontAwesomeIcon className="ml-[18rem]" icon={faEdit} />
      </div>
      <Modal shouldShow={show} onClose={onClose}>
        <div className="ml-3 mt-16 ">
          <h1 className="text-left ml-16 text-4xl ">Skill </h1>
          <div className="mb-4 ml-16 mt-9">
            <div className="mb-2">
              <label
                htmlFor="nationality"
                className="mb-2 block text-left text-sm font-medium text-gray-700"
              >
                Skill
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
                Skill Level
              </label>
              <select
                type="text"
                id="country"
                name="country"
                className="mt-1 p-2 mb-8 border border-gray-300  text-gray-500 rounded-md w-full h-auto"
                placeholder="What level are you at for this skill?"
              >
                <option value="" className="" disabled selected>
                  What level are you at for this skill?
                </option>
                <option value="">Beginner</option>
                <option value="">Intermediate</option>
                <option value="">Experienced</option>
                <option value="">Master</option>
              </select>
            </div>

            <div className="flex">
              {/* Add More Div */}
              <div className="mr-4"></div>

              {/* Trash Icon Div */}
              <div>
                <i className="fas fa-trash text-red-500"></i>
              </div>
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

export default SkillsForm;
