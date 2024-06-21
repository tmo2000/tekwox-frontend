import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LiveProjectCard from "../component/LiveProjectCard";
import ProjectCard from "../component/ProjectCard";
import ProjectCardSaved from "../component/ProjectCardSaved";

export const listedProjects = () => {
  // const [toggle, setToggle] = useState(1);
  // function updateToggle(id) {
  //   setToggle(id);
  // }
    const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="overflow-x-hidden">
      <nav className="bg-white z-20 fixed top-0 left-0 w-full border-b">
        <div className="py-4 px-6 w-full flex items-center justify-between">
          <div className='flex items-center gap-8 className="ml-4"'>
            <img src="logo.png" className="w-24 h-auto" />
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
      <div className="flex w-[100%] p-32 px-14 gap-20">
        <div className="w-[20rem]   h-[40rem]">
          <Link to="/businessprofile">
          <div className="border ml-7 mt-8 rounded-2xl px-4 w-[15rem] h-auto items-center">
            <img
              src="profile.png" // Replace with the actual path to your second image
              alt="Another Image"
              className="w-12 h-auto ml-20 mt-6 items-center"
            />
            <h6 className="mb-12">Ascentree services</h6>
          </div>
          </Link>
          
          <Link to="/businessdashboard">
            <button className="px-14 py-2 ml-6 mt-6 bg-[#5d6aa8] text-white font-bold rounded-full hover:bg-white hover:text-[#5d6aa8] hover:border-[#5d6aa8] hover:border">
              Back to Posted Projects
            </button>
          </Link>

          <div className="mt-9 w-[15rem] ml-7">
            <div className="w-[15rem] h-auto px-6 py-10 bg-white rounded-2xl text-left border border-zinc-400 flex-col justify-start items-start gap-6 inline-flex">
              <p>a service charge of $20 is required to bid for a project.</p>
              <span className="text-[#5d6aa8] text-left text-sm">
                see more...
              </span>
            </div>
          </div>
        </div>
        <div className="w-[50rem] h-auto flex-col justify-start items-start gap-8 inline-flex">
          <div className="w-[40rem]">
            <input
              className="border-3 bg-[#F6F6F6] border w-[100%] px-10 rounded-2xl h-[4rem]"
              type="text"
              placeholder="Search for Projects"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Projects you might like</h1>
          </div>
            <Box
              className="tab-container"
              sx={{ borderBottom: 1, borderColor: "divider" }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab className="capitalize" label="Best Matches" />
                <Tab label="Most Recent" />
                <Tab label="Saved Projects" />
                <Tab label="Bided Projects" />

                

              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Typography>
                <LiveProjectCard projectName={"Adaptive Soft Robotic Limb for Rehabilitation Assistance"} stateCountry={"Lagos, Nigeria"}
                scope={"Open to only Local Businesses"} companyName={"Edgewater solutions"} Location={"Columbia SC"} bidLimit={"*this bid has a limit of $5,000.00 "}/>
                <ProjectCard projectName={"AI augmented renewable energy"} companyName={"Agama solutions"} Location={"United states"}/>
                <ProjectCard projectName={"Weather forecasting system"} companyName={"KeyFactor Inc"} Location={"Atlanta GC"}/>
                <ProjectCard projectName={"Data Leakage detection system"} companyName={"Pheonix services"} Location={"San Jose"}/>
              </Typography>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={1}>
              <Typography>
                <ProjectCard projectName={"AI augmented renewable energy"} companyName={"Agama solutions"} Location={"United states"}/>
                <ProjectCard projectName={"Programmable soft robotics"} companyName={"Edgewater solutions"} Location={"Columbia SC"}/>
              </Typography>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={2}>
              <Typography>
                <ProjectCardSaved projectName={"AI augmented renewable energy"} companyName={"Agama solutions"} Location={"United states"}/>
                <ProjectCardSaved projectName={"Weather forecasting system"} companyName={"KeyFactor Inc"} Location={"Atlanta GC"}/>
                <ProjectCardSaved projectName={"Data Leakage detection system"} companyName={"Pheonix services"} Location={"San Jose"}/>
                <ProjectCardSaved projectName={"Data Leakage detection system"} companyName={"Pheonix services"} Location={"San Jose"}/>

              </Typography>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={3}>
              <Typography>
                <ProjectCardSaved projectName={"Programmable soft robotics"} companyName={"Edgewater solutions"} Location={"Columbia SC"}/>
                <ProjectCardSaved projectName={"AI augmented renewable energy"} companyName={"Agama solutions"} Location={"United states"}/>
                <ProjectCardSaved projectName={"Weather forecasting system"} companyName={"KeyFactor Inc"} Location={"Atlanta GC"}/>
                <ProjectCardSaved projectName={"Data Leakage detection system"} companyName={"Pheonix services"} Location={"San Jose"}/>

              </Typography>
              </CustomTabPanel>
          {/* <div className="justify-start mr-[36rem] mb-8 items-start gap-[50px] inline-flex">
            <div className="px-2 py-[5px] justify-center items-center gap-2 flex">
              <div
                className="text-black text-xl whitespace-nowrap  font-medium font-['Inter'] cursor-pointer"
                onClick={() => updateToggle(1)}
              >
                Best Matches
              </div>
            </div>
            <div className="px-2 py-[5px] justify-center items-center gap-2 flex">
              <div
                className="text-black text-xl whitespace-nowrap  font-medium font-['Inter'] cursor-pointer"
                onClick={() => updateToggle(2)}
              >
                Most Recent
              </div>
            </div>
            <div className="px-2 py-[5px] justify-center items-center gap-2 flex">
              <div
                className="text-black text-xl whitespace-nowrap font-medium font-['Inter'] cursor-pointer"
                onClick={() => updateToggle(3)}
              >
                Saved Projects
              </div>
            </div>
            <div className="px-2 py-[5px] justify-center items-center gap-2 flex">
              <div
                className="text-black text-xl whitespace-nowrap font-medium font-['Inter'] cursor-pointer"
                onClick={() => updateToggle(4)}
              >
                Bided Projects
              </div>
            </div>
          </div> */}
          {/* <div className={toggle === 1 ? "show-content" : "content"}>
            <div className="flex-col justify-start text-left items-start gap-2 flex">
              <div className="h-[316px] p-10 bg-white mb-[2rem] rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                <div className="w-[50rem] justify-between items-start inline-flex">
                  <div className="justify-start items-center gap-[32rem] flex">
                    <div className="justify-start items-end gap-[10rem] flex text-slate-500 text-[27px] font-semibold font-['Inter']">
                      <div className="text-black text-base font-normal font-['Inter']">
                        Adaptive Soft Robotic Limb for Rehabilitation Assistance{" "}
                        <br />
                        <div className="flex mt-3 gap-7">
                          <div>Lagos, Nigeria</div>
                          <div> Open to only Local Businesses</div>
                          <div>Bid Limit</div>
                          <div>Live Project</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="w-[50rem] h-auto text-black text-left text-base font-normal font-['Inter'] leading-normal">
                  Edgewater solutions <br />{" "}
                  <span className="mb-5"> Columbia SC</span>
                  <p className="text-[#938E8E]">
                    *this bid has a limit of $5,000.00
                  </p>
                </div>
                <div className="w-[40rem] justify-between items-end inline-flex">
                  <div className="flex gap-5">
                    <Link to="/listedprojectdetails">
                      <button
                        type="button"
                        className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full "
                      >
                        View Project
                      </button>
                    </Link>

                    <button
                      type="button"
                      className="bg-[#F2AB39] hover:bg-blue-700 text-black font-bold py-1 px-8 rounded-full "
                    >
                      Save Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <LiveProjectCard/>
            <div className="flex-col justify-start text-left items-start gap-2 flex">
              <div className="h-[316px] p-10 bg-white mb-[2rem] rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                <div className="w-[50rem] justify-between items-start inline-flex">
                  <div className="justify-start items-center gap-[32rem] flex">
                    <div className="justify-start items-end gap-[10rem] flex text-slate-500 text-[27px] font-semibold font-['Inter']">
                      <div className="text-black text-base font-normal font-['Inter']">
                        AI augmented renewable energy
                      </div>
                    </div>
                  </div>

                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="w-[50rem] h-auto text-black text-left text-base font-normal font-['Inter'] leading-normal">
                  Agama solutions <br />{" "}
                  <span className="mb-5"> United states</span>
                </div>
                <div className="w-[40rem] justify-between items-end inline-flex">
                  <div className="flex gap-5">
                    <button
                      type="button"
                      className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full "
                    >
                      View Project
                    </button>
                    <button
                      type="button"
                      className="bg-[#F2AB39] hover:bg-blue-700 text-black font-bold py-1 px-8 rounded-full "
                    >
                      Save Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start text-left items-start gap-2 flex">
              <div className="h-[316px] p-10 bg-white mb-[2rem] rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                <div className="w-[50rem] justify-between items-start inline-flex">
                  <div className="justify-start items-center gap-[32rem] flex">
                    <div className="justify-start items-end gap-[10rem] flex text-slate-500 text-[27px] font-semibold font-['Inter']">
                      <div className="text-black text-base font-normal font-['Inter']">
                        Weather forecasting system
                      </div>
                    </div>
                  </div>

                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="w-[50rem] h-auto text-black text-left text-base font-normal font-['Inter'] leading-normal">
                  KeyFactor Inc <br /> <span className="mb-5"> Atlanta GC</span>
                </div>
                <div className="w-[40rem] justify-between items-end inline-flex">
                  <div className="flex gap-5">
                    <button
                      type="button"
                      className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full "
                    >
                      View Project
                    </button>
                    <button
                      type="button"
                      className="bg-[#F2AB39] hover:bg-blue-700 text-black font-bold py-1 px-8 rounded-full "
                    >
                      Save Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className={toggle === 2 ? "show-content" : "content"}>
            <div className="flex-col justify-start text-left items-start gap-2 flex">
              <div className="h-[316px] p-10 bg-white mb-[2rem] rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                <div className="w-[50rem] justify-between items-start inline-flex">
                  <div className="justify-start items-center gap-[32rem] flex">
                    <div className="justify-start items-end gap-[10rem] flex text-slate-500 text-[27px] font-semibold font-['Inter']">
                      <div className="text-black text-base font-normal font-['Inter']">
                        AI augmented renewable energy
                      </div>
                    </div>
                  </div>

                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="w-[50rem] h-auto text-black text-left text-base font-normal font-['Inter'] leading-normal">
                  Agama solutions <br />{" "}
                  <span className="mb-5"> United states</span>
                </div>
                <div className="w-[40rem] justify-between items-end inline-flex">
                  <div className="flex gap-5">
                    <button
                      type="button"
                      className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full "
                    >
                      View Project
                    </button>
                    <button
                      type="button"
                      className="bg-[#F2AB39] hover:bg-blue-700 text-black font-bold py-1 px-8 rounded-full "
                    >
                      Save Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start text-left items-start gap-2 flex">
              <div className="h-[316px] p-10 bg-white mb-[2rem] rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                <div className="w-[50rem] justify-between items-start inline-flex">
                  <div className="justify-start items-center gap-[32rem] flex">
                    <div className="justify-start items-end gap-[10rem] flex text-slate-500 text-[27px] font-semibold font-['Inter']">
                      <div className="text-black text-base font-normal font-['Inter']">
                        Programmable soft robotics
                      </div>
                    </div>
                  </div>

                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="w-[50rem] h-auto text-black text-left text-base font-normal font-['Inter'] leading-normal">
                  Edgewater solutions <br />{" "}
                  <span className="mb-5"> Columbia SC</span>
                </div>
                <div className="w-[40rem] justify-between items-end inline-flex">
                  <div className="flex gap-5">
                    <button
                      type="button"
                      className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full "
                    >
                      View Project
                    </button>
                    <button
                      type="button"
                      className="bg-[#F2AB39] hover:bg-blue-700 text-black font-bold py-1 px-8 rounded-full "
                    >
                      Save Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className={toggle === 3 ? "show-content" : "content"}>
            <div className="flex-col justify-start text-left items-start gap-2 flex">
              <div className="h-[316px] p-10 bg-white mb-[2rem] rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                <div className="w-[50rem] justify-between items-start inline-flex">
                  <div className="justify-start items-center gap-[32rem] flex">
                    <div className="justify-start items-end gap-[10rem] flex text-slate-500 text-[27px] font-semibold font-['Inter']">
                      <div className="text-black text-base font-normal font-['Inter']">
                        AI augmented renewable energy
                      </div>
                    </div>
                  </div>

                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="w-[50rem] h-auto text-black text-left text-base font-normal font-['Inter'] leading-normal">
                  Agama solutions <br />{" "}
                  <span className="mb-5"> United states</span>
                </div>
                <div className="w-[40rem] justify-between items-end inline-flex">
                  <div className="flex gap-5">
                    <button
                      type="button"
                      className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full "
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start text-left items-start gap-2 flex">
              <div className="h-[316px] p-10 bg-white mb-[2rem] rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                <div className="w-[50rem] justify-between items-start inline-flex">
                  <div className="justify-start items-center gap-[32rem] flex">
                    <div className="justify-start items-end gap-[10rem] flex text-slate-500 text-[27px] font-semibold font-['Inter']">
                      <div className="text-black text-base font-normal font-['Inter']">
                        Weather forecasting system
                      </div>
                    </div>
                  </div>

                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="w-[50rem] h-auto text-black text-left text-base font-normal font-['Inter'] leading-normal">
                  KeyFactor Inc <br /> <span className="mb-5"> Atlanta GC</span>
                </div>
                <div className="w-[40rem] justify-between items-end inline-flex">
                  <div className="flex gap-5">
                    <button
                      type="button"
                      className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full "
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start text-left items-start gap-2 flex">
              <div className="h-[316px] p-10 bg-white mb-[2rem] rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                <div className="w-[50rem] justify-between items-start inline-flex">
                  <div className="justify-start items-center gap-[32rem] flex">
                    <div className="justify-start items-end gap-[10rem] flex text-slate-500 text-[27px] font-semibold font-['Inter']">
                      <div className="text-black text-base font-normal font-['Inter']">
                        Data Leakage detection system
                      </div>
                    </div>
                  </div>

                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="w-[50rem] h-auto text-black text-left text-base font-normal font-['Inter'] leading-normal">
                  Pheonix services <br />{" "}
                  <span className="mb-5"> San Jose</span>
                </div>
                <div className="w-[40rem] justify-between items-end inline-flex">
                  <div className="flex gap-5">
                    <button
                      type="button"
                      className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full "
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start text-left items-start gap-2 flex">
              <div className="h-[316px] p-10 bg-white mb-[2rem] rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                <div className="w-[50rem] justify-between items-start inline-flex">
                  <div className="justify-start items-center gap-[32rem] flex">
                    <div className="justify-start items-end gap-[10rem] flex text-slate-500 text-[27px] font-semibold font-['Inter']">
                      <div className="text-black text-base font-normal font-['Inter']">
                        Data Leakage detection system
                      </div>
                    </div>
                  </div>

                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="w-[50rem] h-auto text-black text-left text-base font-normal font-['Inter'] leading-normal">
                  Pheonix services <br />{" "}
                  <span className="mb-5"> San Jose</span>
                </div>
                <div className="w-[40rem] justify-between items-end inline-flex">
                  <div className="flex gap-5">
                    <button
                      type="button"
                      className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full "
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className={toggle === 4 ? "show-content" : "content"}>
            <div className="flex-col justify-start text-left items-start gap-2 flex">
              <div className="h-[316px] p-10 bg-white mb-[2rem] rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                <div className="w-[50rem] justify-between items-start inline-flex">
                  <div className="justify-start items-center gap-[32rem] flex">
                    <div className="justify-start items-end gap-[10rem] flex text-slate-500 text-[27px] font-semibold font-['Inter']">
                      <div className="text-black text-base font-normal font-['Inter']">
                        Programmable soft robotics
                      </div>
                    </div>
                  </div>

                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="w-[50rem] h-auto text-black text-left text-base font-normal font-['Inter'] leading-normal">
                  Edgewater solutions <br />{" "}
                  <span className="mb-5">Columbia SC</span>
                </div>
                <div className="w-[40rem] justify-between items-end inline-flex">
                  <div className="flex gap-5">
                    <button
                      type="button"
                      className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full "
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start text-left items-start gap-2 flex">
              <div className="h-[316px] p-10 bg-white mb-[2rem] rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                <div className="w-[50rem] justify-between items-start inline-flex">
                  <div className="justify-start items-center gap-[32rem] flex">
                    <div className="justify-start items-end gap-[10rem] flex text-slate-500 text-[27px] font-semibold font-['Inter']">
                      <div className="text-black text-base font-normal font-['Inter']">
                        Weather forecasting system
                      </div>
                    </div>
                  </div>

                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="w-[50rem] h-auto text-black text-left text-base font-normal font-['Inter'] leading-normal">
                  KeyFactor Inc <br /> <span className="mb-5"> Atlanta GC</span>
                </div>
                <div className="w-[40rem] justify-between items-end inline-flex">
                  <div className="flex gap-5">
                    <button
                      type="button"
                      className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full "
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start text-left items-start gap-2 flex">
              <div className="h-[316px] p-10 bg-white mb-[2rem] rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                <div className="w-[50rem] justify-between items-start inline-flex">
                  <div className="justify-start items-center gap-[32rem] flex">
                    <div className="justify-start items-end gap-[10rem] flex text-slate-500 text-[27px] font-semibold font-['Inter']">
                      <div className="text-black text-base font-normal font-['Inter']">
                        Data Leakage detection system
                      </div>
                    </div>
                  </div>

                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="w-[50rem] h-auto text-black text-left text-base font-normal font-['Inter'] leading-normal">
                  Pheonix services <br />{" "}
                  <span className="mb-5"> San Jose</span>
                </div>
                <div className="w-[40rem] justify-between items-end inline-flex">
                  <div className="flex gap-5">
                    <button
                      type="button"
                      className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full "
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start text-left items-start gap-2 flex">
              <div className="h-[316px] p-10 bg-white mb-[2rem] rounded-[20px] border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-12 flex">
                <div className="w-[50rem] justify-between items-start inline-flex">
                  <div className="justify-start items-center gap-[32rem] flex">
                    <div className="justify-start items-end gap-[10rem] flex text-slate-500 text-[27px] font-semibold font-['Inter']">
                      <div className="text-black text-base font-normal font-['Inter']">
                        Data Leakage detection system
                      </div>
                    </div>
                  </div>

                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="w-[50rem] h-auto text-black text-left text-base font-normal font-['Inter'] leading-normal">
                  Pheonix services <br />{" "}
                  <span className="mb-5"> San Jose</span>
                </div>
                <div className="w-[40rem] justify-between items-end inline-flex">
                  <div className="flex gap-5">
                    <button
                      type="button"
                      className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full "
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
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

export default listedProjects;
