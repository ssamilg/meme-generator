import Image from 'next/image'
import styles from '../styles/Home.module.css';

export default function MgFooter() {
  return (
    <footer className={styles.footer}>
      <div className='flex-row'>
        Developed by SSG
      </div>

      {/* <div className='flex-row'>
        Powered by{' '}
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />     
      </div> */}
    </footer>
  )
}