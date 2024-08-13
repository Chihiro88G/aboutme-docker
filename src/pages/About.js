import { Box, Typography, useMediaQuery } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function About() {
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
          Career
        </Typography>

        <Typography fontWeight='bold'>
          Aug 2023 - Current: Full Stack Software Developer @ Avondx
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            Enhance 40% of web apps to analyze the performance of frontline workers with the AI-based Voice Analytics solution by
            coding in JavaScript, React, Typescript, Node.js, and MySQL and performing code reviews with senior developers
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Achieve 90% of positive customer feedback by architecting and developing a landing page with optimized Rest APIs and an
            intuitive dashboard interface
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Streamline 50% of issuing daily performance reports by developing a feature auto-generating reports based on frontline
            workers' customer engagements and adherence
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Optimize 30% of Python application codebase for SMS notifications leveraging Twilio and running on AWS Lambda,
            ensuring efficiency and maintainability
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Help resolve 40% of cases where the Voice Analytics solution didn't fully capture Customer Service Agents' customer
            engagements by investigating data on MySQL and creating visually appealing reports
          </ListItem>
        </List>

        <Typography fontWeight='bold'>
          Mar 2022 - Aug 2023: Technical Consultant / Server @ Nakamori Japanese Restaurant
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            Achieved continuous deliveries of project milestones on time and facilitated effective communication while developing a
            WordPress website for the restaurant and its new location
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Streamlined the process of calculating weekly tips by 70% by developing an automation tool on Google Spreadsheet
          </ListItem>
        </List>

        <Typography fontWeight='bold'>
          Oct 2019 - Feb 2021: Software Engineer @ SPIC
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            Enhanced client's emailing efficiency by 20% through the introduction of a novel feature facilitating document attachment to
            web invoices using Java, Vue, and Oracle DB, with an understanding of Object-Oriented Design          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Lessened paper usage by 10% through the implementation of a paperless invoicing system, which enabled invoice issuance
            without the necessity for data entry
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Expedited resolution of technical errors within a 24-hour timeframe by monitoring DB/web servers, in-depth research on
            complex stored procedures run by Task Scheduler, and debugging
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Reduced 10% of workload and 20 emails/week by modifying software to enable the client to register new users
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Reduced 10%+ frequency of users accessing a file server by showing the list of products on a products management web app
          </ListItem>
        </List>

        <Typography
          variant={isDesktop ? 'h4' : 'h6'}
          color='#0d7858'
        >
          Education
        </Typography>

        <Typography fontWeight='bold' marginTop='10px' marginBottom='10px'>
          Jan 2022 - Apr 2023: Software Engineering Technician Diploma @ Centennial College
        </Typography>
        <Typography fontWeight='bold' marginTop='10px' marginBottom='10px'>
          Apr 2009 - Mar 2013: Bachelor of British and American Literature @ Aoyama Gakuin University
        </Typography>


        <Typography
          variant={isDesktop ? 'h4' : 'h6'}
          color='#0d7858'
        >
          Outside of Work
        </Typography>

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

      </Box>
    </Box>
  )
}