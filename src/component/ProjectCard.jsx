import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ projectName, companyName, location }) => {
  return (
    <div className="flex-col py-[1rem] justify-start items-start gap-2 flex">
      <div className="h-[280px] lg:h-[310px] p-6 lg:p-10 bg-white rounded-[16px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-6 flex">
        <div className="w-full lg:w-[40rem] justify-between items-start inline-flex">
          <div className="justify-start items-center gap-[2rem] lg:gap-[3rem] flex">
            <div className="text-[#5D6AA8] text-lg lg:text-2xl font-semibold">{projectName}</div>
          </div>
          <div className="justify-start items-start gap-2 lg:gap-4 flex">
            <div className="w-4 h-4 lg:w-6 lg:h-6 relative" />
            <div className="w-4 h-4 lg:w-6 lg:h-6 relative" />
          </div>
        </div>
        <div className="w-full lg:w-[40rem] h-auto text-black text-left text-sm lg:text-base font-normal font-['Inter'] leading-normal">
          {companyName} <br />
          <span className="mb-2 lg:mb-3">{location}</span>
        </div>
        <div className="w-full lg:w-[30rem] justify-between items-end inline-flex">
          <div className="flex gap-3 lg:gap-5">
            <Link to="/postedprojects">
              <button
                type="button"
                className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-4 lg:px-6 rounded-full text-xs lg:text-sm"
              >
                View Project
              </button>
            </Link>
            <button
              type="button"
              className="bg-[#F2AB39] hover:bg-white border border-[#F2AB39] text-black font-bold py-1 px-4 lg:px-6 rounded-full text-xs lg:text-sm"
            >
              Save Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
