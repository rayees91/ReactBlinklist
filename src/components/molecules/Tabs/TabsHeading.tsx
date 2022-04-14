import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Cardss from '../../organisms/Cards/Card';
import Render from '../../organisms/Render/Render';
const TabsHeading=()=> {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '910px'}} style={{marginLeft:"270px"}}>
      <TabContext value={value}>
        
      <Box sx={{ borderBottom: 1, borderColor: 'divider',width: '865px' }} style={{marginLeft:"25px"}}>
        <TabList onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="Currently reading" value="1"  sx={{marginRight:"153px", padding:"0px"}}/>
          <Tab label="Finished" value="2" />
          
        </TabList>
      </Box>
      <TabPanel value="1"><Render bookLabel="Finished" status='Finished' trending='' justAdded='' featured=''/></TabPanel>
      <TabPanel value="2"><Render bookLabel="Read Again" status='Read Again' trending='' justAdded='' featured=''/></TabPanel>
      </TabContext>
    </Box>
    // trending='yes' justAdded='no' featured='no'
  );
}
export default TabsHeading 