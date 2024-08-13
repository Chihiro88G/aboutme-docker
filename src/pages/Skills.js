import { Box, Typography, useMediaQuery } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function Skills() {
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
          height: '100%',
          margin: '0 auto',
          padding: isDesktop ? '50px' : '40px',
        }} 
        maxWidth="lg"
      >
      <Typography
        variant={isDesktop ? 'h4' : 'h6'}
        color='#0d7858'
      >
        Skills
      </Typography>

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
        Business Tools
      </Typography>

      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          Jira, Google Analytics, MS Office
        </ListItem>
      </List>

      <Typography fontWeight='bold'>
        Infrastructure
      </Typography>

      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          Docker, AWS (ECS, Lambda, RDS, S3)
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

    </Box>
  </Box>
  )
}