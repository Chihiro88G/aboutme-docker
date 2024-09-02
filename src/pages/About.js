import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Title from "../components/Title";
import PageContainer from "../components/PageContainer";
import Bold from "../components/Bold";

export default function About() {

  return (
    <PageContainer bgColor='whitesmoke' isFullHeight={true}>
      <Title>Career</Title>

      <Bold>Aug 2023 - Current: Full Stack Software Developer @ Avondx</Bold>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          Developed new interactive pages for a data visualization web app using React, Typescript, Node.js, and MySQL, 
          integrating AI to analyze real-time recordings of customer service representatives, which increased user experience by 40%
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Achieved 90% of positive customer feedback by architecting and developing a landing page with optimized Rest APIs and an
          intuitive dashboard interface
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Streamlined 60% of internal workloads by developing a feature auto-generating daily performance reports in Node.js based on customer engagements and adherence
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Optimized 30% of Python application codebase for SMS notifications running on AWS Lambda, ensuring efficiency, maintainability, and adherence to coding best practices
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Enhanced team collaboration by 15% through effective code review practices with senior developers in an Agile Scrum team
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Resolved 40% of AI-based Voice Analytics issues by investigating data on MySQL and used results to create customer facing reports
        </ListItem>
      </List>

      <Bold>Mar 2022 - Aug 2023: Technical Consultant / Server @ Nakamori Japanese Restaurant</Bold>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          Achieved continuous deliveries of project milestones on time and facilitated effective communication while developing a
          WordPress website for the restaurant and its new location
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Streamlined the process of calculating weekly tips by 70% by developing an automation tool on Google Spreadsheet
        </ListItem>
      </List>

      <Bold>Oct 2019 - Feb 2021: Software Engineer @ SPIC</Bold>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          Enhanced client's emailing efficiency by 30% through a feature facilitating document attachment to web invoices using Java, Vue, and Oracle DB, with an understanding of Object-Oriented Design          
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Implemented a paperless invoicing system, which enabled invoice issuance without the necessity for data entry
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Conducted daily monitoring of production DB, web, and SFTP servers and their logs, ensuring timely reporting of issues
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Expedited the resolution of technical errors within a 24-hour timeframe by conducting in-depth research on PL/SQL stored procedures for batch processing and debugging
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Decreased direct user access to the FTP server by 70% by displaying products on a product management app
        </ListItem>
      </List>

      <Bold>Apr 2013 - May 2019: QA Engineer @ Taiju Life Insurance</Bold>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          Executed comprehensive acceptance tests, resulting in zero reported issues from end users          
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Decreased 4 hours of work a week by identifying areas for modification of the legacy HR system in collaboration with the development team, attending requirements gatherings, and testing
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Provided technical support for troubleshooting with 70+ branch leaders through phone and emails
        </ListItem>
      </List>

      <Title>Education</Title>
      <Bold>Jan 2022 - Apr 2023: Software Engineering Technician Diploma @ Centennial College</Bold>          
      <Bold>Apr 2009 - Mar 2013: Bachelor of British and American Literature @ Aoyama Gakuin University</Bold>

      <Title>Outside of Work</Title>

      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          Playing tennis: I started it when I was 5 years old learned great lessons including my mental stability.
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Cooking: Regular food and Japanese, Korean, and Chinese food
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Baking: Loafs, cookies, etc
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Exploring in Nature
        </ListItem>
      </List>
    </PageContainer>
  )
}