import styles from '../styles/Home.module.css';
import MgMemeCard from './MgMemeCard';
import axios from 'axios';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function MgCardContainer() {
  const [meme, setMeme] = useState(null);
  const [subredditName, setSubredditName] = useState('');

  const fetchMeme = () => {
    let url = 'https://meme-api.herokuapp.com/gimme';
    url = subredditName !== '' ? `${url}/${subredditName}` : url;  

    axios.get(url)
      .then((res) => {
        setMeme(res.data);
      })

    console.log(meme);
  };

  const changeSubredditName = (event) => {
    setSubredditName(event.target.value);
  };

  return (
    <>
      <p className={styles.description}>
        Click the button for some memes !
      </p>

      <div className='flex-row'>
        <TextField value={subredditName} onChange={changeSubredditName} id="outlined-basic" label="Outlined" variant="outlined" size="small"/>
        <Button variant="outlined" onClick={fetchMeme}>The Button</Button>
      </div>

      <div className={styles.grid}>
        <MgMemeCard meme={meme}/>
      </div>
    </>
  )
}