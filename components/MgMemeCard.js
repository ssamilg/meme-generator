import styles from '../styles/Home.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ExitToApp from '@mui/icons-material/ExitToApp';

export default function MgMemeCard({meme}) {
  return (
    <>
      <Card
        // sx={{ boxShadow: 'none', border: '1px solid #e0e0e0' }} 
        className={styles.memeCard}
      >
        <CardContent className={styles.memeCardContent}>
          <Typography variant="h6" component="div">
            {meme?.title || 'No memes ?'}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            r/{meme?.subreddit || 'sadcat'}
          </Typography>
        </CardContent>

        <CardMedia
          className={styles.memeCardMedia}
          component="img"
          image={meme?.url || "https://pbs.twimg.com/media/EAmr-PAWsAEoiWR.jpg"}
          alt="meme"
        />

        <CardActions className={styles.memeCardActions}>
          <a href={meme?.postLink || '#'}>
            <Button
              size="small"
              variant="outlined"
              endIcon={<ExitToApp/>}
            >
              Source
            </Button>
          </a>
        </CardActions>
      </Card>
    </>
  )
}