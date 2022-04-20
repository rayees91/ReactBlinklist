import React, { useEffect, useState } from "react";
import Cardss from '../Cards/Card';
import {Grid} from '@mui/material';
import axios from "axios";

interface Props{
    status:string;
    trending:string;
    justAdded:string;
    featured:string;
    bookLabel:string;
}

const Render=(props:Props)=>{
    var label = props.bookLabel ;
    const[repo,setRepo]=useState<any[]>([]);

    const getRepo=()=>{
        axios.get('http://localhost:8000/cards')
        .then((response)=>{
            console.log(response);
            const myRepo=response.data;
            if(myRepo!=repo)
                setRepo(myRepo)
        });
    };
    useEffect(()=>getRepo(),[repo])
    return(
        <Grid container spacing={2} wrap="wrap">
        {repo.map(repos => {
            if((props.status == repos.status)||(props.trending === repos.trending)||(props.justAdded === repos.justAdded)||(props.featured === repos.featured)){ 
                return ( 
                    <Grid item xs={12} sm={8} md={4} >
                    <Cardss bookLabel={label} key={repos.id} id={repos.id} imag={repos.imag} bookName={repos.bookName} author={repos.author} time={repos.time} user={repos.user} count={repos.count} status={repos.status} added={repos.added}  />
                    </Grid>
                )
            }
            // else if(props.trending === repos.trending){ 
            //     return ( 
            //         <Grid item xs={12} sm={8} md={4} >
            //         <Cardss bookLabel = {label} key={repos.id} id={repos.id} imag={repos.imag} bookName={repos.bookName} author={repos.author} time={repos.time} user={repos.user} count={repos.count} status={repos.status} added={repos.added} />
            //         </Grid>
            //     )
            // }
            // else if(props.justAdded === repos.justAdded){ 
            //     return ( 
            //         <Grid item xs={12} sm={8} md={4} >
            //         <Cardss bookLabel = {label} key={repos.id} id={repos.id} imag={repos.imag} bookName={repos.bookName} author={repos.author} time={repos.time} user={repos.user} count={repos.count} status={repos.status} added={repos.added} />
            //         </Grid>
            //     )
            // }
            // else if(props.featured === repos.featured){ 
            //     return ( 
            //         <Grid item xs={12} sm={8} md={4} >
            //         <Cardss bookLabel = {label} key={repos.id} id={repos.id} imag={repos.imag} bookName={repos.bookName} author={repos.author} time={repos.time} user={repos.user} count={repos.count} status={repos.status} added={repos.added} />
            //         </Grid>
            //     )
            // }
        })
        } 
        </Grid>
    )
}

export default Render;