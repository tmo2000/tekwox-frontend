import React from "react";

const Modal = ({ shouldShow, onClose, children }) => {
  return shouldShow ? (
    <div
      className="fixed flex items-center justify-center top-0 left-0 z-10 h-full w-full bg-gray-500/60 overflow-auto"
      onClick={onClose}
    >
      <div
        className="w-[3/4] p-5 bg-white rounded-lg"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
