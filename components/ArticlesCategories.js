import React from 'react';
import styles from '../styles/Home.module.css';

import { BsArrowRightCircle } from 'react-icons/bs';
import { getFormattedDate } from '../lib/utils';
import Link from 'next/link';


function ArticlesCategories({ posts }) {
  console.log(posts)
  return (
    <>
     {/* ******* Reatc.js sections ******* */}
        <section className=' flex flex-col gap-10 my-4 '>
          <div className='flex flex-row items-center gap-1'>
            <h2 className=' text-xl'>React</h2>
            <span className=' w-screen h-0.5 bg-backgroundDark relative'>
              <Link href={'/posts'} className='absolute right-0 top-0 py-2 px-4 hover:bg-greenClr transition-all'>
                See all
              </Link>
            </span>
          </div>
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


        {/* ******* Next.js sections ******* */}
        {/* <section className=' flex flex-col gap-4 md:h-[calc(100vh-5rem)] mt-20'>
          <div className='flex flex-row items-center gap-1'>
            <h2 className=' text-xl'>React</h2>
            <span className=' w-screen h-0.5 bg-backgroundDark relative'>
              <button className='absolute right-0 top-0 py-2 px-4hover:bg-greenClr transition-all'>See all</button>
            </span>
          </div>
          <div className='grid grid-cols-3 justify-around gap-12 px-36'>
            {
              posts.map((post) => (
                <div key={post.slug} className={`px-8 py-10 grid items-center ${styles.PostCard}`}>
                  <div className='flex flex-row justify-between items-center mb-3 text-ClrOrg'>
                    <span className='text-xl text-blueClr'>React</span>
                    <p className='text-xl text-blueClr'>{getFormattedDate(post.createdAt)}</p>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <h2 className='text-3xl font-semibold'>{post.title}</h2>
                    <p className=' text-grey700'>{post.desc}</p>
                  </div>
                  <div className='flex flex-row gap-4 items-center text-xl '>
                    <BsArrowRightCircle className='text-ClrOrg text-3xl cursor-pointer' />
                    <p>Read more...</p>
                  </div>
                </div>
              ))
            }
          </div>
        </section> */}

        {/* ******* Css.js sections ******* */}
        {/* <section className=' flex flex-col gap-4 md:h-[calc(100vh-5rem)] mt-20'>
          <div className='flex flex-row items-center gap-1'>
            <h2 className=' text-xl'>React</h2>
            <span className=' w-screen h-0.5 bg-backgroundDark relative'>
              <button className='absolute right-0 top-0 py-2 px-4hover:bg-greenClr transition-all'>See all</button>
            </span>
          </div>
          <div className='grid grid-cols-3 justify-around gap-12 px-36'>
            {
              posts.map((post) => (
                <div key={post.slug} className={`px-8 py-10 grid items-center ${styles.PostCard}`}>
                  <div className='flex flex-row justify-between items-center mb-3 text-ClrOrg'>
                    <span className='text-xl text-blueClr'>React</span>
                    <p className='text-xl text-blueClr'>{getFormattedDate(post.createdAt)}</p>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <h2 className='text-3xl font-semibold'>{post.title}</h2>
                    <p className=' text-grey700'>{post.desc}</p>
                  </div>
                  <div className='flex flex-row gap-4 items-center text-xl '>
                    <BsArrowRightCircle className='text-ClrOrg text-3xl cursor-pointer' />
                    <p>Read more...</p>
                  </div>
                </div>
              ))
            }
          </div>
        </section> */}
    </>
  )
}

export default ArticlesCategories