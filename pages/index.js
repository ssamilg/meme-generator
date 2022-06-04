import styles from '../styles/Home.module.css'
import MgCardContainer from '../components/MgCardContainer';

export default function Home() {


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Meme Generator
        </h1>

        <MgCardContainer/>

      </main>
    </div>
  )
}
