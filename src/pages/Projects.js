import { Typography, List } from "@mui/material";
import ProjectName from "../components/Projects/ProjectName";
import Title from "../components/Common/Title";
import PageContainer from "../components/Common/PageContainer";
import Listitem from "../components/Common/Listitem";

export default function Projects() {

  return (
    <PageContainer bgColor='whitesmoke'>
      <Title>Projects</Title>

      <ProjectName repoName='aboutme-docker' projectName='Chihiro.ca' />
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <Listitem>
          This website is part of my personal projects. Deployed on Render using a Docker container uploaded on Github Container Registry
        </Listitem>
        <Listitem>
          Technologies: React, Docker
        </Listitem>
      </List>

      <ProjectName repoName='jp-guides' projectName='GuideMeJp' />
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <Listitem>
          GuideMeJp is for tourists planing to visit Japan and looking for tours. It offers travel tips and various guided tours available in English
        </Listitem>
        <Listitem>
          Technologies: Typescript, React, Redux, Node.js, Express, MySQL
        </Listitem>
      </List>

      <ProjectName repoName='MERN-Cbae' projectName='cBay' />
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <Listitem>
          E-commerce website (like eBay) to sell and buy a variery of products
        </Listitem>
        <Listitem>
          Technologies: React, Redux, Node.js, Express, MongoDB
        </Listitem>
      </List>

      <Typography sx={{ mt: '20px' }}>
        To be added...
      </Typography>
    </PageContainer>
  )
}