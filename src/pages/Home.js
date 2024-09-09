import { Box, useMediaQuery } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

import background from '../images/home-bg.png';
import Typewriter from '../hooks/useTypewriter';
import PageContainer from '../components/Common/PageContainer';
import MyName from '../components/Home/MyName';
import MyInfo from '../components/Home/MyInfo';
import MyPic from '../components/Home/MyPic';
import LinkedInBtn from '../components/Home/LinkedInBtn';
import ResumeBtn from '../components/Home/ResumeBtn';

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
            m: isDesktop ? '' : '0 auto',
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
            <LinkedInBtn />
            <ResumeBtn />
          </Box>
        </Box>

        <MyPic />
      </Box>

      <Box
        sx={{
          display: 'block',
          mt: isDesktop ? '60px' : '',
          m: isDesktop ? '' : '20px auto'
      }}
      >
        <Typewriter text= " Let's Connect! " />
      </Box>
    </PageContainer>
  )
}