import Image from 'next/image'
import styles from '../styles/Home.module.css';

export default function MgMemeCard({meme}) {
  return (
    <>
      <div className={styles.card}>
        <h2>{meme?.title || 'No memes ?'}</h2>
        <p>r/{meme?.subreddit || 'sadcat'}</p>
        <Image src={meme?.url || "https://pbs.twimg.com/media/EAmr-PAWsAEoiWR.jpg"} alt="meme" width={256} height={256} />     
      </div>
    </>
  )
}