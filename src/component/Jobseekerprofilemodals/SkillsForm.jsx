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
        <FontAwesomeIcon className="ml-4 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4 cursor-pointer" icon={faEdit} />
      </div>
      <Modal shouldShow={show} onClose={onClose}>
        <div className="p-4 sm:p-6 md:p-10 lg:p-16 xl:p-20">
          <h1 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Skill</h1>
          <div className="mt-6">
            <div className="mb-4">
              <label
                htmlFor="skill"
                className="block text-left text-sm font-medium text-gray-700"
              >
                Skill
              </label>
              <input
                type="text"
                id="skill"
                name="skill"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="skill-level"
                className="block text-left text-sm font-medium text-gray-700"
              >
                Skill Level
              </label>
              <select
                id="skill-level"
                name="skill-level"
                className="mt-1 p-2 border border-gray-300 text-gray-500 rounded-md w-full"
              >
                <option value="" disabled selected>
                  What level are you at for this skill?
                </option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="experienced">Experienced</option>
                <option value="master">Master</option>
              </select>
            </div>

            <div className="flex justify-end">
              <div className="mr-4">
                <i className="fas fa-trash text-red-500"></i>
              </div>
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

export default SkillsForm;
