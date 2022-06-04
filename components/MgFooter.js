import Image from 'next/image'
import styles from '../styles/Home.module.css';

export default function MgFooter() {
  return (
    <>
      <footer className={styles.footer}>
        {/* <div className='flex-row'>
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />     
        </div> */}

        <div className='flex-row'>
          <div>
            Using{' '}
            <a href='https://github.com/D3vd/Meme_Api'>Meme-api</a>
          </div>
        </div>

        <div className='flex-row'>
          <div className={styles.ssgSignature}>
            Developed by{' '}
            <a href='https://github.com/ssamilg'>SSG</a>
          </div>
        </div>
      </footer>
    </>
  )
}