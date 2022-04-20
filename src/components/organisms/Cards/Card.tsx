import React, { useEffect } from 'react'
import { useState } from 'react'
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; 
import Typog from '../../atoms/Typography/Typog'; 
import axios from 'axios';
import Logos from '../../atoms/Icon/Logos';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import Explore from "../Explore/Explore"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const useStyles = makeStyles({
  list: {
    height:398,
  },
  box:{
    paddingTop:10,
  },
  typog:{
    marginLeft:"0",
    position:"static",
    left: "0%",
    right: "15.14%",
    top: "66.52%",
    bottom:" 28.54%",
    fontFamily: 'Cera Pro',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "23px",
    color: "#03314B"
  },
  
});

interface Props{
  
  id:number;
  imag:string;
  bookName:string;
  author:string;
  time:string;
  user:string;
  count:string;
  status:string;
  bookLabel:string;
  added:string;
  
}

const Cardss=(props:Props)=> {
    const classes = useStyles();
    var index = props.id ;
    var bookState = props.status;
    var label = props.bookLabel ;
    var isAdded = props.added ;
  const handleClick = ()=>{   
    if(label == "+ Add to Library"){
      if(isAdded=="yes"){

        bookState = "a"
        isAdded="no" 
      }
      else if(isAdded=="no")
        isAdded="yes"  
    }
    
    else if(label == "Finished"){
      bookState = "Read Again"
      label = "Read Again"
    }
    else if(label == "Read Again"){
      bookState = "Finished"
      label = "Finished"
    }
    // if(isAdded=="yes"&&){
      
    // } 
    fetch('http://localhost:8000/cards/'+index,{
      method: 'PATCH',
      body: JSON.stringify({
        "status": bookState,
        "added":isAdded
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
    .then((json) => console.log(json));
  }
  return (
    <div>
            <Card sx={{ maxWidth: 345 , height:385 }}>
                {/* <Logos image={props.imag} /> */}
                <CardMedia
                component="img"
                height="200"
                image={props.imag}
                alt="not found"
                />
            <Link to="/BookDetailPage" state={{id:index}} style={{ textDecoration: 'none'}}>
                <CardContent>
                  <Typog children={props.bookName} variant="h6" color="#03314B" className={classes.typog}/>

                  <Typog children={props.author} variant="subtitle1" color="#6D787E"/>
                  <Typography variant="body2" color="text.secondary" align="left" sx={{"marginTop":1}}>
                  <Grid container padding={0}>
                    
                    <Grid item style={{marginLeft:"0%",display:"flex"}}>
                      <QueryBuilderIcon/>
                      <Typog children={props.time} variant="body2" />                   
                    </Grid>
                    <Grid item style={{marginLeft:"8%", display:"flex"}}>

                      {props.count===""?null:(
                        <>
                          <Logos image={props.user} />                         
                          <Typog children={props.count} variant="body1" />                         
                        </>
                        ) 
                      }                       
                    </Grid>
                    
                  </Grid>
                  </Typography> 
                
                </CardContent> 
                </Link>
                
                <CardActions sx={{"margin":0}} > 
                  {props.added==="yes"&&props.bookLabel=="+ Add to Library"?                  
                  <Button fullWidth={true} sx={{":hover":{bgcolor:"#0365F2",color:"#ffffff"},"margin":0,"marginLeft":30}} onClick={handleClick}>                 
                      
                      <MoreHorizIcon style={{color:"#000000"}}/>  
                  </Button> 
                  :(        
                  <Button fullWidth={true} sx={{":hover":{bgcolor:"#0365F2",color:"#ffffff"},"margin":0}} onClick={handleClick}> 
                    {label} 
                  </Button>  
                  )}         
                </CardActions> 
            </Card>
            
        <Box
      sx={{
        width: 95,
        height: 15,
        position:"absolute",
        backgroundColor: '#E1ECFC',
        borderRadius:"0px 0px 0px 8px",

      }}
    />
    <Box
    sx={{
      width:"100%",
      height: 15,
      backgroundColor: '#F1F6F4',
      borderRadius:"0px 0px 8px 8px",
      border: "1px solid #E1ECFC"
      }} 
    />
    </div>
          
  );
}

export default Cardss

