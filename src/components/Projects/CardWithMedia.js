import { Card, CardMedia } from '@mui/material';


export default function CardWithMedia({ children, imgUrl }) {
  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        m: '10px',
        mb: '15px',
        borderRadius: '10px',
        ':hover': {
          boxShadow: 5,
        },
      }}
    >
      <CardMedia
        component='img'
        sx={{ 
          aspectRatio: '16 / 9',
          objectFit: 'cover',
        }}
        image={imgUrl}
        title="default image"
      />
      {children}
    </Card>
    )
}
