import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Avatar from '@mui/material/Avatar';

import background from "../images/Gradient-Background.png"
import myImg from "../images/me.jpg"
import Typewriter from '../hooks/useTypewriter';
import PageContainer from '../components/PageContainer';

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <PageContainer bgImage={background}>
      <Box
        sx={{
          display: isDesktop ? 'flex' : 'block',
          justifyContent: 'space-evenly',
        }} 
      >
        <Box
          sx={{
            display: isDesktop ? 'block' : 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: isDesktop ? '' : '0 auto',
          }}
        >
          <Typography
            variant={isDesktop ? 'h3' : 'h4'}
            sx={{
              marginTop: isDesktop ? '60px' : '',
              marginBottom: '10px',
            }}
          >
            Chihiro Hasegawa
          </Typography>

          <Box>
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
          </Box>

          <Box>
            <Button 
              variant='contained'
              sx={{
                marginTop: isDesktop ? '60px' : '20px',
                marginRight: '10px'
              }}
              href="https://www.linkedin.com/in/chihiro-h/"
              target="_blank"
            >
              <LinkedInIcon />CONNECT
            </Button>
            <Button
              variant='contained'
              sx={{
                marginTop: isDesktop ? '60px' : '20px',
              }}
              color='success'
              download='ChihiroH_Resume.pdf'
              href='ChihiroH_Resume.pdf'
            >
              <PictureAsPdfIcon />RESUME
            </Button>
          </Box>
        </Box>

        <Avatar
          alt="Remy Sharp"
          src={myImg}
          sx={{ 
            width: 250,
            height: 250,
            marginTop: isDesktop ? '60px' : '',
            margin: isDesktop ? '' : '20px auto'
          }}
        />
      </Box>

      <Box
        sx={{
          display: 'block',
          marginTop: isDesktop ? '60px' : '',
          margin: isDesktop ? '' : '20px auto'
      }}
      >
        <Typewriter text= " Let's Connect! " />
      </Box>
    </PageContainer>
  )
}