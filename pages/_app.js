import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import '../styles/globals.css';
import Head from 'next/head';
import MgFooter from '../components/MgFooter';
import MgHeader from '../components/MgHeader';

export default function App({ Component, pageProps }) {
  return (
    <Theme
      appearance="dark"
      accentColor="blue"
      grayColor="slate"
      radius="medium"
      scaling="100%"
    >
      <Head>
        <title>Meme Generator</title>
        <meta name="description" content="A modern meme generator built with Next.js and Radix UI" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="app-container">
        <div className="content-wrapper">
          <MgHeader />
          <Component {...pageProps} />
        </div>
        <MgFooter />
      </div>
    </Theme>
  );
}

