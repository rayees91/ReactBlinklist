import { Typography } from '@mui/material'
import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import MyLibrary from "./../MyLibrary/MyLibrary"
const LandingPage = () => {
    const { loginWithRedirect } = useAuth0();
    const Authenticated = useAuth0().isAuthenticated;
  return (
    <div>
        <Typography variant='h1'>Welcome to Blinklist</Typography>
        <button onClick={() => loginWithRedirect()}>Log In</button>
        {/* {Authenticated && <MyLibrary/>} */}
    </div>
  )
}

export default LandingPage