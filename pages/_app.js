import Head from 'next/head'
import MgFooter from '../components/MgFooter';
import MgHeader from '../components/MgHeader';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Meme Generator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <MgHeader/>

      <Component {...pageProps} />

      <MgFooter/>
    </>
  )
}

export default MyApp
