import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box } from "@mui/material";

import { getPages } from "../utils/getPages";
import Logo from "../components/Logo";
import NavContainer from "../components/NavContainer";
import PageButton from "./PageButton";

export default function Footer() {
  return (
    <NavContainer component='footer'>
      <Box
        sx={{
          margin: "0 auto",
          padding: "30px 0",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Logo />
        </Box>
        <Box sx={{ display: 'flex' }}>
          {getPages().map((page) => (
          <PageButton 
            pageName={page.name}
            path={page.path}
            key={page.name}
          />
        ))}
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} href="https://www.linkedin.com/in/chihiro-h/" target="_blank" />
          <BottomNavigationAction label="Github" icon={<GitHubIcon />} href="https://github.com/Chihiro88G" target="_blank" />
        </Box>
      </Box>
    </NavContainer>
  );
};
