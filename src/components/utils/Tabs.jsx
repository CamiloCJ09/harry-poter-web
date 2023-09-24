import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import PropTypes from 'prop-types';

export default function LabTabs({tabsNames, onChangeTab}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (newValue) => {
    onChangeTab();
    setValue(newValue);
  };

  LabTabs.propTypes = {
    onChangeTab: PropTypes.func.isRequired,
    tabsNames: PropTypes.array.isRequired,
  };

  const tabs = tabsNames.map((tab, index) => {
    return (
      <Tab key={index} label={tab} value={index + 1} />
    );
  });


  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {tabs}
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}