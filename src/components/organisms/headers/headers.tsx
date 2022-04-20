import React from "react";
import AppBar from '@mui/material/AppBar';
import Logos from "../../atoms/Icon/Logos"
import Account from "../../atoms/Accounts/Account"
import Typog from "../../atoms/Typography/Typog";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Blinklist from "../../../images/organisms/Blinklist.svg"
import Search from "../../../images/organisms/Search.svg"
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { Box, Button, Container, Link, Modal, Paper, Popover, Toolbar } from '@mui/material';
import Explore from "../Explore/Explore";
// import Pract from "../Explore/Pract"; 
const style = {
  position: "absolute" as "absolute",
  top: "37.3%",
  left: "47%",
  transform: "translate(-50%, -50%)",
  height: 398,
  width: 1600,
  bgcolor: "#F1F6F4",
  boxShadow: 10,
  p: 4,
};
const App=()=> {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [explore, setExplore] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
      <React.Fragment>
      <CssBaseline />      
        <AppBar  
          style={{
            boxShadow:"none", 
            background:"#ffffff",
            // position:"absolute",
            top:"auto",
            margin:"auto",
            padding:"10px"
            }}>
          <Toolbar>
          <Grid container spacing={3} style={{marginLeft:"16%"}}>
              <Grid item xs={1} style={{flexDirection:"column"}}>
                <Link href="/">
                <Logos image={Blinklist}/>
                </Link>
              </Grid>
              <Grid item xs={1} style={{marginLeft:"70px"}}>
                <Logos image={Search}/>
              </Grid>

              {/* <Grid item sm={1} style={{display:"flex", color:"#03314B", width:"57px", height:"20px"}}> */}
                
                {/* <Typog children="Explore" variant="h5"/>
                <Button onClick={handleClick}>
                 <KeyboardArrowDownRoundedIcon style={{color:"#000000"}}/>
                </Button>  */}
                
                {/* <Explore/> */}
                {/* <Pract/> */}

                {/* </Grid> */}
        <div>

        
        <Button
        onClick={handleOpen}
        variant="text"
        
        size="medium"
        endIcon={<KeyboardArrowDownRoundedIcon />}
        sx={{ marginTop: "10px", color:"#03314B",fontFamily: 'Cera Pro',fontSize:'16px',fontWeight:'500'}}
      >
        Explore
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        BackdropProps={{style: {top: "70px"}}}
        disableScrollLock={true}
      >
        <Box sx={style}>
          <Container maxWidth="md" >
            <Explore />
            
          </Container>
         </Box>  
      </Modal>
      </div>

                <Grid item sm={2} style={{marginLeft:"40px", color:"#03314B", width:"78px", height:"10px"}}>
              
                <Typog children="My Library" variant='h5' sx={{fontWeight: "500px"}}/>
                </Grid>

                <Grid item sm={1} style={{display:"flex", marginLeft:"20%"}}>
                <Account/>
                {/* <Dropdown/> */}
                <KeyboardArrowDownRoundedIcon style={{color:"#000000"}}/>

                </Grid>

            </Grid>
          </Toolbar>
        </AppBar>
      <Toolbar />

    </React.Fragment>
    );
  }
export default App 