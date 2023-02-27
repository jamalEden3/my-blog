import Image from 'next/image';
import React from 'react';
import styles  from '../styles/Hero.module.css';
import HeroImg from '../public/hero.png';


function Hero() {
  return (
    <section id="hero" className='z-10 h-[calc(100vh-6rem)] grid items-center'>
      <div className='container'>
        <div className='flex justify-between items-center mx-7'>
          <div className='flex flex-col justify-between gap-2'>
            <h1 className='text-4xl mb-4'><span className='capitalize'>Hey! </span><span className='text-8xl bold'>I'm <span className='text-primaryClr'>J</span><span className='text-ClrOrg'>ama</span><span className='text-ClrGreen'>l</span></span></h1>
            <p className='text-xl text-grey600'>A front-End developer, React || Next.js stack</p>
            <div className={styles.BtnContainer}>
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
                <button className={styles.HireBtn}>
                  Hire Me
                </button>
              </p>
            </div>{/* button div */}
          </div>{/* Hero info */}

          <div className=''>
            <Image
              src={HeroImg}
              width={500}
              height={500}
              alt="hero"
            />
          </div>{/* Hero image */}
        </div>{/* Hero div */}
      </div>{/* container */}
    </section>
  )
}

export default Hero