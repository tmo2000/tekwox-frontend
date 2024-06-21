import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCog } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link, useParams } from "react-router-dom";
import JobSeekerCard from "../component/JobSeekerCard";
// import { Axios } from "axios";

const JobseekerDashboard = () => {
  // Retrieve user data from session storage
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  const { firstname, lastname } = userData;

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const JobSeekerItems = [
    {
      title: "Web Developer Intern",
      jobType: "Remote",
      salary: "Salary",
      info: "Job Desription:Consumer Focus™ Marketing is seeking a Web Developer Intern to join their team. The intern will collaborate with the Web Developer and the marketing team to contribute to the development, editing, and troubleshooting of websites. This internship provides a hands-on opportunity for learning and applying web development skills in a marketing context, particularly within the energy industry.",
      // skill:{["react", "aws", "nodejs", "gcp", "express", "python"],
      skill: [
        {
          id: 1,
          name: "html",
        },
        {
          id: 2,
          name: "css",
        },
        {
          id: 3,
          name: "Javascript",
        },
      ],
    },
  ];

  return (
    <div>
      <nav className="bg-white fixed top-0 left-0 w-full border-b z-20">
        <div className="py-4 px-6 w-full flex items-center justify-between">
          <div className='flex items-center gap-8 className="ml-4"'>
            <img src="logo.png" className="w-24 h-auto" />
            <ul className="flex items-center gap-4">
              <li>
                <a href="#" className="ml-4">
                  Job{" "}
                </a>
                <FontAwesomeIcon className="ml-2 " icon={faAngleDown} />

                <a href="#" className="ml-4">
                  Report
                </a>
                <FontAwesomeIcon className="ml-2 " icon={faAngleDown} />

                <a href="#" className="ml-4">
                  Messaging
                </a>
                <FontAwesomeIcon className="ml-2 " icon={faAngleDown} />
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <input
                type="text"
                className="border p-2 w-full rounded-3xl"
                placeholder="Search..."
              />
            </div>
          </div>
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
      <div className="flex w-[100%] p-[5rem] px-4 gap-24">
        {/* Left Div */}
        <div className="w-[20rem]   h-[40rem]">
          <Link to="/jobseekerprofile">
            <div className="border ml-8 mt-8 rounded-2xl px-4 w-[15rem] h-auto text-center items-center">
              <img
                src="profile.png" // Replace with the actual path to your second image
                alt="Another Image"
                className="w-12 h-auto ml-20 mt-6 items-center"
              />
              <h2 className="text-2xl mb-[1rem]">{firstname} {lastname}</h2>
             
            </div>
          </Link>
          <div className="mt-9 w-[15rem] ml-7">
            <h2 className="font-semibold mr-[7rem] pb-6"> Jobs applied for</h2>
            <div className="w-[15rem] h-auto px-6 py-10 bg-white rounded-2xl border border-zinc-400 flex-col justify-start items-start gap-6 inline-flex">
              <div className="flex-col justify-start items-start gap-[41px] flex">
                <div className="flex-col justify-start items-start gap-1.5 flex">
                  <div className="text-black text-base font-normal font-['Inter']">
                    EdgeWater Solutions
                  </div>
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="text-black text-2xl font-semibold font-['Inter']">
                      Power BI Lead
                    </div>
                    <div className="text-black text-base font-medium font-['Inter']">
                      Columbia, SC
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-1 flex">
                  <div className="text-black text-base font-normal font-['Inter']">
                    Agama Solutions
                  </div>
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="text-black text-left text-2xl font-semibold font-['Inter']">
                      Power BI Developer
                    </div>
                    <div className="text-black text-base font-normal font-['Inter']">
                      United states
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-1.5 flex">
                  <div className="text-black text-base font-normal font-['Inter']">
                    KeyFactor, Inc
                  </div>
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="text-black text-2xl font-semibold font-['Inter']">
                      Project Manager
                    </div>
                    <div className="text-black text-base font-normal font-['Inter']">
                      Atlanta, GA
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 py-1 justify-center items-center gap-2 inline-flex">
                <div className="text-slate-500 text-opacity-50 text-sm font-semibold font-['Inter']">
                  See more
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Div */}
        <div className="flex-1 w-[50rem]">
          <div className="h-[66px] bg-neutral-100 rounded-lg justify-start items-center inline-flex mb-16">
            <div className="h-[66px] pl-6 py-2 justify-start items-center gap-16 flex">
              <div className="text-stone-400 text-2xl font-normal font-['Inter']">
                Role
              </div>
              <div className="w-6 h-6 relative" />
              <div className="w-[50px] h-[0px] origin-top-left rotate-90 border border-slate-400 mb-12"></div>
            </div>
            <div className="h-[66px] pl-6 py-2 justify-start items-center gap-16 flex">
              <div className="text-stone-400 text-2xl font-normal font-['Inter']">
                Location
              </div>
              <div className="w-6 h-6 relative" />
              <div className="w-[50px] h-[0px] origin-top-left rotate-90 border border-slate-400 mb-12"></div>
            </div>
            <div className="h-[45px] pl-6 py-2 justify-start items-center gap-16 flex">
              <div className="text-stone-400 text-2xl font-normal font-['Inter']">
                Type
              </div>
              <div className="w-6 h-6 relative"></div>
            </div>
            <div className="w-[74px] h-[66px] px-[25px] py-[21px] bg-slate-500 rounded-tr-lg rounded-br-lg justify-center items-center flex">
              <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                <FontAwesomeIcon icon={faSearch} className="text-white" />
              </div>
            </div>
          </div>
          <div>
            <Box
              className="tab-container"
              sx={{ borderBottom: 1, borderColor: "divider" }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Best Matches" />
                <Tab label="Most Recent" />
                <Tab label="Saved Jobs" />
                

              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Typography>
                <JobSeekerCard JobSeekerItems={JobSeekerItems} />
                <JobSeekerCard JobSeekerItems={JobSeekerItems} />
                <JobSeekerCard JobSeekerItems={JobSeekerItems} />
                <JobSeekerCard JobSeekerItems={JobSeekerItems} />


                {/* <JobSeekerCard
                  title="Web Developer Intern"
                  jobType="Remote"
                  salary="Salary"
                  info="Job Description: Consumer Focus™ Marketing is seeking a Web
                Developer Intern to join their team. The intern will collaborate
                with the Web Developer and the marketing team to contribute to the
                development, editing, and troubleshooting of websites. This
                internship provides a hands-on opportunity for learning and applying
                web development skills in a marketing context, particularly within
                the energy industry."
                  skill="Html"
                  skillTw="Css"
                  skillThr="Javascript"
                />
                <JobSeekerCard
                  title="Web Developer Intern"
                  jobType="Remote"
                  salary="Salary"
                  info="Job Description: Consumer Focus™ Marketing is seeking a Web
                Developer Intern to join their team. The intern will collaborate
                with the Web Developer and the marketing team to contribute to the
                development, editing, and troubleshooting of websites. This
                internship provides a hands-on opportunity for learning and applying
                web development skills in a marketing context, particularly within
                the energy industry."
                  skill="Html"
                  skillTw="Css"
                  skillThr="Javascript"
                />
                <JobSeekerCard
                  title="Web Developer Intern"
                  jobType="Remote"
                  salary="Salary"
                  info="Job Description: Consumer Focus™ Marketing is seeking a Web
                Developer Intern to join their team. The intern will collaborate
                with the Web Developer and the marketing team to contribute to the
                development, editing, and troubleshooting of websites. This
                internship provides a hands-on opportunity for learning and applying
                web development skills in a marketing context, particularly within
                the energy industry."
                  skill="Html"
                  skillTw="Css"
                  skillThr="Javascript"
                />
                <JobSeekerCard
                  title="Web Developer Intern"
                  jobType="Remote"
                  salary="Salary"
                  info="Job Description: Consumer Focus™ Marketing is seeking a Web
                Developer Intern to join their team. The intern will collaborate
                with the Web Developer and the marketing team to contribute to the
                development, editing, and troubleshooting of websites. This
                internship provides a hands-on opportunity for learning and applying
                web development skills in a marketing context, particularly within
                the energy industry."
                  skill="Html"
                  skillTw="Css"
                  skillThr="Javascript" */}
                {/* /> */}
              </Typography>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Typography>
                {/* <JobSeekerCard
                  title="Project Manager"
                  jobType="Remote"
                  salary="Salary"
                  info="We are seeking an experienced Project Manager to join our dynamic team and take on a crucial role in managing the tracking, reporting, and delivery of professional services packages within the eDiscovery and Data Forensics fields. The ideal candidate will possess strong project management skills, a deep understanding of eDiscovery and data forensics processes, and proficiency in utilizing tools such as Salesforce, Jira, and Confluence to streamline project workflows."
                  skill="Excellent Communication"
                  skillTw="Leadership Skills"
                  skillThr="Interpersonal Skills"
                /> */}
                <JobSeekerCard JobSeekerItems={JobSeekerItems} />
                <JobSeekerCard JobSeekerItems={JobSeekerItems} />
                <JobSeekerCard JobSeekerItems={JobSeekerItems} />
                <JobSeekerCard JobSeekerItems={JobSeekerItems} />

                {/* <JobSeekerCard
                  title="Project Manager"
                  jobType="Remote"
                  salary="Salary"
                  info="We are seeking an experienced Project Manager to join our dynamic team and take on a crucial role in managing the tracking, reporting, and delivery of professional services packages within the eDiscovery and Data Forensics fields. The ideal candidate will possess strong project management skills, a deep understanding of eDiscovery and data forensics processes, and proficiency in utilizing tools such as Salesforce, Jira, and Confluence to streamline project workflows."
                  skill="Excellent Communication"
                  skillTw="Leadership Skills"
                  skillThr="Interpersonal Skills"
                />
                <JobSeekerCard
                  title="Project Manager"
                  jobType="Remote"
                  salary="Salary"
                  info="We are seeking an experienced Project Manager to join our dynamic team and take on a crucial role in managing the tracking, reporting, and delivery of professional services packages within the eDiscovery and Data Forensics fields. The ideal candidate will possess strong project management skills, a deep understanding of eDiscovery and data forensics processes, and proficiency in utilizing tools such as Salesforce, Jira, and Confluence to streamline project workflows."
                  skill="Excellent Communication"
                  skillTw="Leadership Skills"
                  skillThr="Interpersonal Skills"
                /> */}
              </Typography>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <JobSeekerCard JobSeekerItems={JobSeekerItems} />
              <JobSeekerCard JobSeekerItems={JobSeekerItems} />
              <JobSeekerCard JobSeekerItems={JobSeekerItems} />
              <JobSeekerCard JobSeekerItems={JobSeekerItems} />


            </CustomTabPanel>
            
          </div>

          {/* <div className="w-[50rem] h-[1869px] flex-col justify-start items-start gap-8 inline-flex">
            <div className="text-black text-[32px] font-bold font-['Inter']">
              Jobs you might like
            </div>
            <div className="w-[50rem] h-[58px] py-1.5 bg-white flex-col justify-start items-center gap-1 flex">
              <div className="justify-start mr-[10rem] items-start gap-[67px] inline-flex">
                <div className="px-2 py-[5px] justify-center items-center gap-2 flex">
                  <div
                    className="text-black text-xl font-medium font-['Inter'] cursor-pointer"
                    onClick={() => updateToggle(1)}
                  >
                    Best Matches
                  </div>
                </div>
                <div className="px-2 py-[5px] justify-center items-center gap-2 flex">
                  <div
                    className="text-stone-400 text-xl font-normal font-['Inter'] cursor-pointer"
                    onClick={() => updateToggle(2)}
                  >
                    Most Recent
                  </div>
                </div>
                <div className="px-2 py-[5px] justify-center items-center gap-2 flex">
                  <div
                    className="text-stone-400 text-xl font-normal font-['Inter'] cursor-pointer"
                    onClick={() => updateToggle(3)}
                  >
                    Saved Projects
                  </div>
                </div>
              </div>

              <div className="w-[696.43px] h-1 relative">
                <div className="w-[696.06px] h-1 left-[0.37px] top-0 absolute bg-gray-200" />
                <div className="w-[152.41px] h-1 left-0 top-0 absolute bg-slate-500" />
              </div>
            </div>
            <div className={toggle === 1 ? "show-content" : "content"}>
              <div className="flex-col justify-start items-start pb-6 gap-2 flex">
                <div className="h-[316px] p-10 bg-white rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                  <div className="w-[50rem] justify-between items-start inline-flex">
                    <div className="justify-start items-center gap-10 flex">
                      <div className="text-slate-500 text-[27px] font-semibold font-['Inter']">
                        Web Developer Intern,
                      </div>
                      <div className="justify-start items-end gap-2 flex">
                        <div className="w-[18px] h-[18px] relative" />
                        <div className="text-black text-base font-normal font-['Inter']">
                          Remote
                        </div>
                      </div>
                      <div className="justify-start items-end gap-2 flex">
                        <div className="text-black text-base font-normal font-['Inter']">
                          Salary
                        </div>
                      </div>
                    </div>
                    <div className="justify-start items-start gap-4 flex">
                      <div className="w-6 h-6 relative" />
                      <div className="w-6 h-6 relative" />
                    </div>
                  </div>
                  <div className="w-[50rem] h-auto text-black text-left text-base font-normal font-['Inter'] leading-normal">
                    Job Description: Consumer Focus™ Marketing is seeking a Web
                    Developer Intern to join their team. The intern will
                    collaborate with the Web Developer and the marketing team to
                    contribute to the development, editing, and troubleshooting
                    of websites. This internship provides a hands-on opportunity
                    for learning and applying web development skills in a
                    marketing context, particularly within the energy industry.
                  </div>
                  <div className="w-[40rem] justify-between items-end inline-flex">
                    <div className="justify-start items-start gap-6 flex">
                      <div className="w-[55px] px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          Html
                        </div>
                      </div>
                      <div className="w-[49px] px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          Css
                        </div>
                      </div>
                      <div className="w-[92px] px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          Javascript
                        </div>
                      </div>
                    </div>
                    <Link to="/jobdetails">
                      <div className="px-2 py-1 justify-center items-center gap-2 flex">
                        <div className="text-slate-500 text-opacity-50 text-sm font-semibold font-['Inter']">
                          See more
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start pb-6 gap-2 flex">
                <div className="h-[316px] p-10 bg-white rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                  <div className="w-[50rem] justify-between items-start inline-flex">
                    <div className="justify-start items-center gap-10 flex">
                      <div className="text-slate-500 text-[27px] font-semibold font-['Inter']">
                        Web Developer Intern,
                      </div>
                      <div className="justify-start items-end gap-2 flex">
                        <div className="w-[18px] h-[18px] relative" />
                        <div className="text-black text-base font-normal font-['Inter']">
                          Remote
                        </div>
                      </div>
                      <div className="justify-start items-end gap-2 flex">
                        <div className="text-black text-base font-normal font-['Inter']">
                          Salary
                        </div>
                      </div>
                    </div>
                    <div className="justify-start items-start gap-4 flex">
                      <div className="w-6 h-6 relative" />
                      <div className="w-6 h-6 relative" />
                    </div>
                  </div>
                  <div className="w-[50rem] h-auto text-black text-base text-left font-normal font-['Inter'] leading-normal">
                    Job Description: Consumer Focus™ Marketing is seeking a Web
                    Developer Intern to join their team. The intern will
                    collaborate with the Web Developer and the marketing team to
                    contribute to the development, editing, and troubleshooting
                    of websites. This internship provides a hands-on opportunity
                    for learning and applying web development skills in a
                    marketing context, particularly within the energy industry.
                  </div>
                  <div className="w-[40rem] justify-between items-end inline-flex">
                    <div className="justify-start items-start gap-6 flex">
                      <div className="w-[55px] px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          Html
                        </div>
                      </div>
                      <div className="w-[49px] px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          Css
                        </div>
                      </div>
                      <div className="w-[92px] px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          Javascript
                        </div>
                      </div>
                    </div>
                    <div className="px-2 py-1 justify-center items-center gap-2 flex">
                      <div className="text-slate-500 text-opacity-50 text-sm font-semibold font-['Inter']">
                        See more
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start pb-6 gap-2 flex">
                <div className="h-[316px] p-10 bg-white rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                  <div className="w-[50rem] justify-between items-start inline-flex">
                    <div className="justify-start items-center gap-10 flex">
                      <div className="text-slate-500 text-[27px] font-semibold font-['Inter']">
                        Web Developer Intern,
                      </div>
                      <div className="justify-start items-end gap-2 flex">
                        <div className="w-[18px] h-[18px] relative" />
                        <div className="text-black text-base font-normal font-['Inter']">
                          Remote
                        </div>
                      </div>
                      <div className="justify-start items-end gap-2 flex">
                        <div className="text-black text-base font-normal font-['Inter']">
                          Salary
                        </div>
                      </div>
                    </div>
                    <div className="justify-start items-start gap-4 flex">
                      <div className="w-6 h-6 relative" />
                      <div className="w-6 h-6 relative" />
                    </div>
                  </div>
                  <div className="w-[50rem] h-auto text-black text-base text-left font-normal font-['Inter'] leading-normal">
                    Job Description: Consumer Focus™ Marketing is seeking a Web
                    Developer Intern to join their team. The intern will
                    collaborate with the Web Developer and the marketing team to
                    contribute to the development, editing, and troubleshooting
                    of websites. This internship provides a hands-on opportunity
                    for learning and applying web development skills in a
                    marketing context, particularly within the energy industry.
                  </div>
                  <div className="w-[40rem] justify-between items-end inline-flex">
                    <div className="justify-start items-start gap-6 flex">
                      <div className="w-[55px] px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          Html
                        </div>
                      </div>
                      <div className="w-[49px] px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          Css
                        </div>
                      </div>
                      <div className="w-[92px] px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          Javascript
                        </div>
                      </div>
                    </div>
                    <div className="px-2 py-1 justify-center items-center gap-2 flex">
                      <div className="text-slate-500 text-opacity-50 text-sm font-semibold font-['Inter']">
                        See more
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={toggle === 2 ? "show-content" : "content"}>
              <div className="flex-col justify-start items-start pb-6 gap-2 flex">
                <div className="h-[316px] p-10 bg-white rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                  <div className="w-[50rem] justify-between items-start inline-flex">
                    <div className="justify-start items-center gap-10 flex">
                      <div className="text-slate-500 text-[27px] font-semibold font-['Inter']">
                        Project Manager,
                      </div>
                      <div className="justify-start items-end gap-2 flex">
                        <div className="w-[18px] h-[18px] relative" />
                        <div className="text-black text-base font-normal font-['Inter']">
                          Remote
                        </div>
                      </div>
                      <div className="justify-start items-end gap-2 flex">
                        <div className="text-black text-base font-normal font-['Inter']">
                          Salary
                        </div>
                      </div>
                    </div>
                    <div className="justify-start items-start gap-4 flex">
                      <div className="w-6 h-6 relative" />
                      <div className="w-6 h-6 relative" />
                    </div>
                  </div>
                  <div className="w-[50rem] h-auto text-black text-base text-left font-normal font-['Inter'] leading-normal">
                    Job Description: Consumer Focus™ Marketing is seeking a Web
                    Developer Intern to join their team. The intern will
                    collaborate with the Web Developer and the marketing team to
                    contribute to the development, editing, and troubleshooting
                    of websites. This internship provides a hands-on opportunity
                    for learning and applying web development skills in a
                    marketing context, particularly within the energy industry.
                  </div>
                  <div className="w-[40rem] justify-between items-end inline-flex">
                    <div className="justify-start items-start gap-4 flex">
                      <div className="w-auto px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          Excellent Communication
                        </div>
                      </div>
                      <div className="w-auto px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          Leadership skills
                        </div>
                      </div>
                      <div className="w-auto px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          Interpersonal skills
                        </div>
                      </div>
                    </div>
                    <div className="px-2 py-1 justify-center items-center gap-6 -ml-12 flex">
                      <div className="text-slate-500 text-opacity-50 text-sm font-semibold font-['Inter']">
                        See more
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start pb-6 gap-2 flex">
                <div className="h-[316px] p-10 bg-white rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                  <div className="w-[50rem] justify-between items-start inline-flex">
                    <div className="justify-start items-center gap-10 flex">
                      <div className="text-slate-500 text-[27px] font-semibold font-['Inter']">
                        Project Manager,
                      </div>
                      <div className="justify-start items-end gap-2 flex">
                        <div className="w-[18px] h-[18px] relative" />
                        <div className="text-black text-base font-normal font-['Inter']">
                          Remote
                        </div>
                      </div>
                      <div className="justify-start items-end gap-2 flex">
                        <div className="text-black text-base font-normal font-['Inter']">
                          Salary
                        </div>
                      </div>
                    </div>
                    <div className="justify-start items-start gap-4 flex">
                      <div className="w-6 h-6 relative" />
                      <div className="w-6 h-6 relative" />
                    </div>
                  </div>
                  <div className="w-[50rem] h-auto text-black text-base text-left font-normal font-['Inter'] leading-normal">
                    Job Description: Consumer Focus™ Marketing is seeking a Web
                    Developer Intern to join their team. The intern will
                    collaborate with the Web Developer and the marketing team to
                    contribute to the development, editing, and troubleshooting
                    of websites. This internship provides a hands-on opportunity
                    for learning and applying web development skills in a
                    marketing context, particularly within the energy industry.
                  </div>
                  <div className="w-[40rem] justify-between items-end inline-flex">
                    <div className="justify-start items-start gap-4 flex">
                      <div className="w-auto px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          Excellent Communication
                        </div>
                      </div>
                      <div className="w-auto px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          Leadership skills
                        </div>
                      </div>
                      <div className="w-auto px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          Interpersonal skills
                        </div>
                      </div>
                    </div>
                    <div className="px-2 py-1 justify-center items-center gap-6 -ml-12 flex">
                      <div className="text-slate-500 text-opacity-50 text-sm font-semibold font-['Inter']">
                        See more
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start pb-6 gap-2 flex">
                <div className="h-[316px] p-10 bg-white rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                  <div className="w-[50rem] justify-between items-start inline-flex">
                    <div className="justify-start items-center gap-10 flex">
                      <div className="text-slate-500 text-[27px] font-semibold font-['Inter']">
                        Project Manager,
                      </div>
                      <div className="justify-start items-end gap-2 flex">
                        <div className="w-[18px] h-[18px] relative" />
                        <div className="text-black text-base font-normal font-['Inter']">
                          Remote
                        </div>
                      </div>
                      <div className="justify-start items-end gap-2 flex">
                        <div className="text-black text-base font-normal font-['Inter']">
                          Salary
                        </div>
                      </div>
                    </div>
                    <div className="justify-start items-start gap-4 flex">
                      <div className="w-6 h-6 relative" />
                      <div className="w-6 h-6 relative" />
                    </div>
                  </div>
                  <div className="w-[50rem] h-auto text-black text-base text-left font-normal font-['Inter'] leading-normal">
                    Job Description: Consumer Focus™ Marketing is seeking a Web
                    Developer Intern to join their team. The intern will
                    collaborate with the Web Developer and the marketing team to
                    contribute to the development, editing, and troubleshooting
                    of websites. This internship provides a hands-on opportunity
                    for learning and applying web development skills in a
                    marketing context, particularly within the energy industry.
                  </div>
                  <div className="w-[40rem] justify-between items-end inline-flex">
                    <div className="justify-start items-start gap-4 flex">
                      <div className="w-auto px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          Excellent Communication
                        </div>
                      </div>
                      <div className="w-auto px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          Leadership skills
                        </div>
                      </div>
                      <div className="w-auto px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          Interpersonal skills
                        </div>
                      </div>
                    </div>
                    <div className="px-2 py-1 justify-center items-center gap-6 -ml-12 flex">
                      <div className="text-slate-500 text-opacity-50 text-sm font-semibold font-['Inter']">
                        See more
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={toggle === 3 ? "show-content" : "content"}>
              <div className="flex-col justify-start items-start pb-6 gap-2 flex">
                <div className="h-[316px] p-10 bg-white rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                  <div className="w-[50rem] justify-between items-start inline-flex">
                    <div className="justify-start items-center gap-10 flex">
                      <div className="text-slate-500 text-[27px] font-semibold font-['Inter']">
                        Power BI Reporting Analyst,
                      </div>
                      <div className="justify-start items-end gap-2 flex">
                        <div className="w-[18px] h-[18px] relative" />
                        <div className="text-black text-base font-normal font-['Inter']">
                          Remote
                        </div>
                      </div>
                      <div className="justify-start items-end gap-2 flex">
                        <div className="text-black text-base font-normal font-['Inter']">
                          Salary
                        </div>
                      </div>
                    </div>
                    <div className="justify-start items-start gap-4 flex">
                      <div className="w-6 h-6 relative" />
                      <div className="w-6 h-6 relative" />
                    </div>
                  </div>
                  <div className="w-[50rem] h-auto text-black text-base text-left font-normal font-['Inter'] leading-normal">
                    Job Description: Consumer Focus™ Marketing is seeking a Web
                    Developer Intern to join their team. The intern will
                    collaborate with the Web Developer and the marketing team to
                    contribute to the development, editing, and troubleshooting
                    of websites.{" "}
                  </div>
                  <div className="w-[40rem] justify-between items-end inline-flex">
                    <div className="justify-start items-start gap-4 flex">
                      <div className="w-auto px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          Power BI proficiency
                        </div>
                      </div>
                      <div className="w-auto px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          {" "}
                          Data modelling
                        </div>
                      </div>
                      <div className="w-auto px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          {" "}
                          Data transformation
                        </div>
                      </div>
                    </div>
                    <div className="px-2 py-1 justify-center items-center gap-6 -ml-12 flex">
                      <div className="text-slate-500 text-opacity-50 text-sm font-semibold font-['Inter']">
                        See more
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start pb-6 gap-2 flex">
                <div className="h-[316px] p-10 bg-white rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                  <div className="w-[50rem] justify-between items-start inline-flex">
                    <div className="justify-start items-center gap-10 flex">
                      <div className="text-slate-500 text-[27px] font-semibold font-['Inter']">
                        Power BI Reporting Analyst,
                      </div>
                      <div className="justify-start items-end gap-2 flex">
                        <div className="w-[18px] h-[18px] relative" />
                        <div className="text-black text-base font-normal font-['Inter']">
                          Remote
                        </div>
                      </div>
                      <div className="justify-start items-end gap-2 flex">
                        <div className="text-black text-base font-normal font-['Inter']">
                          Salary
                        </div>
                      </div>
                    </div>
                    <div className="justify-start items-start gap-4 flex">
                      <div className="w-6 h-6 relative" />
                      <div className="w-6 h-6 relative" />
                    </div>
                  </div>
                  <div className="w-[50rem] h-auto text-black text-base text-left font-normal font-['Inter'] leading-normal">
                    Job Description: Consumer Focus™ Marketing is seeking a Web
                    Developer Intern to join their team. The intern will
                    collaborate with the Web Developer and the marketing team to
                    contribute to the development, editing, and troubleshooting
                    of websites.{" "}
                  </div>
                  <div className="w-[40rem] justify-between items-end inline-flex">
                    <div className="justify-start items-start gap-4 flex">
                      <div className="w-auto px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          Power BI proficiency
                        </div>
                      </div>
                      <div className="w-auto px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          {" "}
                          Data modelling
                        </div>
                      </div>
                      <div className="w-auto px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          {" "}
                          Data transformation
                        </div>
                      </div>
                    </div>
                    <div className="px-2 py-1 justify-center items-center gap-6 -ml-12 flex">
                      <div className="text-slate-500 text-opacity-50 text-sm font-semibold font-['Inter']">
                        See more
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start pb-6 gap-2 flex">
                <div className="h-[316px] p-10 bg-white rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                  <div className="w-[50rem] justify-between items-start inline-flex">
                    <div className="justify-start items-center gap-10 flex">
                      <div className="text-slate-500 text-[27px] font-semibold font-['Inter']">
                        Power BI Reporting Analyst,
                      </div>
                      <div className="justify-start items-end gap-2 flex">
                        <div className="w-[18px] h-[18px] relative" />
                        <div className="text-black text-base font-normal font-['Inter']">
                          Remote
                        </div>
                      </div>
                      <div className="justify-start items-end gap-2 flex">
                        <div className="text-black text-base font-normal font-['Inter']">
                          Salary
                        </div>
                      </div>
                    </div>
                    <div className="justify-start items-start gap-4 flex">
                      <div className="w-6 h-6 relative" />
                      <div className="w-6 h-6 relative" />
                    </div>
                  </div>
                  <div className="w-[50rem] h-auto text-black text-base text-left font-normal font-['Inter'] leading-normal">
                    Job Description: Consumer Focus™ Marketing is seeking a Web
                    Developer Intern to join their team. The intern will
                    collaborate with the Web Developer and the marketing team to
                    contribute to the development, editing, and troubleshooting
                    of websites.{" "}
                  </div>
                  <div className="w-[40rem] justify-between items-end inline-flex">
                    <div className="justify-start items-start gap-4 flex">
                      <div className="w-auto px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          Power BI proficiency
                        </div>
                      </div>
                      <div className="w-auto px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          {" "}
                          Data modelling
                        </div>
                      </div>
                      <div className="w-auto px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
                        <div className="text-black text-sm font-normal font-['Inter']">
                          {" "}
                          Data transformation
                        </div>
                      </div>
                    </div>
                    <div className="px-2 py-1 justify-center items-center gap-6 -ml-12 flex">
                      <div className="text-slate-500 text-opacity-50 text-sm font-semibold font-['Inter']">
                        See more
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={toggle === 4 ? "show-content" : "content"}>
              <div>Bided Project</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      // aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
export default JobseekerDashboard;
