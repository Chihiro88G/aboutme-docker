import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import background from "../images/Gradient-Background.png"

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 960px)');

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
          padding: isDesktop ? '50px' : '40px',
        }} 
        maxWidth="lg"
      >
        <Typography
          variant={isDesktop ? 'h3' : 'h5'}
          sx={{ marginTop: '60px', marginBottom: '10px' }}
        >
          Chihiro Hasegawa
        </Typography>
        <Typography
          variant={isDesktop ? 'h4' : 'h6'}
        >
          <LaptopMacIcon />Full Stack Developer
        </Typography>
        <Typography
          variant={isDesktop ? 'h4' : 'h6'}
        >
          <LocationOnIcon />Toronto, Canada
        </Typography>
        <Button variant='contained' sx={{ marginTop: '60px', marginRight: '10px' }} href="https://www.linkedin.com/in/chihiro-h/" target="_blank" ><LinkedInIcon />CONNECT</Button>
        <Button variant='contained' sx={{ marginTop: '60px' }} color='success'><PictureAsPdfIcon />RESUME</Button>
      </Box>
    </Box>
  )
}