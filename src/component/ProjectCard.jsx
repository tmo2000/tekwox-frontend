import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({projectName, companyName, Location, }) => {
  return (
    <div className="flex-col justify-start text-left items-start gap-2 flex">
            <div className="h-[230px] w-[80%] p-10 bg-white mb-[2rem] rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-6 flex">
                <div className="w-[50rem] justify-between items-start inline-flex">
                  <div className="justify-start items-center gap-[32rem] flex">
                    <div className="justify-start items-end gap-[10rem] flex text-slate-500 text-[27px] font-semibold font-['Inter']">
                      <div className="text-black text-base font-normal font-['Inter']">
                        <h1 className='text-[#5D6AA8] text-2xl font-semibold'>{projectName}</h1>
                      </div>
                    </div>
                  </div>

                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="w-[50rem] h-auto text-black text-left text-base font-normal font-['Inter'] leading-normal">
                  {companyName} <br />
                  <span className="mb-5"> {Location}</span>
                </div>
                <div className="w-[40rem] justify-between items-end inline-flex">
                  <div className="flex gap-5">
                    <button
                      type="button"
                      className=" bg-[#5D6AA8] bg-opacity-95 hover:bg-[#5D6AA8] text-white font-bold py-1 px-8 rounded-full "
                    >
                      View Project
                    </button>
                    <button
                      type="button"
                      className="bg-[#F2AB39] hover:bg-white border border-[#F2AB39] text-black font-bold py-1 px-8 rounded-full "
                    >
                      Save Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default ProjectCard
