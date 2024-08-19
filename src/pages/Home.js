import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import background from "../images/Gradient-Background.png"
import myImg from "../images/me.png"

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
          display: 'flex',
          height: '80vh',
          margin: '0 auto',
          padding: isDesktop ? '50px' : '40px',
          justifyContent: 'space-evenly'
        }} 
        maxWidth="lg"
      >
        <Box>
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
          <Button variant='contained' sx={{ marginTop: '60px' }} color='success' download='ChihiroH_Resume.pdf' href='ChihiroH_Resume.pdf'><PictureAsPdfIcon />RESUME</Button>
        </Box>
        <Box
          sx={{
            width: '350px',
            borderRadius: '100%',
            marginTop: '60px'
          }}
        >
          <img src={myImg} alt='myimg' style={{ width: '100%', height: 'auto', borderRadius: '8px'}}></img>
        </Box>
      </Box>
    </Box>
  )
}