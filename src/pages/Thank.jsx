import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import ProjectBid from "../component/details/ProjectBid";

const Thank = () => {
  return (
    <div>
      <div className="flex">
        {/* Left-aligned image */}
        <div>
          <img
            src="logo.png" // Replace with the actual path to your logo image
            alt="Logo"
            className="w-32 h-auto ml-12 mt-6"
          />
        </div>

        {/* Right-aligned image */}
        <div className="ml-auto">
          <img
            src="profile.png" // Replace with the actual path to your second image
            alt="Another Image"
            className="w-12 h-auto mr-12 mt-6"
          />
        </div>
      </div>
      <div className="mt-[13rem]">
        <div>
          <h2 className=" text-4xl font-bold mb-4">
            Thank you for your bid ...
          </h2>
        </div>
        <div>
          <h3 className="tracking-wide font-semibold">
            you will be redirected shortly. If not click to be redirected
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Thank;
