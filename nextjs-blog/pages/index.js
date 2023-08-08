import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { navLinks } from "../components/Navbar";
import Link from "next/link";
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    
    <div className={styles.container}>
      
      <Head>
        <title>Darius Ghomashchian</title>
        <link rel="icon" href="/logoMain.png" />
      </Head>
      <div className={styles.navigation}>
        <header>
          <Navbar/>
        </header>
      </div>
      <main>
      
        <h1 className={styles.title}> 
          Hi, I'm Darius
        </h1>

        <p className={styles.description}>
          I'm a Software Engineer specialising in automation.
        </p>
        <div className={styles.subtitle}>
          <h3>Heres What Im working on:</h3>
        </div>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Github &rarr;</h3>
            <p>Find my latest open source project and contributions.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Blog &rarr;</h3>
            <p>Check out my latest article on my personal blog.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Novaroom &rarr;</h3>
            <p>AI-powered SAAS solution to generate SEO-optimized blogs.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Automated Blog &rarr;</h3>
            <p>
              Phluxr is a blog which I have fully automated with publishing bots.
            </p>
          </a>
        </div>
      </main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer> */}

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: #fded1c;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>

    </div>
  )
}
