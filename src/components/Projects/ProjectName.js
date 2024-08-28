import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';

export default function ProjectName({ repoName, projectName }) {
  const repoLink = `https://github.com/Chihiro88G/${repoName}`;

  return (
    <Typography fontWeight='bold' variant="h6">
      <Link to={repoLink} target="_blank" >{projectName}</Link>
    </Typography>  
  );
}
