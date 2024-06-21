import React from "react";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom

const JobSeekerCard = ({ JobSeekerItems }) => {
  return (
    <div>
      <div className="flex-col justify-start items-start pb-6 gap-2 flex">
        {JobSeekerItems.map((items, index) => (
          <div
            key={index}
            className="min-h-[316px] p-10 bg-white rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex"
          >
            <div className="w-full justify-between items-start inline-flex">
              <div className="justify-start items-center gap-10 flex">
                <div className="text-slate-500 text-[27px] font-semibold font-'Inter'">
                  {items.title}
                </div>
                <div className="justify-start items-end gap-2 flex">
                  <div className="w-[18px] h-[18px] relative" />
                  <div className="text-black text-base font-normal font-'Inter'">
                    {items.jobType}
                  </div>
                </div>
                <div className="justify-start items-end gap-2 flex">
                  <div className="text-black text-base font-normal font-'Inter'">
                    {items.salary}
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-4 flex">
                <div className="w-6 h-6 relative" />
                <div className="w-6 h-6 relative" />
              </div>
            </div>

            <div className="w-[50rem] h-auto text-black text-left text-base font-normal font-'Inter' leading-normal">
              {items.info}
            </div>
            <div className="w-full justify-between items-end inline-flex">
              <div className="justify-start items-start gap-4 flex flex-wrap">
                {" "}
                {/* Added flex-wrap class */}
                {items.skill?.map((SkillItems, i) => (
                  <div
                    key={i}
                    className=" px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex"
                  >
                    <div className="text-black text-sm font-normal font-['Inter']">
                      {SkillItems.name}
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/seemore">
                {" "}
                {/* Updated dynamic URL */}
                <div className="px-2 py-1 justify-center items-center gap-2 flex">
                  <div className="text-slate-500 text-opacity-50 text-sm font-semibold font-'Inter'">
                    See more
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSeekerCard;
