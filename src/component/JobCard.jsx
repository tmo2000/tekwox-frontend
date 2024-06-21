import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ title, companyName, address, applicants }) => {
  return (
    <div className="flex-col py-[1rem] justify-start items-start gap-2 flex">
      <div className="h-[316px] p-10 bg-white rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
        <div className="w-[50rem] justify-between items-start inline-flex">
          <div className="justify-start items-center gap-[32rem] flex">
            <div className="justify-start items-end gap-[10rem] text-left text-slate-500 text-[27px] inline-flex font-semibold font-['Inter']">
              <div className="text-black whitespace-nowrap text-base font-normal font-['Inter']">
                {title}
              </div>
            </div>
            <div className="justify-start items-end gap-[10rem] flex">
              <div className="text-black whitespace-nowrap text-base font-normal font-['Inter']">
                {applicants}
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-4 flex">
            <div className="w-6 h-6 relative" />
            <div className="w-6 h-6 relative" />
          </div>
        </div>
        <div className="w-[50rem] h-auto text-black text-left text-base font-normal font-['Inter'] leading-normal">
          {companyName}
          <br /> <span>{address} onsite</span>
        </div>
        <div className="w-[40rem] justify-between items-end inline-flex">
          <div className="flex gap-5">
            <Link to="/viewjob">
              <button
                type="button"
                className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full "
              >
                View Job
              </button>
            </Link>

            <button
              type="button"
              className="px-8 py-1 border-[#5d6aa8] border text-[#5d6aa8] font-bold rounded-full hover:bg-[#5d6aa8] hover:text-white "
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
