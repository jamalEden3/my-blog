import React, { useEffect } from 'react';
import style from '../../styles/Post.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getPostBySlug } from '../../lib/firebase.config';
import { getFormattedDate } from '../../lib/utils';
import Layout from '../../components/Layout';


function PostPage({ post }) {
    const router = useRouter();
    const slug = router.query;

    useEffect(() => {
        if(!post) {
            router.push('/404');
            return;
        }
    }, []);

    if(!post) {
        return null
    }
    

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className='container overflow-hidden mt-20 py-10 px-36'>
          <div className=' text-center flex flex-col gap-5 mb-8'>
            <h1 className='mb-2 text-center font-extrabold'>{post.title}</h1>
            <p className='text-grey700'>{getFormattedDate(post.createdAt)}</p>
          </div>
          <div className={` text-grey700 text-xl tracking-wide leading-7 ${style.Content}`} dangerouslySetInnerHTML={{__html: post.content}}></div>


          <div className='shapeOne w-36 h-36 rounded-full bg-backgroundDark blur-3xl opacity-20 absolute bottom-50 right-40 z-0'>
          </div>
          <div className='shapeTwo w-48 h-48 rounded-full bg-lightGreen opacity-30 blur-3xl absolute bottom-14 left-80'>
          </div>
          <div className='shapeOne w-72 h-72 rounded-full bg-ClrOrg blur-3xl opacity-20 absolute bottom-50 right-70 z-0'>
          </div>
          <div className='shapeTwo w-48 h-48 rounded-full bg-green opacity-30 blur-3xl absolute bottom-14 left-50 z-0'>
          </div>
        </article>
    </>
  )
}


export const getServerSideProps = async (context) => {
    const post = await getPostBySlug(context.query.slug)
    return {
      props: {
        post,
      },
    };
}

export default PostPage