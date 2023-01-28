import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Layout from '../components/Layout';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          
        </main>
      </Layout>
    </div>
  )
}
