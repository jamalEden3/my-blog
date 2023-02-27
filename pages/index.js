import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { userAuth } from '../context/userAuth';
import LatestPosts from '../components/LatestPosts';

const Home = ({ posts }) => {

  const [user] = userAuth();
    return (
    <div>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <Hero />
          <LatestPosts />
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