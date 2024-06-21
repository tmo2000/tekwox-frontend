import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ScreenDraft from "../component/ScreenDraft";

const ViewApplicants = () => {
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
        <div className="flex justify-center pb-12 font-semibold mt-8 mr-[26rem] gap-7">
<div className="flex items-center">
  <img src="Locationicon.png" alt="" className="ml-2 w-4 h-4" />
  <p className="ml-2">Lagos, Nigeria</p>
</div>
<div className="flex items-center">
  <img src="Statusicon.png" alt="" className="ml-2 w-4 h-4" />
  <p className="ml-2">Open to only Local Businesses</p>
</div>
<div className="flex items-center">
  <img src="Bidlimiticon.png" alt="" className="ml-2 w-4 h-4" />
  <p className="ml-2">Bid Limit</p>
</div>
<div className="flex items-center">
  <img src="Liveprojecticon.png" alt="" className="ml-2 w-4 h-4" />
  <p className="ml-2">Live Project</p>
</div>
         
        </div>
        <div className="flex relative">
          <Link to="/postedjob" className="absolute top-1 ">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          </Link>
        </div>
        <h1 className="font-bold text-3xl mt-6 mr-[50rem]">
          Web Developer Intern
        </h1>
        <div className="mt-6 mr-[40rem]">
          <button
            type="button"
            className="bg-[#5D6AA8] bg-opacity-95 hover:bg-[#5D6AA8] text-white font-bold py-1 px-8 rounded-full mr-2 "
          >
            Sort as required skills
          </button>
          <button
            type="button"
            className="bg-[#5D6AA8] bg-opacity-95 hover:bg-[#5D6AA8] text-white font-bold py-1 px-8 rounded-full "
          >
            Screening Questions
          </button>      
        </div>
         <div className='flex' >
          <p className='mt-[3rem]mb-[2rem] ml-[64rem] gap-10'><FontAwesomeIcon icon={faFileExport} className='pr-2' />Export List</p>
          </div>
  
<div className='flex width-[100%]'>
  <div className="border border-1 border-[#E8E8E8] overflow-x-auto overflow-y-auto rounded-md max-h-[70vh] max-width-[30%] pt-10 pl-10 pr-[7rem] mt-10 mr-2">
    <div className='text-left '> 
      <h2 className='text-xl'>Temisola Olajide</h2>
      <h3>Heriot Watt University</h3>
      <h3>JP Morgan</h3>
    </div>
    <div className='text-left mt-9'> 
      <h2 className='text-xl'>Emmanuel Akpan </h2>
      <h3>University of Michigan</h3>
      <h3>Google</h3>
    </div>
    <div className='text-left mt-9'> 
      <h2 className='text-xl'>Fiyin Abdul</h2>
      <h3>Harvard University</h3>
      <h3>Goldman Sachs</h3>
    </div>
    <div className='text-left mt-9'> 
      <h2 className='text-xl'>Hakeem Olajide</h2>
      <h3>Obafemi Awolowo University</h3>
      <h3>JP Morgan</h3>
    </div>
    <div className='text-left mt-9'> 
      <h2 className='text-xl'>Olufunmilayo Olajide</h2>
      <h3>Heriot Watt University</h3>
      <h3>Microsoft</h3>
    </div>
  </div>
  <div className="border border-1 border-[#E8E8E8] overflow-x-auto overflow-y-auto  rounded-md max-h-[70vh] width-[74%] mt-10">
    <div className='text-left p-3 bg-[#E8E8E8]'> 
     <div className='flex justify-between'>
  <h2 className='text-2xl'>Temisola Olajide</h2>
  <p className='text-right ml-[24rem]'>see full profile <FontAwesomeIcon icon={faArrowRight} /></p>
</div>
      <h3>Heriot Watt University</h3>
      <h3>JP Morgan</h3>
    </div>
  </div>
</div>


      </div>
    );
}

export default ViewApplicants
