import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCog } from "@fortawesome/free-solid-svg-icons";
import JobCard from "../component/JobCard";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ActiveCloseDraft from "../component/ActiveCloseDraftJobs";
import ActiveCloseDraftProjects from "../component/ActiveClosedDraftProjects";
// import CustomTab from "../component/CustomTab";

const businessDashboard = () => {
  const cookieNames = 'Tekwox';
  const [businessName, setBusinessName] = useState('');

  useEffect(() => {
    // Function to retrieve business name from cookie
    const getBusinessNameFromCookie = () => {
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(';');

      let cookieValue = '';
      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieNames + '=') === 0) {
          cookieValue = cookie.substring(cookieNames.length + 1);
          break;
        }
      }

      if (cookieValue) {
        const parsedData = JSON.parse(cookieValue);
        const businessDetails = parsedData?.data?.user?.businessDetails;
        if (businessDetails) {
          setBusinessName(businessDetails.businessname);
        }
      }
    };

    getBusinessNameFromCookie();
  }, []);
  // const [toggle, setToggle] = useState(1);
  // const [isActive, setIsActive] = useState(1);
  // function updateToggle(id) {
  //   setToggle(id);
  // }

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <nav className="bg-white fixed top-0 left-0 w-full border-b z-10">
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
          <div className="flex gap-2">
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

      <div className="flex w-[90%] p-2 pt-20 gap-14">
        <div className="w-[20rem]   h-[40rem]">
          <Link to="/businessprofile">
            <div className="border ml-8 mt-8 rounded-2xl px-4  h-auto text-center items-center">
              <img
                src="profile.png"                                                     
                alt="Another Image"
                className="w-12 h-auto ml-20 mt-6 items-center"
              />
              <h6 className="mb-12">{businessName}</h6>
            </div>
          </Link>

          <Link to="/postajob">
            <button className="px-16 py-2 mt-6 bg-[#5d6aa8] text-white font-bold rounded-full hover:bg-white hover:text-[#5d6aa8] hover:border-[#5d6aa8] hover:border">
              Post a Job
            </button>
          </Link>

          <Link to="/postaproject">
            <button className="px-14 py-2 mt-6 border-[#5d6aa8] border text-[#5d6aa8] font-bold rounded-full hover:bg-[#5d6aa8] hover:text-white">
              Post a Project
            </button>
          </Link>
          <div className="mt-9 w-[15rem] ml-7">
            <div className="w-[15rem] h-auto py-10 bg-white rounded-2xl border border-zinc-400 flex-col justify-start items-start gap-6 inline-flex">
              <p>
                Businesses can also bid for projects of their choice. See a list
                of projects up for bidding.
              </p>
              <Link to="/listedprojects">
                <button className="px-10 ml-5 py-2 mt-6 bg-[#5d6aa8] text-white font-bold rounded-full hover:bg-white hover:text-[#5d6aa8] hover:border-[#5d6aa8] hover:border">
                  Listed Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Box sx={{ width: "100%" }}>
            <Box
              className="tab-container"
              sx={{ borderBottom: 1, borderColor: "divider" }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Jobs" />
                <Tab label="Projects" />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <ActiveCloseDraft />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <ActiveCloseDraftProjects />
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

export default businessDashboard;
