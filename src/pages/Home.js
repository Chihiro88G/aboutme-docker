import { Box, Button, useMediaQuery } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import background from "../images/Gradient-Background.png"
import Typewriter from '../hooks/useTypewriter';
import PageContainer from '../components/Common/PageContainer';
import MyName from '../components/Home/MyName';
import MyInfo from '../components/Home/MyInfo';
import MyPic from '../components/Home/MyPic';

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
          <MyName>Chihiro Hasegawa</MyName>
          <Box>
            <MyInfo>
              <LaptopMacIcon />Full Stack Developer
            </MyInfo>              
            <MyInfo>
              <LocationOnIcon />Toronto, Canada
            </MyInfo>
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

        <MyPic />
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