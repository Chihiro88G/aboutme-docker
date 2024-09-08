import { Box, useMediaQuery } from '@mui/material';

export default function PageContainer({ children, bgImage, bgColor, isFullHeight }) {
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <Box
      sx={{
        backgroundImage: bgImage ? `url(${bgImage})` : '',
        backgroundColor: bgColor ? bgColor : '',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <Box
        sx={{
          display: 'block',
          height: isFullHeight ? '100%' : (isDesktop ? '80vh' : '100%'),
          m: '0 auto',
          p: isDesktop ? '50px' : '40px',
        }} 
        maxWidth="lg"
      >
        {children}
      </Box>
    </Box>
  )
}