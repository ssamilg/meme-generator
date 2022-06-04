import axios from 'axios';
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [meme, setMeme] = useState(null);
  const fetchMeme = () => {
    axios.get('https://meme-api.herokuapp.com/gimme')
      .then((res) => {
        setMeme(res.data);
      })

    console.log(meme);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Meme Generator
        </h1>

        <p className={styles.description}>
          Click the button for some memes !
        </p>

        <button className={styles.button} onClick={fetchMeme}>The Button</button>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>{meme?.title}</h2>
            <p>r/{meme?.subreddit}</p>
            <Image src={meme?.url || "https://pbs.twimg.com/media/EAmr-PAWsAEoiWR.jpg"} alt="meme" width={256} height={256} />     
          </div>
        </div>
      </main>
    </div>
  )
}
