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
import "./live.css"

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
    <div className="flex flex-col lg:flex-row w-full lg:w-[100%] p-8 lg:p-32 lg:px-14 gap-8 lg:gap-20">
      <div className="w-full lg:w-[20rem] mt-10 lg:mt-1 h-auto lg:h-[40rem]">
        <Link to="/businessprofile">
          <div className="border ml-0 lg:ml-7 mt-8 rounded-2xl px-4 w-full lg:w-[15rem] h-auto items-center">
            <img
              src="profile.png" // Replace with the actual path to your second image
              alt="Another Image"
              className="w-12 h-auto mx-auto lg:ml-[5rem] mt-6"
            />
            <h6 className="mb-4 lg:mb-12 text-center lg:ml-10">Ascentree services</h6>
          </div>
        </Link>
        
        <Link to="/businessdashboard">
          <button className="w-full lg:w-auto px-4 lg:px-14 py-2 ml-0 lg:ml-2 mt-6 bg-[#5d6aa8] text-white font-bold rounded-full hover:bg-white hover:text-[#5d6aa8] hover:border-[#5d6aa8] hover:border">
            Back to Posted Projects
          </button>
        </Link>

        <div className="mt-9 w-full lg:w-[15rem] ml-0 lg:ml-7">
          <div className="w-full lg:w-[15rem] h-auto px-6 py-10 bg-white rounded-2xl text-left border border-zinc-400 flex-col justify-start items-start gap-6 inline-flex">
            <p>a service charge of $20 is required to bid for a project.</p>
            <span className="text-[#5d6aa8] text-left text-sm">
              see more...
            </span>
          </div>
        </div>
        </div>
        <div className="w-[50rem] h-auto flex-col justify-start items-start gap-8 inline-flex">
          <div className="w-full sm:w-[30rem] md:w-[35rem] lg:w-[40rem]">
  <input
    className="border-3 bg-[#F6F6F6] border w-[20rem] lg:w-[40rem] px-3 sm:px-4 lg:px-10 rounded-2xl h-[2.5rem] sm:h-[3rem] lg:h-[4rem]"
    type="text"
    placeholder="Search for Projects"
  />
</div>

          <div>
            <h1 className="text-3xl font-bold">Projects you might like</h1>
          </div>
          <Box sx={{ width: "100%" }}>
      <Box className="tab-container" sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="responsive tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab className="capitalize" label="Best Matches" />
          <Tab label="Most Recent" />
          <Tab label="Saved Projects" />
          <Tab label="Bided Projects" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography>
          <LiveProjectCard
            projectName={"Adaptive Soft Robotic Limb for Rehabilitation Assistance"}
            stateCountry={"Lagos, Nigeria"}
            scope={"Open to only Local Businesses"}
            companyName={"Edgewater solutions"}
            location={"Columbia SC"}
            bidLimit={"*this bid has a limit of $5,000.00"}
          />
          <ProjectCard
            projectName={"AI augmented renewable energy"}
            companyName={"Agama solutions"}
            location={"United states"}
          />
          <ProjectCard
            projectName={"Weather forecasting system"}
            companyName={"KeyFactor Inc"}
            location={"Atlanta GC"}
          />
          <ProjectCard
            projectName={"Data Leakage detection system"}
            companyName={"Pheonix services"}
            location={"San Jose"}
          />
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography>
          <ProjectCard
            projectName={"AI augmented renewable energy"}
            companyName={"Agama solutions"}
            location={"United states"}
          />
          <ProjectCard
            projectName={"Programmable soft robotics"}
            companyName={"Edgewater solutions"}
            location={"Columbia SC"}
          />
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography>
          <ProjectCardSaved
            projectName={"AI augmented renewable energy"}
            companyName={"Agama solutions"}
            location={"United states"}
          />
          <ProjectCardSaved
            projectName={"Weather forecasting system"}
            companyName={"KeyFactor Inc"}
            location={"Atlanta GC"}
          />
          <ProjectCardSaved
            projectName={"Data Leakage detection system"}
            companyName={"Pheonix services"}
            location={"San Jose"}
          />
          <ProjectCardSaved
            projectName={"Data Leakage detection system"}
            companyName={"Pheonix services"}
            location={"San Jose"}
          />
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Typography>
          <ProjectCardSaved
            projectName={"Programmable soft robotics"}
            companyName={"Edgewater solutions"}
            location={"Columbia SC"}
          />
          <ProjectCardSaved
            projectName={"AI augmented renewable energy"}
            companyName={"Agama solutions"}
            location={"United states"}
          />
          <ProjectCardSaved
            projectName={"Weather forecasting system"}
            companyName={"KeyFactor Inc"}
            location={"Atlanta GC"}
          />
          <ProjectCardSaved
            projectName={"Data Leakage detection system"}
            companyName={"Pheonix services"}
            location={"San Jose"}
          />
        </Typography>
      </CustomTabPanel>
    </Box>
  
  
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
