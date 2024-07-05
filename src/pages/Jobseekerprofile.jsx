import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PersonalForm from "../component/Jobseekerprofilemodals/PersonalForm";
import EducationForm from "../component/Jobseekerprofilemodals/EducationForm";
import CertificatesForm from "../component/Jobseekerprofilemodals/CertificatesForm";
import SkillsForm from "../component/Jobseekerprofilemodals/SkillsForm";
import ProfessionalForm from "../component/Jobseekerprofilemodals/ProfessionalForm";
import ExperienceForm from "../component/Jobseekerprofilemodals/ExperienceForm";
import PortfolioForm from "../component/Jobseekerprofilemodals/PortfolioForm";
import ProjectsForm from "../component/Jobseekerprofilemodals/ProjectsForm";

const Jobseekerprofile = () => {
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  const { firstname, lastname } = userData;
  const [personalDetails, setPersonalDetails] = useState(null);
  const [workexperience, setWorkexperience] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Retrieve user data from session storage
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const { email } = userData;

    // Fetch personal details using the email
    const fetchWorkExperience = async () => {
      try {
        const response = await fetch(`https://tekwox.com/api/workexperience/search/${email}`);
        if (response.ok) {
          const workexperienceData = await response.json();
          setWorkexperience(workexperienceData.data[0]); // Assuming there is only one entry
        } else {
          console.error('Failed to fetch work experience details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching work experience details:', error);
      }
    };

    fetchWorkExperience();
  }, []);

  useEffect(() => {
    // Retrieve user data from session storage
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const { email } = userData;

    // Fetch personal details using the email
    const fetchPersonalDetails = async () => {
      try {
        const response = await fetch(`https://tekwox.com/api/personaldetails/search/${email}`);
        if (response.ok) {
          const personalDetailsData = await response.json();
          setPersonalDetails(personalDetailsData.data[0]); // Assuming there is only one entry
        } else {
          console.error('Failed to fetch personal details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching personal details:', error);
      }
    };

    fetchPersonalDetails();
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="relative z-10">
         <nav className="bg-white fixed top-0 left-0 w-full border-b">
        <div className="py-4 px-6 w-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img src="logo.png" className="w-24 h-auto" alt="Logo" />
            <ul className=" hidden lg:flex lg:items-center lg:gap-4">
              <li>
                <a href="#" className="ml-4">
                  Job
                </a>
              </li>
              <li>
                <a href="#" className="ml-4">
                  Report
                </a>
              </li>
              <li>
                <a href="#" className="ml-4">
                  Messaging
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <div className="mr-4 cursor-pointer" onClick={toggleModal}>
              <FontAwesomeIcon icon={faBell} size="1x" />
            </div>
            <div className="cursor-pointer" onClick={toggleModal}>
              <FontAwesomeIcon icon={faCog} size="1x" />
            </div>
          </div>
          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden">
            <FontAwesomeIcon icon={faBars} size="lg" onClick={toggleModal} />
          </div>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-xl max-w-md">
            
            <ul className="flex flex-col gap-4">
                <li>Jobs</li>
                <li>Reports</li>
              <li>Messaging</li>
              {/* Add more items as needed */}
            </ul>
            <button
              className="absolute top-4 right-4 text-xl text-gray-400 hover:text-gray-700"
              onClick={toggleModal}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )}

      </div>
      <div className="flex">
        <div className="w-full max-w-[1000px] mt-[6rem] ">
          <div>
<div className=" lg:ml-10 ml-2 ">
            <Link to="/jobseekerdashboard" >
              <FontAwesomeIcon icon={faArrowLeft} size="2x" className="mr-2" />
            </Link>
          </div>
        
           <div className="w-72 h-64 lg:left-6 mt-4 absolute flex-col justify-center items-center  gap-4 inline-flex ml-[3rem]">
            <div className="w-40 h-40 flex justify-center items-center">
              <img src="profile.png" alt="" />
            </div>
            <div className="text-justify text-black text-2xl font-medium font-['Inter']">
              <h2 className="text-2xl mb-[1rem]">
                {firstname} {lastname}
              </h2>
            </div>
          </div>
          </div>
          
        <div className="w-[100%] px-5 md:ml-5 mt-[20rem] absolute justify-start items-start gap-28 md:inline-flex">
        <div className="md:w-[37%] flex-col justify-start items-start gap-6 mb-10 inline-flex">
          <div className="h-auto self-stretch px-4 py-8 bg-white rounded-2xl border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-8 flex">
            <div className="justify-start items-start gap-96 inline-flex">
              <div className="text-slate-500 text-2xl font-semibold font-['Inter']">
                <PersonalForm />
              </div>
            </div>
            <div className="w-[80%] justify-start text-left inline-flex">
              <div className="w-[90%] text-black text-lg font-normal font-['Inter']">
                <h3>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                <h3>Nationality: Lorem ipsum</h3>
                <h3>Country: Lorem ipsum</h3>
              </div>
              <div className="w-6 h-6 relative" />
            </div>
          </div>
          <div className="h-auto self-stretch px-4 py-8 bg-white rounded-2xl border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-8 flex">
            <div className="justify-start items-start gap-6 inline-flex">
              <EducationForm />
            </div>
            <div className="self-stretch justify-start items-center gap-7 inline-flex">
              <div className="grow shrink basis-0 px-px py-2 flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[80%] justify-start text-left inline-flex">
                  <div className="w-[90%] text-black text-lg font-normal font-['Inter']">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
              <div className="w-6 h-6 relative" />
            </div>
          </div>
          <div className="h-auto self-stretch px-4 py-8 bg-white rounded-2xl border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-8 flex">
            <div className="justify-start items-start gap-6 inline-flex">
              <div className="text-slate-500 text-2xl font-semibold font-['Inter']">
                Languages
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-7 inline-flex">
              <div className="grow shrink basis-0 px-px py-2 flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[80%] justify-start text-left inline-flex">
                  <div className="w-[90%] text-black text-lg font-normal font-['Inter']">
                    English: Fluent
                  </div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
              <div className="w-6 h-6 relative" />
            </div>
          </div>
          <div className="h-auto self-stretch px-4 py-8 bg-white rounded-2xl border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-8 flex">
            <div className="justify-start items-start gap-6 inline-flex">
              <div className="text-slate-500 text-2xl font-semibold font-['Inter']">
                Verification
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="grow shrink basis-0 px-px py-2 flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[80%] justify-start text-left inline-flex">
                  <div className="w-[90%] text-black text-lg font-normal font-['Inter']">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
              <div className="w-6 h-6 relative" />
            </div>
          </div>
        </div>
        <div className="md:w-[46%] w-full  flex-col justify-start items-start gap-6 inline-flex">
          <div className="h-auto self-stretch px-4 py-8 bg-white rounded-2xl border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-8 flex">
            <div className="justify-start items-start gap-96 inline-flex">
              <ProfessionalForm />
            </div>
            <div className="self-stretch justify-start items-center gap-24 inline-flex">
              <div className="w-[100%] px-px py-2 flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[100%] justify-start text-left inline-flex">
                  <div className="w-[80%] grow shrink basis-0 text-black text-lg font-medium font-['Inter']">
                    Project Manager, Ascentree Services | Project Manager/Web Development
                  </div>
                </div>
              </div>
              <div className="w-6 h-6 relative" />
            </div>
            <div className="self-stretch justify-start items-center gap-36 inline-flex">
              <div className="grow shrink basis-0 text-black text-lg font-normal font-['Inter']">
                I am a Project Manager at ascentree services
              </div>
              <div className="w-6 h-6 relative" />
            </div>
          </div>
          <div className="self-stretch h-auto px-10 py-8 bg-white rounded-2xl border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-8 flex">
            <div className="justify-start items-start gap-6 inline-flex">
              <ExperienceForm />
            </div>
            <div className="self-stretch justify-start items-center gap-7 inline-flex">
              <div className="grow shrink basis-0 px-px py-2 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Inter']">
                    <h3>Company Name: Lorem ipsum</h3>
                    <h3>Job title: Lorem ipsum</h3>
                    <h3>Job description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                  </div>
                </div>
              </div>
              <div className="w-6 h-6 relative" />
            </div>
          </div>
          <div className="self-stretch h-80 px-10 py-8 bg-white rounded-2xl border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-8 flex">
            <div className="justify-start items-start gap-96 inline-flex">
              <PortfolioForm />
            </div>
            <div className="self-stretch h-48 flex-col justify-start items-center gap-5 flex">
              <div className="flex-col justify-start items-center gap-5 flex">
                <div className="text-black text-xl font-normal font-['Inter']">
                  You are more likely to get a Job when you add a portfolio.
                </div>
                <div className="px-2 py-1 justify-center items-center gap-2 inline-flex">
                  <div className="text-slate-500 text-base font-normal font-['Inter'] underline">
                    Add a Portfolio
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-40 px-10 py-8 bg-white rounded-2xl border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-8 flex">
            <div className="justify-start items-start gap-6 inline-flex">
              <SkillsForm />
            </div>
            <div className="lg:self-stretch lg:justify-between lg:items-center lg:inline-flex">
              <div className="grow shrink basis-0 h-9 justify-start items-start gap-5 lg:gap-8 flex">
                <div className="lg:w-24 p-2 bg-zinc-100 rounded-2xl border border-neutral-500 border-opacity-50 justify-center items-center gap-1 flex">
                  <div className="text-black lg:text-xl text-sm font-medium font-['Inter']">
                    Power BI
                  </div>
                </div>
                <div className="lg:w-32 p-2 bg-zinc-100 rounded-2xl border border-neutral-500 border-opacity-50 justify-center items-center gap-1 flex">
                  <div className="text-black lg:text-xl text-sm font-medium font-['Inter']">
                    Leadership
                  </div>
                </div>
                <div className="lg:w-60 p-2 bg-zinc-100 rounded-2xl border border-neutral-500 border-opacity-50 justify-center items-center gap-1 flex">
                  <div className="text-black lg:text-xl text-sm font-medium font-['Inter']">
                    Business Development
                  </div>
                </div>
              </div>
              <div className="w-6 h-6 relative" />
            </div>
          </div>
          <div className="self-stretch h-auto px-4 py-8 bg-white rounded-2xl border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-8 flex">
            <div className="justify-start items-start gap-6 inline-flex">
              <CertificatesForm />
            </div>
            <div className="self-stretch text-left justify-start items-center gap-7 inline-flex">
              <div className="w-[100%] grow shrink basis-0 px-px py-2 flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[100%] self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="w-[80%]">
                    <span className="text-black text-lg font-semibold font-['Inter'] leading-relaxed">
                      Employee of the Month
                      <br />
                    </span>
                    <span className="text-black text-base font-normal font-['Inter'] leading-normal">
                      Edge water Solutions
                      <br />
                      October 2023
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-6 h-6 relative" />
            </div>
          </div>
          <div className="self-stretch h-auto px-4 py-8 bg-white rounded-2xl border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-8 flex">
            <div className="justify-start items-start gap-6 inline-flex">
              <div className="text-slate-500 text-2xl font-semibold font-['Inter']">
                Projects
              </div>
            </div>
            <div className="self-stretch  text-left justify-between items-center inline-flex">
              <div className="grow shrink basis-0 px-px py-2 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter']">
                    Projects help you do more of the work you love to do. Create project offerings that highlight your strengths and attract more clients.
                  </div>
                </div>
              </div>
              <div className="w-6 h-6 relative" />
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Jobseekerprofile;
