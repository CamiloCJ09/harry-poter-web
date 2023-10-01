import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import PropTypes from 'prop-types';

export default function LabTabs( { tabsNames , onChangeTab } ) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    onChangeTab(newValue);
    setValue(newValue);
  };

  LabTabs.propTypes = {
    onChangeTab: PropTypes.func.isRequired,
    tabsNames: PropTypes.array.isRequired,
  };

  const tabs = tabsNames.map((tab, index) => {

    return (
      <Tab key={index} label={tab} value={index+""}
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 300,
      }}
      
      />
    );
  });


  return (
    <Box sx={{ width: '100%', typography: 'body1' }}
    style={{ display: 'flex', justifyContent: 'center' }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: '#2e373d' }}>
          <TabList onChange={handleChange} aria-label="">
            {tabs}
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}