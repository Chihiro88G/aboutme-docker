import { Box, Typography, useMediaQuery } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from "react-router-dom";

export default function Projects() {
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <Box
      sx={{
        backgroundColor: 'whitesmoke',
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
          variant={isDesktop ? 'h4' : 'h6'}
          color='#0d7858'
        >
          Projects
        </Typography>

        <Typography fontWeight='bold' variant="h6">
          <Link to='https://github.com/Chihiro88G/aboutme' target="_blank" >Chihiro.ca</Link>
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            This website is part of my personal projects deployed on Github. To be deployed to somewhere else using a Docker container
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Technologies: React
          </ListItem>
        </List>

        <Typography fontWeight='bold' variant="h6">
          <Link to='https://github.com/Chihiro88G/jp-guides' target="_blank" >GuideMeJp</Link>
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            GuideMeJp is for tourists planing to visit Japan and looking for tours. It offers travel tips and various guided tours available in English
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Technologies: Typescript, React, Redux, Node.js, Express, MySQL
          </ListItem>
        </List>

        <Typography fontWeight='bold' variant="h6">
          <Link to='https://github.com/Chihiro88G/MERN-Cbae' target="_blank" >cBay</Link>
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            E-commerce website (like eBay) to sell and buy a variery of products
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Technologies: React, Redux, Node.js, Express, MongoDB
          </ListItem>
        </List>

        <Typography sx={{ marginTop: '20px' }}>
          To be added...
        </Typography>

      </Box>
    </Box>
  )
}