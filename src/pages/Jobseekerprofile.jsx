import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCog } from "@fortawesome/free-solid-svg-icons";
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

  return (
    <div>
      <div className="relative z-10">
        <nav className="bg-white fixed top-0 left-0 w-full border-b">
          <div className="py-4 px-6 w-full flex items-center justify-between">
            <div className='flex items-center gap-8 className="ml-4"'>
              <img src="logo.png" className="w-24 h-auto" />
              <ul className="flex items-center gap-4">
                <li>
                  <a href="#" className="ml-4">
                    Job{" "}
                  </a>
                  <a href="#" className="ml-4">
                    Report
                  </a>
                  <a href="#" className="ml-4">
                    Messaging
                  </a>
                </li>
              </ul>
            </div>
            <div></div>
            <div className="flex items-center gap-2">
              <div className="mr-4">
                <FontAwesomeIcon icon={faBell} size="1x" />
              </div>

              {/* Settings Icon */}
              <div>
                <FontAwesomeIcon icon={faCog} size="1x" />
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <div className="w-[100%] h-96 top-12 relative">
          <div className="flex relative">
            <Link to="/jobseekerdashboard" className="absolute top-1 left-1">
              <FontAwesomeIcon icon={faArrowLeft} size="3x" className="mr-2" />
            </Link>
          </div>
          {/* <Link to="/jobseekerdashboard" className="absolute top-6 left-1">
            <FontAwesomeIcon icon={faArrowLeft} size="3x" className="mr-2" />
          </Link> */}

          <div className="w-72 h-64 left-0 mt-4 absolute flex-col justify-center items-center gap-4 inline-flex">
            <div className="w-40 h-40 relative">
              <img src="profile.png" alt="" />
            </div>
            <div className="text-justify text-black text-2xl font-medium font-['Inter']">
              <h2 className="text-2xl mb-[1rem]">
                {firstname} {lastname}
              </h2>
            </div>
          </div>

          <div className="w-[100%] left-0 top-[262.80px] absolute justify-start items-start gap-32 inline-flex">
            <div className="w-[46%] flex-col justify-start items-start gap-6 inline-flex">
              <div className="h-auto self-stretch px-4 py-8 bg-white rounded-2xl border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-8 flex">
                <div className="justify-start items-start gap-96 inline-flex">
                  <div className="text-slate-500 text-2xl font-semibold font-['Inter']">
                    <PersonalForm />
                  </div>
                </div>
                <div className="w-[80%] justify-start text-left inline-flex">
                  <div className="w-[90%] text-black text-lg font-normal font-['Inter']">
                    {personalDetails && (
                      <div>
                        <h3>Bio: {personalDetails.bio}</h3>
                        <h3>Nationality: {personalDetails.nationality}</h3>
                        <h3>Country: {personalDetails.country}</h3>
                      </div>
                    )}
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
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
                        English:Fluent
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </div>
                      <div className="w-6 h-6 relative" />
                    </div>
                  </div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
            <div className="w-[54%] flex-col justify-start items-start gap-6 inline-flex">
              <div className="h-auto self-stretch px-4 py-8 bg-white rounded-2xl border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-8 flex">
                <div className="justify-start items-start gap-96 inline-flex">
                  <ProfessionalForm />
                </div>
                <div className="self-stretch justify-start items-center gap-24 inline-flex">
                  <div className="w-[100%] px-px py-2 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="w-[100%] justify-start text-left inline-flex">
                      <div className="w-[80%] grow shrink basis-0 text-black text-lg font-medium font-['Inter']">
                        Project Manager, Ascentree Services | Project
                        Manager/Web Development{" "}
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
                        {workexperience && (
                          <div>
                            <h3>Companyname: {workexperience.companyname}</h3>
                            <h3>Job title: {workexperience.jobtitle}</h3>
                            <h3>jobdescription: {workexperience.jobdescription}</h3>
                          </div>
                        )}
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
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="grow shrink basis-0 h-9 justify-start items-start gap-8 flex">
                    <div className="w-24 p-2 bg-zinc-100 rounded-2xl border border-neutral-500 border-opacity-50 justify-center items-center gap-2 flex">
                      <div className="text-black text-xl font-medium font-['Inter']">
                        Power BI
                      </div>
                    </div>
                    <div className="w-32 p-2 bg-zinc-100 rounded-2xl border border-neutral-500 border-opacity-50 justify-center items-center gap-2 flex">
                      <div className="text-black text-xl font-medium font-['Inter']">
                        Leadership
                      </div>
                    </div>
                    <div className="w-60 p-2 bg-zinc-100 rounded-2xl border border-neutral-500 border-opacity-50 justify-center items-center gap-2 flex">
                      <div className="text-black text-xl font-medium font-['Inter']">
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
                  <ProjectsForm />
                </div>
                <div className="self-stretch  text-left justify-between items-center inline-flex">
                  <div className="grow shrink basis-0 px-px py-2 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch justify-start items-start gap-2 inline-flex">
                      <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter']">
                        Projects help you do more of the work you love to do.
                        Create project offerings that highlight your strengths
                        and attract more clients.{" "}
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
