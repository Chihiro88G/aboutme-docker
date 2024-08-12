import Box from '@mui/material/Box';

import { getPages } from '../utils/getPages';
import Logo from '../components/Logo';
import NavContainer from '../components/NavContainer';
import PageButton from './PageButton';

export default function TopNavBar() {
  return (
    <NavContainer component='header'>
      <Logo />
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'end' }}>
        {getPages().map((page) => (
          <PageButton
            pageName={page.name}
            path={page.path}
            key={page.name}
          />
        ))}
      </Box>
    </NavContainer>
  );
}

