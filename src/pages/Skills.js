import { Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Title from "../components/Title";
import PageContainer from "../components/PageContainer";

export default function Skills() {

  return (
    <PageContainer bgColor='whitesmoke'>
      <Title>Skills</Title>

      <Typography fontWeight='bold'>
        Programming Languages
      </Typography>

      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          JavaScript, Typescript, Java, Python, C#
        </ListItem>
      </List>

      <Typography fontWeight='bold'>
        Web Technologies
      </Typography>

      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          React, Node, Express, Vue, Spring Boot, HTML, CSS, MUI
        </ListItem>
      </List>

      <Typography fontWeight='bold'>
        Database
      </Typography>

      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          Relational Databases (Oracle RDBMS, MySQL, SQL Server)
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
        No SQL (MongoDB)
        </ListItem>
      </List>

      <Typography fontWeight='bold'>
        Version Control
      </Typography>

      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          Git, Github, Subversion
        </ListItem>
      </List>

      <Typography fontWeight='bold'>
        IT Operations
      </Typography>

      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          Waterfall and Agile practices
        </ListItem>
      </List>

      <Typography fontWeight='bold'>
        Exposure to Infrastructure
      </Typography>

      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          Docker, AWS(S3, RDS, Lambda)
        </ListItem>
      </List>
    </PageContainer>
  )
}