import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import JobCard from "./JobCard";

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
            <JobCard
              title="Programmable Soft Robotics"
              applicants="40 applicants"
              address="Manhanttan, NY, USA"
              companyName="Fi Cloud inc."
            />
            <JobCard
              title="Project Manager"
              applicants="2 applicants"
              address="Ikeja, Lagos, Nigeria"
              companyName="Ascentree Services"
            />
            <JobCard
              title="IT Manager"
              applicants="70 applicants"
              address="Ikeja, Lagos, Nigeria"
              companyName="Ascentree  Services"
            />
            <JobCard
              title="Web Development Intern"
              applicants="40 applicants"
              address="Ikeja, Lagos, Nigeria"
              companyName="Ascentree  Services"
            />
            <JobCard
              title="Data Scientist"
              applicants="65 applicants"
              address="Ikeja, Lagos, Nigeria"
              companyName="Ascentree  Services"
            />
          </Typography>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {/* Content for the "Closed" tab */}
          <Typography>
            <JobCard
              title="Cloud Engineer"
              applicants="40 applicants"
              address="Manhanttan, NY, USA"
              companyName="Fi Cloud inc."
            />
            <JobCard
              title="Project Manager"
              applicants="2 applicants"
              address="Ikeja, Lagos, Nigeria"
              companyName="Ascentree Services"
            />
            <JobCard
              title="IT Manager"
              applicants="70 applicants"
              address="Ikeja, Lagos, Nigeria"
              companyName="Ascentree  Services"
            />
            <JobCard
              title="Web Development Intern"
              applicants="40 applicants"
              address="Ikeja, Lagos, Nigeria"
              companyName="Ascentree  Services"
            />
            <JobCard
              title="Data Scientist"
              applicants="65 applicants"
              address="Ikeja, Lagos, Nigeria"
              companyName="Ascentree  Services"
            />
          </Typography>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          {/* Content for the "Draft" tab */}
          <Typography>
            <JobCard
              title="Cloud Engineer"
              applicants="40 applicants"
              address="Manhanttan, NY, USA"
              companyName="Fi Cloud inc."
            />
            <JobCard
              title="Project Manager"
              applicants="2 applicants"
              address="Ikeja, Lagos, Nigeria"
              companyName="Ascentree Services"
            />
            <JobCard
              title="IT Manager"
              applicants="70 applicants"
              address="Ikeja, Lagos, Nigeria"
              companyName="Ascentree  Services"
            />
            <JobCard
              title="Web Development Intern"
              applicants="40 applicants"
              address="Ikeja, Lagos, Nigeria"
              companyName="Ascentree  Services"
            />
            <JobCard
              title="Data Scientist"
              applicants="65 applicants"
              address="Ikeja, Lagos, Nigeria"
              companyName="Ascentree  Services"
            />
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
