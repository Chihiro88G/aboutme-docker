import { Box, Typography, useMediaQuery } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ProjectName from "../components/Projects/ProjectName";
import Title from "../components/Title";

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
          height: isDesktop ? '80vh' : '100%',
          margin: '0 auto',
          padding: isDesktop ? '50px' : '40px',
        }} 
        maxWidth="lg"
      >
        <Title>Projects</Title>

        <ProjectName repoName='aboutme-docker' projectName='Chihiro.ca' />
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            This website is part of my personal projects. Deployed on Render using a Docker container uploaded on Github Container Registry
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Technologies: React, Docker
          </ListItem>
        </List>

        <ProjectName repoName='jp-guides' projectName='GuideMeJp' />
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            GuideMeJp is for tourists planing to visit Japan and looking for tours. It offers travel tips and various guided tours available in English
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Technologies: Typescript, React, Redux, Node.js, Express, MySQL
          </ListItem>
        </List>

        <ProjectName repoName='MERN-Cbae' projectName='cBay' />
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