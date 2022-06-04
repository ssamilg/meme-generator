import styles from '../styles/Home.module.css';
import MgMemeCard from './MgMemeCard';
import axios from 'axios';
import { useState } from 'react';
import Button from '@mui/material/Button';

export default function MgCardContainer() {
  const [meme, setMeme] = useState(null);
  const fetchMeme = () => {
    axios.get('https://meme-api.herokuapp.com/gimme')
      .then((res) => {
        setMeme(res.data);
      })

    console.log(meme);
  };

  return (
    <>
      <p className={styles.description}>
        Click the button for some memes !
      </p>

      <Button variant="outlined" onClick={fetchMeme}>The Button</Button>

      <div className={styles.grid}>
        <MgMemeCard meme={meme}/>
      </div>
    </>
  )
}