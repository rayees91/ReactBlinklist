import React from 'react'
import Render from "../../organisms/Render/Render"
import Typog from '../../atoms/Typography/Typog'
import { Box, Link} from '@mui/material'
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom'
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
const ClassifiedCards=()=>{
  const style = useStyles();
  const handl = ()=>{
    const url = window.location.hash;
    const id = url.substring(url.lastIndexOf("/") + 1);
    console.log(id)
  }
  return (
    <div>
    <Box sx={{ width: '910px'}} style={{marginLeft:"309px",marginTop:"80px"}}>
        <Box>
            <Typog children="Trending blinks" variant="h3" />
            <Link  onClick={handl} color="#6D787E" underline="none" marginLeft={1}>
                <Render  bookLabel="+ Add to Library" trending='yes' status='' justAdded='' featured=''/>
            </Link>
        </Box>
      {/* className={style.heading1} */}
        <Box style={{marginTop:"80px"}}>
            <Typog children="Just added" variant="h3"  />
            <Link  color="#6D787E" underline="none" marginLeft={1}>
                <Render  bookLabel="+ Add to Library" justAdded="yes" status="" trending=""  featured=""/>
            </Link>
        </Box>
        <Box style={{marginTop:"80px"}}>
            <Typog children="Featured audio blinks" variant="h3"  />
            <Link color="#6D787E" underline="none" marginLeft={1}>
                <Render  bookLabel="+ Add to Library" featured="yes" status='' trending="" justAdded="" /> 
            </Link>
        </Box>
    </Box>
    </div>
  )
}
export default ClassifiedCards