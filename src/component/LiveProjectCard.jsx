import React from 'react';
import { Link } from 'react-router-dom';

const LiveProjectCard = ({ projectName, stateCountry, scope, companyName, Location, bidLimit }) => {
  return (
    <div className="flex-col justify-start text-left items-start gap-2 flex">
      <div className="lg:h-[300px] h-[450px] w-[40%] lg:w-full p-10 bg-white mb-[2rem] rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-4 flex">
        <div className="lg:w-[50rem] w-full justify-between items-start inline-flex">
          <div className="justify-start items-center gap-[28rem] flex">
            <div className="">
              <div className="text-black text-base font-normal font-['Inter']">
                <h1 className='text-[#5D6AA8] lg:text-2xl text-lg mr-8 font-semibold break-words whitespace-normal'>{projectName}</h1>
                <br />
                <div className="flex mt-1 lg:flex-row flex-col gap-4">
                  <div className='flex items-center'><img src="Locationicon.png" alt="" className='w-4 h-4 mr-1' />{stateCountry}</div>
                  <div className='flex items-center'><img src="Statusicon.png" alt="" className='w-4 h-4 mr-1'/>{scope}</div>
                  <div className='flex items-center'><img src="Bidlimiticon.png" alt="" className='w-4 h-4 mr-1'/>Bid Limit</div>
                  <div className='flex items-center'><img src="Liveprojecticon.png" alt="" className='w-4 h-4 mr-1'/>Live Project</div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="justify-start items-start gap-2 flex">
            <div className="w-6 h-6 relative" />
            <div className="w-6 h-6 relative" />
          </div> */}
        </div>
        <div className="w-[50rem] h-auto text-black text-left text-base font-normal font-['Inter'] leading-normal">
          {companyName} <br />
          <span className="mb-3"> {Location}</span>
          <p className="text-[#938E8E]">
            {bidLimit}
          </p>
        </div>
        <div className="w-[20rem] lg:w-[40rem] justify-between items-end inline-flex">
          <div className="flex lg:gap-5 gap-1">
            <Link to="/listedprojectdetails">
              <button
                type="button"
                className="bg-[#5D6AA8] bg-opacity-95 hover:bg-[#5D6AA8] text-white font-bold lg:py-1 lg:px-8 py-1 px-2 lg:px-4 rounded-full "
              >
                View Project
              </button>
            </Link>

            <button
              type="button"
              className="bg-[#F2AB39] hover:bg-white border border-[#F2AB39] text-black font-bold lg:py-1 lg:px-8 py-1 px-2 lg:px-4 rounded-full "
            >
              Save Project
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveProjectCard;
