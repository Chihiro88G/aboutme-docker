import List from '@mui/material/List';
import Title from "../components/Common/Title";
import PageContainer from "../components/Common/PageContainer";
import Bold from "../components/Common/Bold";
import Listitem from '../components/Common/Listitem';
import background from "../images/skills-bg.png"

export default function Skills() {

  return (
    <PageContainer bgImage={background}>
      <Title>Skills</Title>

      <Bold>Programming Languages</Bold>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <Listitem>
          JavaScript, Typescript, Java, Python, C#
        </Listitem>
      </List>

      <Bold>Web Technologies</Bold>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <Listitem>
          React, Node, Express, Vue, Spring Boot, HTML, CSS, MUI
        </Listitem>
      </List>

      <Bold>Database</Bold>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <Listitem>
          Relational Databases (Oracle RDBMS, MySQL, SQL Server)
        </Listitem>
        <Listitem>
          No SQL (MongoDB)
        </Listitem>
      </List>

      <Bold>Version Control</Bold>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <Listitem>
          Git, Github, Subversion
        </Listitem>
      </List>

      <Bold>IT Operations</Bold>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <Listitem>
          Waterfall and Agile practices
        </Listitem>
      </List>

      <Bold>Exposure to Infrastructure</Bold>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <Listitem>
          Docker, AWS(S3, RDS, Lambda)
        </Listitem>
      </List>
    </PageContainer>
  )
}