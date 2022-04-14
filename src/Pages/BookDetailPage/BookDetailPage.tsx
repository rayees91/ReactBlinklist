import { Typography,  Tab} from '@mui/material'
import React, {  useEffect, useState } from 'react'
import App from '../../components/organisms/headers/headers'
import Footer from '../../components/organisms/Footer/Footer'
import Stack from '@mui/material/Stack';
import {Button, Grid, Container, Box} from '@mui/material';
import Logos from '../../components/atoms/Icon/Logos';
import { useLocation} from 'react-router-dom';
import Typog from '../../components/atoms/Typography/Typog';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {makeStyles} from '@mui/styles'
import {TabPanel, TabContext, TabList} from '@mui/lab';
import axios from 'axios';
// import ButtonComponent from '../../components/atoms/ButtonCompo/ButtonComponent';


const useStyles = makeStyles({
  idea:{
    position: "absolute",
    width: "168px",
    height: "20px",
    left: "300px",
    top: "100px",
    fontFamily: 'Cera Pro',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#03314B"

  },
  BookName:{
    position: "absolute",
    width: "496px",
    height: "45px",
    left: "300px",
    top: "150px",
    fontFamily: 'Cera Pro',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "36px",
    lineHeight: "45px",
    color: "#03314B"
  },
  AboutBook:{
    position: "absolute",
    width: "509px",
    height: "25px",
    left: "300px",
    top: "220px",
    fontFamily: 'Cera Pro',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "25px",
    color: "#03314B"
  },
  author:{
    position: "absolute",
    width: "209px",
    height: "20px",
    left: "300px",
    top: "270px",
    fontFamily: 'Cera Pro',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#6D787E"
  },
  time:{
    position: "absolute",
    width: "209px",
    height: "20px",
    left: "300px",
    marginTop: "100px",
    bottom:"12.5%",
    right: "0%",
    fontFamily: 'Cera Pro',
    fontStyle: "normal",
    fontWeight: "400",
    textAlign:"right",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#6D787E"
  }
})
interface BookDetails{
  id:number;
  bookName:string;
  imag:string;
  author:string;
  status:string;
  state:string;
  count:string;
}
const BookDetailPage = () => {
  const location = useLocation();
  const index:any = location.state;
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  }
  const style = useStyles();
  const [book,setBook]=useState({});
  
    useEffect(()=>{
        fetch('http://localhost:8000/cards/'+(index.id))
        .then(res =>res.json())
        .then((data:BookDetails) => {
                setBook(data)
            }
            )
    },[])
  var thisBook:any = book;
  var bookState=thisBook.status;
  const read = ()=>{
    bookState="Finished";
    fetch('http://localhost:8000/cards/'+(index.id),{
        method: 'PATCH',
        body: JSON.stringify({
          "status": bookState
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json())
      .then((json) => console.log(json));
  
  }
  const finish = ()=>{
    
      if(bookState!="Read Again")
        bookState="Read Again";
      else if(bookState!="Finished")
        bookState="Read Again"; 
      else
        bookState="n"; //look into as added books when removed hides the book
    fetch('http://localhost:8000/cards/'+(index.id),{
        method: 'PATCH',
        body: JSON.stringify({
          "status": bookState
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json())
      .then((json) => console.log(json));
    }
//       const[repo,setRepo]=useState<any[]>([]);
    
//       const getRepo=()=>{
//           axios.get('http://localhost:8000/cards')
//           .then((response)=>{
//               console.log(response);
//               const myRepo=response.data;
//               if(myRepo!=repo)
//                   setRepo(myRepo)
//           });
//       };
//         useEffect(()=>getRepo(),[repo])
//         repo.map(repos => {
//           var stats = repos.status ; 
//           var add = repos.added ;    
//           // eslint-disable-next-line eqeqeq
//           if(add=="yes"){
//             if(stats=="") 
//               stats="Finished"
//             // eslint-disable-next-line eqeqeq
//             else if(stats=="Finished")
//               stats="Read Again"  
//           }
//         fetch('http://localhost:8000/cards',{
//           method: 'PATCH',
//           body: JSON.stringify({
//           "status": stats
          
//           }),
//           headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//           },
//         }).then((response) => response.json())
//         .then((json) => console.log(json));
//       }
//         )
// }
    // useEffect(()=>getRepo(),[repo])
    
    // if(repo.status=="Finished")
    // repo.status="Read Again"
    
  
    
  return (
    <div>
    <React.Fragment>
      <App/>
      <br />


      <Box marginTop="30px">
            <Container maxWidth="lg">
                <Grid container spacing={4} marginLeft="5%" >


                    <Grid item xs={9} sm={6} >
                        <Box>
                            <Typog children="Get the key ideas from" variant="subtitle2" className={style.idea}/>
                        </Box>
                        
                        <Box>
                            <Typog children={thisBook.bookName} variant="h4" className={style.BookName}/>
                        </Box>

                        <Box>
                            <Typog children="Turning Your Business into an Enduring Great Company" variant="h6" className={style.AboutBook}/>
                        </Box>

                        <Box>
                            <Typog children={thisBook.author} variant="subtitle2" className={style.author}/>
                        </Box>
                        
                        <Typography variant="body1" color="text.secondary" align="left" sx={{"marginTop":23,"marginLeft":3.4}}>
                          <Grid container>
                            <Grid item>
                              <AccessTimeIcon />
                            </Grid>
                            <Grid item>
                              <Typography variant="body2">
                                {thisBook.time}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Typography>
                        
                        
                        <Box style={{marginTop:"60px" ,marginLeft:"30px"}}>
                            <Stack spacing={2} direction="row">
                                <Button variant="text" onClick={read} href="/">Read now</Button>
                                <Button variant="outlined" onClick={finish}  href="/">Finished Reading</Button>
                                
                                <Button>
                                <Typog children="Send to kindle ->" variant="subtitle2" color="#6D787E"/>
                                </Button>
                            </Stack>
                        </Box>
                            
                    </Grid>
                    <br />
                    <br />
                    

                    <Grid item xs={9} sm={3}>
                        <Box >
                            <Logos image={thisBook.imag}/>
                        </Box>
                        <Box>

                        </Box>
                            
                            
                    </Grid>
                    <br />
                    <br />
                    
                    <Box sx={{ width: '51%', typography: 'body1', marginLeft:"3%" }}>
                      <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', width:"90%", marginLeft:"3%" }}>
                          <TabList onChange={handleChange} aria-label="lab API tabs example" >
                            <Tab label="Synopsis" value="1" />
                            <Tab label="Who is it for?" value="2" sx={{marginLeft:"6%"}}/>
                            <Tab label="About the  author" value="3" sx={{marginLeft:"6%"}}/>
                          </TabList>
                        </Box>
                        <TabPanel value="1">
                        Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.
                        </TabPanel>
                        <TabPanel value="2"></TabPanel>
                        <TabPanel value="3"></TabPanel>
                      </TabContext>
                    </Box>

                </Grid>
                <br />
                <br />
                <br />
            </Container>
        </Box>
      <br />
      <br />
      <Footer/> 
    </React.Fragment>
    </div>
  );
}


export default BookDetailPage;