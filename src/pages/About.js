import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import Title from "../components/Common/Title";
import PageContainer from "../components/Common/PageContainer";
import Bold from "../components/Common/Bold";
import Listitem from "../components/Common/Listitem";
import background from "../images/about-bg.jpg"
import Loading from '../components/Loading';

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = background;
    img.onload = () => setIsLoading(false);
  }, []);

  if (isLoading) return <Loading/>

  return (
    <PageContainer bgImage={background} isFullHeight={true}>
      <Title>Career</Title>

      <Bold>Aug 2023 - Current: Full Stack Software Developer @ Avondx</Bold>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <Listitem>
          Developed new interactive pages for a data visualization web app using React, Typescript, Node.js, and MySQL, 
          integrating AI to analyze real-time recordings of customer service representatives, which increased user experience by 40%
        </Listitem>
        <Listitem>
          Achieved 90% of positive customer feedback by architecting and developing a landing page with optimized Rest APIs and an
          intuitive dashboard interface
        </Listitem>
        <Listitem>
          Streamlined 60% of internal workloads by developing a feature auto-generating daily performance reports in Node.js based on customer engagements and adherence
        </Listitem>
        <Listitem>
          Optimized 30% of Python application codebase for SMS notifications running on AWS Lambda, ensuring efficiency, maintainability, and adherence to coding best practices
        </Listitem>
        <Listitem>
          Enhanced team collaboration by 15% through effective code review practices with senior developers in an Agile Scrum team
        </Listitem>
        <Listitem>
          Resolved 40% of AI-based Voice Analytics issues by investigating data on MySQL and used results to create customer facing reports
        </Listitem>
      </List>

      <Bold>Mar 2022 - Aug 2023: Technical Consultant / Server @ Nakamori Japanese Restaurant</Bold>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <Listitem>
          Achieved continuous deliveries of project milestones on time and facilitated effective communication while developing a
          WordPress website for the restaurant and its new location
        </Listitem>
        <Listitem>
          Streamlined the process of calculating weekly tips by 70% by developing an automation tool on Google Spreadsheet
        </Listitem>
      </List>

      <Bold>Oct 2019 - Feb 2021: Software Engineer @ SPIC</Bold>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <Listitem>
          Enhanced client's emailing efficiency by 30% through a feature facilitating document attachment to web invoices using Java, Vue, and Oracle DB, with an understanding of Object-Oriented Design          
        </Listitem>
        <Listitem>
          Implemented a paperless invoicing system, which enabled invoice issuance without the necessity for data entry
        </Listitem>
        <Listitem>
          Conducted daily monitoring of production DB, web, and SFTP servers and their logs, ensuring timely reporting of issues
        </Listitem>
        <Listitem>
          Expedited the resolution of technical errors within a 24-hour timeframe by conducting in-depth research on PL/SQL stored procedures for batch processing and debugging
        </Listitem>
        <Listitem>
          Decreased direct user access to the FTP server by 70% by displaying products on a product management app
        </Listitem>
      </List>

      <Bold>Apr 2013 - May 2019: QA Engineer @ Taiju Life Insurance</Bold>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <Listitem>
          Executed comprehensive acceptance tests, resulting in zero reported issues from end users          
        </Listitem>
        <Listitem>
          Decreased 4 hours of work a week by identifying areas for modification of the legacy HR system in collaboration with the development team, attending requirements gatherings, and testing
        </Listitem>
        <Listitem>
          Provided technical support for troubleshooting with 70+ branch leaders through phone and emails
        </Listitem>
      </List>

      <Title>Education</Title>
      <Bold>Jan 2022 - Apr 2023: Software Engineering Technician Diploma @ Centennial College</Bold>          
      <Bold>Apr 2009 - Mar 2013: Bachelor of British and American Literature @ Aoyama Gakuin University</Bold>

      <Title>Outside of Work</Title>

      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <Listitem>
          Playing tennis: I started it when I was 5 years old learned great lessons including my mental stability.
        </Listitem>
        <Listitem>
          Cooking: Regular food and Japanese, Korean, and Chinese food
        </Listitem>
        <Listitem>
          Baking: Loafs, cookies, etc
        </Listitem>
        <Listitem>
          Exploring in Nature
        </Listitem>
      </List>
    </PageContainer>
  )
}