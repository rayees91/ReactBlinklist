import React from 'react'
import App from '../../components/organisms/headers/headers'
import Banner from '../../components/molecules/Banner/Banner'
import Render from '../../components/organisms/Render/Render'
import Footer from '../../components/organisms/Footer/Footer'
import Typog from '../../components/atoms/Typography/Typog'
import SearchBar from '../../components/molecules/Search/SearchBar'
import { Box, Link} from '@mui/material'
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom'
import ClassifiedCards from '../../components/molecules/ClassifiedCards/ClassifiedCards'
const useStyles = makeStyles({
  typo:{
    height:30,
  },
  heading1:{
    position: "static",
    left: "0px",
    width: "174px",
    height:"30px",
    top: "0px",
    bottom: "48.86%",
    color: "#03314B",
    fontFamily:"Cera Pro",
    fontSize:"24px",
    fontWeight:"700",
    lineHeight:"30px",
    fontStyle:"normal",
    margin:"30px 0px"
  },
  
});
const EntrepreneurPage=()=>{
  const style = useStyles();
  
  return (
    <div>
      <App/>     
      <Banner/>
      
      
      <SearchBar/>
      
      <ClassifiedCards/>
      <Footer/> 
    </div>
  )
}
export default EntrepreneurPage 