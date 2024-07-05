import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";

const ContactForm = () => {
  const [show, setShow] = useState(false);

  const onClose = () => {
    setShow(false);
  };

  return (
    <>
      <div
        className="text-slate-500 text-2xl font-semibold font-['Inter']  flex items-center justify-between"
       
      >
        <span>Contact</span>
        <FontAwesomeIcon className="ml-4 md:ml-4 cursor-pointer" icon={faEdit}  onClick={() => setShow(true)} />
      </div>
      <Modal shouldShow={show} onClose={onClose}>
        <div className="p-4 md:mr-14 md:mt-16">
          <h1 className="text-left ml-4 md:ml-16 text-2xl md:text-4xl">Contact</h1>
          <div className="mb-4 ml-4 mt-6 md:ml-16 md:mt-9">
            <div className="mb-2">
              <label
                htmlFor="telephone"
                className="mb-2 block text-left text-sm font-medium text-gray-700"
              >
                Telephone number
              </label>
              <input
                type="number"
                id="telephone"
                name="telephone"
                className="mt-1 mb-8 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>
          <div className="mb-4 ml-4 mt-6 md:ml-16 md:mt-9">
            <div className="mb-2">
              <label
                htmlFor="email"
                className="mb-2 block text-left text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 mb-8 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>
          <button
            className="ml-4 md:ml-[30rem] bg-[#5D6AA8] py-2 px-4 rounded-md mt-8 hover:bg-blue-600 text-white"
            onClick={onClose}
          >
            Save
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ContactForm;
