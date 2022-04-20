import React from 'react'
// import img from "../../../images/organisms/Ellipse 20.png"

const Logos=(props:any) =>{
  return (
    <div data-testid="custom-element"> 
        <img src={props.image} alt="not found" />
    </div>
  )
} 
export default Logos 