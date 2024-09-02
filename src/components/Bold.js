import { Typography } from "@mui/material";

export default function Bold({ children }) {

  return (
    <Typography fontWeight='bold'>
      {children}
    </Typography>
  )
}