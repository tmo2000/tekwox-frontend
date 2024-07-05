import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ title, companyName, address, applicants }) => {
  return (
    <div className="flex-col py-4 justify-start items-start gap-2">
      <div className="h-[250px] lg:w-full w-[15rem] lg:h-[316px] p-6 lg:p-10 bg-white rounded-[16px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-4">
        {/* Applicants shown at top right on larger screens */}
        
        <div className="w-full lg:w-[40rem] flex justify-between items-start">
          <div className="flex flex-col justify-start items-start gap-2 lg:gap-[32px]">
            <div className="text-left text-slate-500 lg:flex-row text-[27px] font-semibold font-inter">
              <div className="text-black lg:flex-row whitespace-nowrap text-base font-normal">
                {title}
                 <div className="hidden lg:flex lg:justify-start lg:items-end lg:gap-[10rem] lg:ml-[30rem] lg:whitespace-nowrap text-sm text-gray-500">
           {applicants}
        </div>
              </div>
            </div>
            {/* Applicants shown for smaller screens */}
            <div className="block lg:hidden text-left text-gray-500">
              Applicants: {applicants}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40rem] h-auto text-black text-left text-base font-normal leading-normal">
          {companyName}
          <br />
          <span>{address} onsite</span>
        </div>
        <div className="w-full lg:w-[40rem]  lg:mt-10 lg:justify-between lg:items-end lg:inline-flex flex justify-between items-center">
          <div className="flex gap-2 lg:gap-5">
            <Link to="/postedjob">
              <button
                type="button"
                className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-2 px-6 lg:py-1 lg:px-8 rounded-full"
              >
                View Job
              </button>
            </Link>
            <button
              type="button"
              className="px-6 lg:px-8 py-2 lg:py-1 border-[#5d6aa8] border text-[#5d6aa8] font-bold rounded-full hover:bg-[#5d6aa8] hover:text-white"
            >
              Close Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
