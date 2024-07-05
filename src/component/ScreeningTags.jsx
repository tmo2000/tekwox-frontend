import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import plusIcn from "../assets/ei_plus.svg";

const ScreeningTags = ({ label, onClick }) => {
  const handleOnClick = () => {
    onClick();
  }
  return (
    <div onClick={handleOnClick}>
      <div className="text-black font-bold flex items-center rounded-full pl-4 mt-4 border-2 border-black max-w-[13rem] bg-white hover:bg-[#938E8E]">
        <span className="flex items-center">
          {" "}
          {/* Use a span wrapper with flex properties */}
          {label}
          <img src={plusIcn} alt="Icon" className="ml-2" />{" "}
          {/* Apply margin to the image */}
        </span>
      </div>
    </div>
  );
};

export default ScreeningTags;
