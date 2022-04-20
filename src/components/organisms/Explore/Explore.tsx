import React from 'react'
import {Container, Grid, Box, Link, Typography, Tabs, Tab, Button, Stack} from '@mui/material'
import Logos from '../../atoms/Icon/Logos'
import entreprenuer from '../../../images/organisms/entreprenuer.svg'
import career from '../../../images/organisms/career.svg'
import communication from '../../../images/organisms/communication.svg'
import corporate from '../../../images/organisms/corporate.svg'
import economics from '../../../images/organisms/economics.svg'
import education from '../../../images/organisms/education.svg'
import health from '../../../images/organisms/health.svg'
import history from '../../../images/organisms/health.svg'
import marketing from '../../../images/organisms/marketing.svg'
import money from '../../../images/organisms/money.svg'
import motivation from '../../../images/organisms/motivation.svg'
import nature from '../../../images/organisms/nature.svg'
import personal from '../../../images/organisms/personal.svg'
import politics from '../../../images/organisms/politics.svg'
import productivity from '../../../images/organisms/productivity.svg'
import psychology from '../../../images/organisms/psychology.svg'
import relationship from '../../../images/organisms/relationship.svg'
import science from '../../../images/organisms/science.svg'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import entrepreneur from '../../../Pages/EntrepreneurPage/EntrepreneurPage'
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const theme = createTheme({
    palette: {
      secondary: {
          main: "#6D787E"
      }
    },
    typography: {
        fontFamily: "Cera Pro",
        fontWeightBold: 500,
        fontSize: 16,
    }
  });
  
  function TabPanel(props: TabPanelProps) {
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
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const Explore = ()=> {
    const [value, setValue] = React.useState('one');
  
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    }
    return (
        <div data-testid="Explore">
            
            <ThemeProvider theme={theme}>
              {/* <Box sx={{ width: '100%' }}> */}
              <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider'}} style={{marginLeft:"0%"}}>
                
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="primary" indicatorColor="secondary">
                        <Tab label="Explore by category"  sx={{ padding:"0px",font:"Cera Pro"}}/>
                        <Tab label="See recently added titles" />
                        <Tab label="See popular titles" />
                
                    </Tabs>
                    </Box>
              {/* </Box> */}
            </ThemeProvider>
            <Grid container spacing={3} sx={{ marginTop: "5px" }}>
              <Grid item xs={12} md={6} lg={4}>
                  {/* <Box color="#116BE9">Explore by category</Box> */}
                  <Stack direction="row" spacing={1}>

                    <Logos image={entreprenuer}/>
                    
                    <Link href="entrepreneur" color="#6D787E" underline="none" marginLeft={1}>
                    
                    Entrepreneurship
                    </Link>
                    </Stack>
                    </Grid>
                  <br />
                  <Grid item xs={12} md={6} lg={4}>

                  <Stack direction="row" spacing={1}>
                    <Logos image={science}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Science
                    </Link>
                    </Stack>
                  </Grid>
                  <br />
                  <Grid item xs={12} md={6} lg={4}>

                  <Stack direction="row" spacing={1}>
                    <Logos image={economics}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Economics
                    </Link>
                    </Stack>
                  </Grid>
                  <br />
                  <Grid item xs={12} md={6} lg={4}>

                  <Stack direction="row" spacing={1}>
                  <Logos image={corporate}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Corporate Culture
                    </Link>
                    </Stack>
                  </Grid>
                  <br />
                  <Grid item xs={12} md={6} lg={4}>

                  <Stack direction="row" spacing={1}>
                  <Logos image={psychology}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Psychology
                    </Link>
                    </Stack>
                  </Grid>
                  <br />
                  <Grid item xs={12} md={6} lg={4}>

                  <Stack direction="row" spacing={1}>
                  <Logos image={nature}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Nature & Environment
                    </Link>
                    </Stack>
                  </Grid>
                
                
                
                  {/* <Box color="#03314B">See recently added titles</Box>
                  <br /> */}
                  <Grid item xs={12} md={6} lg={4}>

                  <Stack direction="row" spacing={1}>
                  <Logos image={politics}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Politics
                    </Link>
                    </Stack>
                  </Grid>
                  <br />
                  <Grid item xs={12} md={6} lg={4}>

                  <Stack direction="row" spacing={1}>
                  <Logos image={health}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Health & Nutrition
                    </Link>
                    </Stack>
                  </Grid>
                  <br />
                  <Grid item xs={12} md={6} lg={4}>

                  <Stack direction="row" spacing={1}>
                  <Logos image={history}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    History
                    </Link>
                    </Stack>
                  </Grid>
                  <br />
                  <Grid item xs={12} md={6} lg={4}>

                  <Stack direction="row" spacing={1}>
                  <Logos image={motivation}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Motivation & Inspiration
                    </Link>
                    </Stack>
                  </Grid>
                  <br />
                  <Grid item xs={12} md={6} lg={4}>

                  <Stack direction="row" spacing={1}>
                  <Logos image={productivity}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Productivity
                    </Link>
                    </Stack>
                  </Grid>
                  <br />
                  <Grid item xs={12} md={6} lg={4}>

                  <Stack direction="row" spacing={1}>
                  <Logos image={career}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Career & Success
                    </Link>
                    </Stack>
                  </Grid>

                

                
                  {/* <Box color="#03314B">See popular titles</Box>
                  <br /> */}
                  <Grid item xs={12} md={6} lg={4}>

                  <Stack direction="row" spacing={1}>
                  <Logos image={marketing}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Marketing & Sales
                    </Link>
                    </Stack>
                  </Grid>
                  <br />
                  <Grid item xs={12} md={6} lg={4}>

                  <Stack direction="row" spacing={1}>
                  <Logos image={personal}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Personal Development
                    </Link>
                    </Stack>
                  </Grid>
                  <br />
                  <Grid item xs={12} md={6} lg={4}>

                  <Stack direction="row" spacing={1}>
                  <Logos image={communication}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Communication Skills
                    </Link>
                    </Stack>
                  </Grid>
                  <br />
                  <Grid item xs={12} md={6} lg={4}>

                  <Stack direction="row" spacing={1}>
                  <Logos image={money}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Money & Investments
                    </Link>
                    </Stack>
                  </Grid>
                  <br />
                  <Grid item xs={12} md={6} lg={4}>

                  <Stack direction="row" spacing={1}>
                  <Logos image={relationship}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Sex & Relationship
                    </Link>
                    </Stack>
                  </Grid>
                  <br />
                  <Grid item xs={12} md={6} lg={4}>

                  <Stack direction="row" spacing={1}>
                  <Logos image={education}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Education
                    </Link>
                    </Stack>
                  </Grid>
                  <br />
                </Grid>
                
            
          
        </div>
    );
}
export default Explore;