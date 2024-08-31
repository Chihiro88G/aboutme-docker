import { Box, Typography } from "@mui/material";

const NotFound = () => (
  <Box sx={{  
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '30px'
  }}>
    <Typography variant='h3'>Oops!</Typography>
    <Typography variant='h6'>
      Couldn't find the requested page: 404
    </Typography>
  </Box>
);
export default NotFound;
