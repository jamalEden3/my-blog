import React from 'react';

import Layout from '../../components/Layout';
import { getPosts } from '../../lib/firebase.config';

function posts({ posts }) {
  return (
    <Layout>
      {posts.map((post)=> <h1 key={post.title}>{post.title}</h1>)}
    </Layout>
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
export default posts