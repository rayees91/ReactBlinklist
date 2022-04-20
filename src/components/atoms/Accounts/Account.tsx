import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { lightBlue } from '@mui/material/colors';

const Accounts= () => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        sx={{ bgcolor: lightBlue[500] }}
        alt="Account"
        src="/broken-image.jpg"
      > 
        A
      </Avatar>
      {/* <Avatar src="/broken-image.jpg" /> */}
    </Stack>
  );
}
export default Accounts