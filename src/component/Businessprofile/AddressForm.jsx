import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import Modal from "../Modal";

const AddressForm = () => {
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
        Address
        <FontAwesomeIcon className="ml-[26rem]" icon={faEdit} />
      </div>
      <Modal shouldShow={show} onClose={onClose}>
        <div className="mr-14 mt-16 ">
          <h1 className="text-left ml-16 text-4xl ">Address </h1>
          <div className="mb-4 ml-16 mt-9">
            <div className="mb-2">
              <label
                htmlFor="bio"
                className="mb-2 block text-left text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="bio"
                name="bio"
                className="mt-1 mb-8 p-2 border border-gray-300 rounded-md w-full h-30"
              />
            </div>
          </div>
          <div className="mb-4 ml-16 mt-9">
            <div className="mb-2">
              <label
                htmlFor="bio"
                className="mb-2 block text-left text-sm font-medium text-gray-700"
              >
                State
              </label>
              <input
                type="text"
                id="bio"
                name="bio"
                className="mt-1 mb-8 p-2 border border-gray-300 rounded-md w-full h-30"
              />
            </div>
          </div>
          <div className="mb-4 ml-16 mt-9">
            <div className="mb-2">
              <label
                htmlFor="bio"
                className="mb-2 block text-left text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                type="text"
                id="bio"
                name="bio"
                className="mt-1 mb-8 p-2 border border-gray-300 rounded-md w-full h-30"
              />
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

export default AddressForm;
