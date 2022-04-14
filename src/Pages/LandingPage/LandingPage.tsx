import React from 'react'
import App from "../../components/organisms/headers/headers"
import Typog from "../../components/atoms/Typography/Typog"
import TabsHeading from '../../components/molecules/Tabs/TabsHeading'
import Card from '../../components/organisms/Cards/Card'
import Stack from '@mui/material/Stack';
import Footer from '../../components/organisms/Footer/Footer'
import { makeStyles } from '@mui/styles'
import SearchBar from '../../components/molecules/Search/SearchBar'
const useStyles = makeStyles({
  library:{
    height: 45,
  },
});
const LandingPage=()=> {
  return (
    <div >      
      <App/>
      <br/> 
      <Stack direction='row' marginLeft={36} marginBottom={5}>
        <Typog  children="My Library" variant="h3" color="#03314B"/> 
      </Stack> 
      {/* <SearchBar/> */}
      <TabsHeading/> 
      <br/>
      {/* <Finished /> */}
      
      <Footer/> 
    </div>       
  )
}
export default LandingPage 
