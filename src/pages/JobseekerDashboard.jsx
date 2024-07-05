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
import Navigation from "../component/Navigation";
import SearchBar from "../component/SearchBar";
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
      <Navigation/>
    
 
      <div className="flex lg:flex-row flex-col w-[100%] p-[5rem] px-4 gap-24">
        
      <div className="flex justify-center">
  <div className="w-full lg:w-[20rem] lg:h-[40rem] lg:ml-5 flex flex-col lg:flex-row lg:block items-center gap-4 lg:gap-0">
    <Link to="/jobseekerprofile" className="w-full lg:w-auto">
      <div className="border mt-8 rounded-2xl px-4 w-full lg:w-[15rem] h-auto text-center items-center">
        <img
          src="profile.png" 
          alt="Another Image"
          className="w-12 h-auto mx-auto mt-6"
        />
        <h2 className="text-xl lg:text-2xl mb-4 lg:mb-[1rem]">{firstname} {lastname}</h2>
      </div>
    </Link>
    <div className="mt-9 w-full lg:w-[15rem]">
      <h2 className="font-semibold pb-6">Jobs applied for</h2>
      <div className="w-full lg:w-[15rem] h-auto px-4 lg:px-6 py-6 lg:py-10 bg-white rounded-2xl border border-zinc-400 flex flex-col justify-start items-start gap-6">
        <div className="flex flex-col justify-start items-start gap-4 lg:gap-[41px]">
          <div className="flex flex-col justify-start items-start gap-1.5">
            <div className="text-black text-sm lg:text-base font-normal font-['Inter']">
              EdgeWater Solutions
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <div className="text-black text-lg lg:text-2xl font-semibold font-['Inter']">
                Power BI Lead
              </div>
              <div className="text-black text-sm lg:text-base font-medium font-['Inter']">
                Columbia, SC
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-1">
            <div className="text-black text-sm lg:text-base font-normal font-['Inter']">
              Agama Solutions
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <div className="text-black text-left text-lg lg:text-2xl font-semibold font-['Inter']">
                Power BI Developer
              </div>
              <div className="text-black text-sm lg:text-base font-normal font-['Inter']">
                United States
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-1.5">
            <div className="text-black text-sm lg:text-base font-normal font-['Inter']">
              KeyFactor, Inc
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <div className="text-black text-lg lg:text-2xl font-semibold font-['Inter']">
                Project Manager
              </div>
              <div className="text-black text-sm lg:text-base font-normal font-['Inter']">
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
</div>



        <div className="flex-1">
          <SearchBar/>
          
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
                
              </Typography>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Typography>
                
                <JobSeekerCard JobSeekerItems={JobSeekerItems} />
                <JobSeekerCard JobSeekerItems={JobSeekerItems} />
                <JobSeekerCard JobSeekerItems={JobSeekerItems} />
                <JobSeekerCard JobSeekerItems={JobSeekerItems} />

              </Typography>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <JobSeekerCard JobSeekerItems={JobSeekerItems} />
              <JobSeekerCard JobSeekerItems={JobSeekerItems} />
              <JobSeekerCard JobSeekerItems={JobSeekerItems} />
              <JobSeekerCard JobSeekerItems={JobSeekerItems} />


            </CustomTabPanel>
            
          </div>
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
