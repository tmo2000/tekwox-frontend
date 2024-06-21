import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ActiveCloseDraft from "./ActiveCloseDraftJobs";

const CustomTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-[80%]">
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Jobs" />
        <Tab label="Projects" />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <ActiveCloseDraft />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ActiveCloseDraft />
      </CustomTabPanel>
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
      aria-labelledby={`simple-tab-${index}`}
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

export default CustomTab;
