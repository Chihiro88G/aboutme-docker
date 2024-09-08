import { Avatar, useMediaQuery } from '@mui/material';
import myImg from "../../images/me.jpg"

export default function MyPic() {
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <Avatar
      alt="Remy Sharp"
      src={myImg}
      sx={{ 
        width: 250,
        height: 250,
        mt: isDesktop ? '60px' : '',
        m: isDesktop ? '' : '20px auto'
      }}
    />
  );
}
