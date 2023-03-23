import React from 'react';
import styles from '../styles/LatestPosts.module.css';

function LatestPosts({ posts }) {
  console.log(posts)
  return (
        <section id="latest" className='w-100 h-[calc(100vh-5rem)]'>
            <div className='container'>
                <h1>Latest Posts</h1>
                <div className={styles.Post}>
                  {
                    posts.map((post) => <h1 key={post.title}>{post.title}</h1>)
                  }
                </div>
            </div>
        </section>
  )
}
export default LatestPosts;
