import { TextField ,Grid ,Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
import {Search} from "@mui/icons-material";
import Cardss from "../../organisms/Cards/Card"
import ClassifiedCards from "../ClassifiedCards/ClassifiedCards"

interface BookDetails{
  id:number;
  label:string;
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
const SearchBar=()=>{
    const [searchValue,setSearchValue]=useState('')
    const IconNText=()=>{
        return(
            <Grid container >
            <Grid item>
                <Search />
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Search by title or author
              </Typography>
            </Grid>
          </Grid>
        )
    }
    const [books,setBooks]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/cards')
        .then(res =>res.json())
        .then(data => {
            // eslint-disable-next-line eqeqeq
            if(data != books)
                setBooks(data)
            }
            )
    },[books,searchValue])
    return(
      <>
        <TextField 
            label={<IconNText />}
            variant="standard" 
            value={searchValue} 
            onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setSearchValue(event.target.value)} 
            sx={{"marginBottom":0,"width":658,"marginLeft":38,"marginTop":40}} />

        <Grid container spacing={2} wrap="wrap" sx={{marginTop:2,marginBottom:2}}>
       
        {books.map((book:BookDetails) =>{
        
            if(searchValue==''){
              return <></>
            }
            
            else{
              if((book.bookName).toLowerCase().includes(searchValue.toLowerCase())){
                  return (
                      // <Grid item xs={12} sm={8} md={4} >
                      <Grid container spacing={2} xs={12} sm={8} md={4} sx={{marginLeft:"23%", marginTop:"4%", marginBottom:"3%"}}>
                        <Cardss bookLabel="+ Add to Library" key={book.id} id={book.id} imag={book.imag} bookName={book.bookName} author={book.author} time={book.time} user={book.user} count={book.count} status={book.status} added={book.added} />
                      </Grid> 
                      // <ClassifiedCards/>
                  )
              } 
              if((book.author).toLowerCase().includes(searchValue.toLowerCase())){
                  return (
                      // <Grid item xs={12} sm={8} md={4} >
                      <Grid container xs={12} sm={8} md={4} spacing={2} sx={{marginLeft:"23%", marginTop:"4%", marginBottom:"3%"}}>
                        <Cardss bookLabel = "+ Add to Library" key={book.id} id={book.id} imag={book.imag} bookName={book.bookName} author={book.author} time={book.time} user={book.user} count={book.count} status={book.status} added={book.added} />
                      </Grid> 
                      // <ClassifiedCards/>
                  )
              }
          }
        }) 
        } 
        </Grid>
        </>
    )
}
export default SearchBar;