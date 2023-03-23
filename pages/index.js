import Head from 'next/head';
import ArticlesCategories from '../components/ArticlesCategories';




import Hero from '../components/Hero';
import PostsSection from '../components/PostsSection';

import { userAuth } from '../context/userAuth';
import { getPosts } from '../lib/firebase.config';

const Home = ({posts}) => {

    return (
    <div className=''>
      <Head>
        <title>Jamal's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='relative -z-0 container 2xl:px-10'>
        <div className='overflow-hidden flex md:flex-row justify-between flex-col mt-20 py-10 -z-0'>
          <Hero />
          <PostsSection posts={posts} />
        </div>
        <ArticlesCategories posts={posts}/>
      </main>
        
        <div className='shapeTwo w-48 h-48 rounded-full bg-lightGreen opacity-50 blur-3xl fixed bottom-14 left-80 z-[-1]'>
        </div>
        <div className='shapeTwo w-48 h-48 rounded-full bg-ClrOrg opacity-50 blur-3xl fixed top-44 right-80 z-[-1]'>
        </div>
        <div className='shapeTwo w-48 h-48 rounded-full bg-primaryClr opacity-20 blur-3xl fixed top-24 left-14 z-[-1]'>
        </div>
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