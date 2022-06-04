import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MgMemeCard({meme}) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {meme?.title || 'No memes ?'}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            r/{meme?.subreddit || 'sadcat'}
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
          height="256"
          image={meme?.url || "https://pbs.twimg.com/media/EAmr-PAWsAEoiWR.jpg"}
          alt="meme"
        />

        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      {/* <div className={styles.card}>
        <h2>{meme?.title || 'No memes ?'}</h2>
        <p>r/{meme?.subreddit || 'sadcat'}</p>
        <Image src={meme?.url || "https://pbs.twimg.com/media/EAmr-PAWsAEoiWR.jpg"} alt="meme" width={256} height={256} />     
      </div> */}
    </>
  )
}