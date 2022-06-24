import styles from '../styles/Home.module.css';
import Button from '@mui/material/Button';

export default function MgHeader() {
  return (
    <>
      <div className={styles.mgHeader}>
        <h1 className={styles.title}>
          Welcome to Meme Generator
        </h1>
      </div>
    </>
  )
}
