import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import Modal from "../Modal";

const EducationForm = () => {
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
        Education
        <FontAwesomeIcon className="ml-[18rem]" icon={faEdit} />
      </div>
      <Modal shouldShow={show} onClose={onClose}>
        <div className="ml-3 mt-16 ">
          <h1 className="text-left ml-16 text-4xl ">Education </h1>
          <div className="mb-4 ml-16 mt-9">
            <div className="mb-2">
              <label
                htmlFor="bio"
                className="mb-2 block text-left text-sm font-medium text-gray-700"
              >
                School
              </label>
              <input
                type="text"
                id="bio"
                name="bio"
                className="mt-1 mb-8 p-2 border border-gray-300 rounded-md w-full "
                placeholder="What School did you attend?"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="nationality"
                className="mb-2 block text-left text-sm font-medium text-gray-700"
              >
                Degree
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
                Field of study
              </label>
              <input
                type="text"
                id="country"
                name="country"
                className="mt-1 p-2 mb-8 border border-gray-300 rounded-md w-full "
              />
            </div>

            <div className="mb-4 flex w-[70%]">
              <div className="mr-4">
                <label
                  htmlFor="startDate"
                  className="block text-left text-sm font-medium text-gray-700"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-[20rem]"
                />
              </div>

              <div>
                <label
                  htmlFor="endDate"
                  className="block text-left text-sm font-medium text-gray-700"
                >
                  Graduation date
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-[20rem]"
                />
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
          </div>
          <button className="ml-[30rem] text-[#5D6AA8]" onClick={onClose}>
            Save
          </button>
        </div>
      </Modal>
    </>
  );
};

export default EducationForm;
