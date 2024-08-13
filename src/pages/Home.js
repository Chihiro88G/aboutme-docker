import { Box, Button, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

import background from "../images/Gradient-Background.png"

export default function Home() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <Box
        sx={{
          display: 'block',
          height: '80vh',
          margin: '0 auto',
          padding: '50px',
        }} 
        maxWidth="lg"
      >
        <Typography variant='h3' sx={{ marginTop: '60px', marginBottom: '10px' }}>Chihiro Hasegawa</Typography>
        <Typography variant='h4'><LaptopMacIcon />Full Stack Developer</Typography>
        <Typography variant='h4'><LocationOnIcon />Toronto, Canada</Typography>
        <Button variant='contained' sx={{ marginTop: '60px' }}><LinkedInIcon />CONNECT</Button>
      </Box>
    </Box>
  )
}