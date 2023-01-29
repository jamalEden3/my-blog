import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Layout from '../components/Layout';

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
          {posts.map((post) => <h1 key={post.title}>{post.title}</h1>)}
        </main>
      </Layout>
    </div>
  )
}

export async function getServerSideProps() {
  const posts = await getPosts();

  return {
    props: {
      posts
    }
  }
}

export default Home;