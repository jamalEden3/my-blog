import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Layout from '../components/Layout';
import Hero from '../components/Hero';

import { getPosts } from '../lib/firebase.config';

const Home = ({ posts }) => {
  console.log(posts)
  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <Hero />
        </main>
      </Layout>
    </div>
  )
}

/* export async function getServerSideProps() {
  const posts = await getPosts();

  return {
    props: {
      posts
    }
  }
}
 */
export default Home;