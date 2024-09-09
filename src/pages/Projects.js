import { Typography, Grid, useMediaQuery } from "@mui/material";
import Title from "../components/Common/Title";
import PageContainer from "../components/Common/PageContainer";
import ProjectCard from "../components/Projects/ProjectCard";
import guideMeImg from "../images/guideme-jp.png";
import chihiroCaImg from "../images/chihiro-ca.png";
import cbayImg from "../images/cbay.png";

export default function Projects() {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const gitUri = 'https://github.com/Chihiro88G/';

  return (
    <PageContainer bgColor='whitesmoke' isFullHeight={true}>
      <Title>Projects</Title>

      <Grid 
        container
        spacing={2}
        justifyContent="center"
        sx={{
          width: isDesktop ? '60%' : '100%',
          margin: '0 auto'
        }}
      >
        <Grid item xs={12} md={6}>
          <ProjectCard 
            name='GuideMeJp'
            overview='GuideMeJp is for tourists planing to visit Japan and looking for tours. It offers travel tips and various guided tours available in English'
            link={gitUri + 'jp-guides'}
            imgUrl={guideMeImg}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <ProjectCard 
            name='Chihiro.ca'
            overview='This website is part of my personal projects. Deployed on Render using a Docker container uploaded on Github Container Registry'
            link={gitUri + 'aboutme-docker'}
            imgUrl={chihiroCaImg}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <ProjectCard 
            name='cBay'
            overview='E-commerce website (like eBay) to sell and buy a variery of products'
            link={gitUri + 'MERN-Cbae'}
            imgUrl={cbayImg}
          />
        </Grid>
      </Grid>
      <Typography sx={{ mt: '20px', textAlign: 'center' }}>
        More Projects to be added...👍
      </Typography>
    </PageContainer>
  )
}