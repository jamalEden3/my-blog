import React from 'react';
import styles  from '../styles/Hero.module.css';

import { RiFacebookBoxLine } from 'react-icons/ri';
import { SlSocialTwitter } from 'react-icons/sl';
import { CiLinkedin } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import { BsFillNodePlusFill } from 'react-icons/bs';




const Hero = () => {

  return (
    <section id="hero" className='-z-0 basis-2/5'>
      <div className='flex flex-col pb-5'>
        <div className='flex flex-col gap-2 relative'>
          <h1 className='text-lg mb-2'>It's <br/> <span className='text-9xl text-blue'>Jamal</span></h1>
          <p className='text-xl mb-2'>A front-End developer. </p>
          <p className='flex items-center'>
            <span className=' text-orange bg-blue p-4 rounded-lg font-bold text-2xl'>React.js </span> 
            <BsFillNodePlusFill className='mx-4 text-blue text-8xl' /> 
            <span className=' text-blue bg-orange p-4 rounded-lg font-bold text-2xl'> Next.js</span>
            <BsFillNodePlusFill className='mx-4 text-orange text-8xl' /> 
            <span className=' text-orange bg-blue p-4 rounded-lg font-bold text-2xl'>Node.js </span>
          </p>
          <div className={`${styles.BtnContainer} mb-8`}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <p className={styles.BtnBox}>
                <button>
                  Hire Me
                </button>
              </p>
          </div>{/* button div */}
          <div className='flex gap-6 mt-4 '>
              <RiFacebookBoxLine className='text-3xl cursor-pointer hover:text-blue transition-all' />
              <SlSocialTwitter className='text-3xl cursor-pointer hover:text-blue transition-all' />
              <CiLinkedin className='text-3xl cursor-pointer hover:text-blue transition-all' />
              <FiGithub className='text-3xl cursor-pointer hover:text-blue transition-all' />
          </div>{/* socia; section 2 */}
        </div>{/* Hero info */}
      </div>{/* Hero div */}
    </section>
  )
}

export default Hero;
