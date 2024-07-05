import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ScreenDraft from "../component/ScreenDraft";
import ScreeningB from '../component/ScreeningB';

const ViewApplicants = () => {
    return (
       <div>
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4 ">
        {/* Left-aligned image */}
        <img
          src="logo.png" // Replace with the actual path to your logo image
          alt="Logo"
          className="w-32 h-auto"
        />

        {/* Right-aligned image */}
        <img
          src="profile.png" // Replace with the actual path to your second image
          alt="Another Image"
          className="w-12 h-auto"
        />
      </div>

      {/* Main content container */}
      <div className="container mx-auto mt-8 px-4">
        {/* Top section with icons */}
        <div className="flex flex-wrap lg:mr-[29rem] justify-center gap-4">
          <div className="flex items-center">
            <img src="Locationicon.png" alt="" className="w-4 h-4" />
            <p className="ml-2">Lagos, Nigeria</p>
          </div>
          <div className="flex items-center">
            <img src="Statusicon.png" alt="" className="w-4 h-4" />
            <p className="ml-2">Open to only Local Businesses</p>
          </div>
          <div className="flex items-center">
            <img src="Bidlimiticon.png" alt="" className="w-4 h-4" />
            <p className="ml-2">Bid Limit</p>
          </div>
          <div className="flex items-center">
            <img src="Liveprojecticon.png" alt="" className="w-4 h-4" />
            <p className="ml-2">Live Project</p>
          </div>
        </div>

        {/* Back button */}
        <div className="flex justify-start mt-4">
          <Link to="/postedjob" className="mr-2">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Jobs
          </Link>
        </div>

        {/* Job title */}
        <h1 className="font-bold text-3xl mt-6 lg:mr-[29rem]">
          Web Developer Intern
        </h1>

        {/* Buttons */}
        <div className="mt-4 lg:mr-[30rem]">
          <button
            type="button"
            className="bg-[#5D6AA8] bg-opacity-95 hover:bg-[#5D6AA8] text-white font-bold py-2 px-8 rounded-full mr-2"
          >
            Sort as required skills
          </button>
          <button
            type="button"
            className="bg-[#5D6AA8] bg-opacity-95 hover:bg-[#5D6AA8] text-white font-bold py-2 px-8 rounded-full "
          >
            Screening Questions
          </button>
        </div>

       

        {/* Two side-by-side divs */}
        <div className="flex flex-col lg:flex-row gap-2 mt-4">
          {/* Left content */}
          <div className="bg-gray-200 overflow-x-auto overflow-y-auto p-4  h-[654px] lg:w-1/4">
            <div className='text-left '>
              <h2 className='text-xl'>Temisola Olajide</h2>
              <h3>Heriot Watt University</h3>
              <h3>JP Morgan</h3>
            </div>
            <div className='text-left mt-4'>
              <h2 className='text-xl'>Emmanuel Akpan </h2>
              <h3>University of Michigan</h3>
              <h3>Google</h3>
            </div>
            <div className='text-left mt-4'>
              <h2 className='text-xl'>Fiyin Abdul</h2>
              <h3>Harvard University</h3>
              <h3>Goldman Sachs</h3>
            </div>
            <div className='text-left mt-4'>
              <h2 className='text-xl'>Hakeem Olajide</h2>
              <h3>Obafemi Awolowo University</h3>
              <h3>JP Morgan</h3>
            </div>
            <div className='text-left mt-4'>
              <h2 className='text-xl'>Olufunmilayo Olajide</h2>
              <h3>Heriot Watt University</h3>
              <h3>Microsoft</h3>
            </div>
          </div>

          {/* Right content */}
               <div className="relative bg-gray-300 overflow-x-auto overflow-y-auto p-4 flex-1 h-[654px] lg:w-3/4">
      {/* Export Button */}
      <div className="absolute top-2 right-2">
        <button className="bg-[#5D6AA8] text-white px-4 py-2 rounded">
          <FontAwesomeIcon icon={faFileExport} /> Export List
        </button>
      </div>
                      <br />
                      <br />
      <div className='text-left p-3 bg-[#E8E8E8]'>
        <div className='flex justify-between'>
          <h2 className='text-2xl'>Temisola Olajide</h2>
          <p className='text-right'>see full profile <FontAwesomeIcon icon={faArrowRight} /></p>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col'>
            <h3>Heriot Watt University</h3>
            <h3>JP Morgan</h3>
          </div>
          <div className='flex'>
            <label htmlFor="fit" className="mr-2">
              <input type="checkbox" id="fit" name="fit" />
              a fit
            </label>
            <label htmlFor="maybe" className="mr-2">
              <input type="checkbox" id="maybe" name="maybe" />
              maybe
            </label>
            <label htmlFor="notFit" className="mr-2">
              <input type="checkbox" id="notFit" name="notFit" />
              not a fit
            </label>
          </div>
        </div>
      </div>

      <div className='text-left mt-4'>
        <h1 className='font-bold text-2xl'>Profile Insights</h1>
        <h2 className='text-xl'>Experience</h2>
        <div className='flex items-center mt-2'>
          <div className='border border-1 bg-gray-100 w-12 h-12'></div>
          <div className='ml-2'>
            <h2>JP Morgan</h2>
            <h3>2021-2024</h3>
          </div>
        </div>
        <h1 className='font-bold text-2xl mt-4'>Resume</h1>
        <img src="resumepic.png" alt="" className='w-full h-auto mt-2' />
        <h2 className='text-2xl mt-4'>Screening Questions</h2>
        <div className='mt-2'>
          <ScreeningB question="Have you completed the following level of Education: Bachelor’s?" answer="Yes" />
          <ScreeningB question="Have you completed the following level of Education: Bachelor’s?" answer="Yes" />
          <ScreeningB question="Have you completed the following level of Education: Bachelor’s?" answer="Yes" />
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
    );
}

export default ViewApplicants
