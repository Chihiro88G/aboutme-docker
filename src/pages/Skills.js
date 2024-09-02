import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Title from "../components/Title";
import PageContainer from "../components/PageContainer";
import Bold from "../components/Bold";

export default function Skills() {

  return (
    <PageContainer bgColor='whitesmoke'>
      <Title>Skills</Title>

      <Bold>Programming Languages</Bold>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          JavaScript, Typescript, Java, Python, C#
        </ListItem>
      </List>

      <Bold>Web Technologies</Bold>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          React, Node, Express, Vue, Spring Boot, HTML, CSS, MUI
        </ListItem>
      </List>

      <Bold>Database</Bold>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          Relational Databases (Oracle RDBMS, MySQL, SQL Server)
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
        No SQL (MongoDB)
        </ListItem>
      </List>

      <Bold>Version Control</Bold>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          Git, Github, Subversion
        </ListItem>
      </List>

      <Bold>IT Operations</Bold>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          Waterfall and Agile practices
        </ListItem>
      </List>

      <Bold>Exposure to Infrastructure</Bold>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          Docker, AWS(S3, RDS, Lambda)
        </ListItem>
      </List>
    </PageContainer>
  )
}