import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import JobCard from "./JobCard";
import ProjectCard from "./ProjectCard";

const ActiveCloseDraftProjects = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
            <Tab label="Active" />
            <Tab label="Closed" />
            <Tab label="Draft" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {/* Content for the "Active" tab */}
          <Typography>
            <ProjectCard projectName='Programmable soft robotics'
              companyName='Edgewater solutions'
            Location='Columbia SC'/>
            <ProjectCard projectName='AI augmented renewable energy'
              companyName='Agama solutions'
            Location='United states' />
            <ProjectCard projectName='Weather forecasting system'
              companyName='KeyFactor Inc'
            Location='Atlanta GC'/>
            <ProjectCard projectName='Data Leakage detection system'
              companyName='Pheonix services'
            Location='San Jose'/>
            
          </Typography>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {/* Content for the "Closed" tab */}
          <Typography>
            <ProjectCard projectName='SAP Project'
              companyName='Edgewater solutions'
            Location='Columbia SC'/>
            <ProjectCard projectName='AI augmented renewable energy'
              companyName='Agama solutions'
            Location='United states' />
            <ProjectCard projectName='Weather forecasting system'
              companyName='KeyFactor Inc'
            Location='Atlanta GC'/>
            <ProjectCard projectName='Data Leakage detection system'
              companyName='Pheonix services'
            Location='San Jose'/>
          </Typography>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          {/* Content for the "Draft" tab */}
          <Typography>
            <ProjectCard projectName='Programmable soft robotics'
              companyName='Edgewater solutions'
            Location='Columbia SC'/>
            <ProjectCard projectName='AI augmented renewable energy'
              companyName='Agama solutions'
            Location='United states' />
            <ProjectCard projectName='Weather forecasting system'
              companyName='KeyFactor Inc'
            Location='Atlanta GC'/>
            <ProjectCard projectName='Data Leakage detection system'
              companyName='Pheonix services'
            Location='San Jose'/>
          </Typography>
        </CustomTabPanel>
      </Box>
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

export default ActiveCloseDraftProjects;
