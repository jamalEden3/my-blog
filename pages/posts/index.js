import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Home.module.css';
import { getPosts } from '../../lib/firebase.config';
import Head from 'next/head';

import { BsArrowRightCircle } from 'react-icons/bs';
import { getFormattedDate } from '../../lib/utils';

function posts({ posts }) {
  return (
    <section className='container overflow-hidden flex flex-row gap-5 mt-20 py-10 -z-0'>
      <Head>
        <title>Jamal's Blog | All Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-3 justify-around gap-14'>
      {
              posts
              .map((post) => (
                <div key={post.slug} className={` h-80 flex flex-col py-10 px-4 mx-4 ${styles.PostCard}`}>
                  <div className=' basis-1/6 mb-3 flex flex-row justify-between items-center text-ClrOrg'>
                    <span className='text-xl text-blue'>{post.category}</span>
                    <p className='text-xl text-blue underline'>{getFormattedDate(post.createdAt)}</p>
                  </div>
                  <div className='basis-4/6 flex flex-col gap-3'>
                    <h2 className='text-3xl font-semibold'>{post.title}</h2>
                    <div className=' text-grey700' dangerouslySetInnerHTML={{__html: post.desc}}></div>
                  </div>
                  <div className='basis-1/6 flex flex-row gap-4 items-center text-xl '>
                    <Link href={`/posts/${post.slug}`} className='flex flex-row gap-4'>
                      <BsArrowRightCircle className='text-blackClr text-3xl cursor-pointer' />
                      <p>Read more...</p>
                    </Link>
                  </div>
                </div>
              ))
            }
      </div>      
    </section>
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