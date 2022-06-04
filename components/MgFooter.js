import Image from 'next/image'
import styles from '../styles/Home.module.css';

export default function MgFooter() {
  return (
    <>
      <footer className={styles.footer}>
          Developed by{' '}
          <b>SSG</b>

        {/* 
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />     
        */}
      </footer>
    </>
  )
}