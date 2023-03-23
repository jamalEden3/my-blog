import React, {useState, useEffect} from 'react';

import Link from 'next/link';
import logo from '../public/logo.svg'
import Image from 'next/image';
import { CgClose } from 'react-icons/cg';
import { HiMenuAlt3 } from 'react-icons/hi';
import { BsSunFill } from 'react-icons/bs';
import { FiRss } from 'react-icons/fi';

import { userAuth } from '../context/userAuth';
import { signOut } from '../lib/firebase.config';


function Header() {
  
  const [user] = userAuth();
  const [navOpen, setnavOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if(window.scrollY >= 80) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    }
    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow)
  }, [])
  

  const handleNav = () => {
    setnavOpen(!navOpen)
  }

  return (
    <header className={shadow ? ' transition-all bg-transparent fixed top-0 left-0 w-full h-20 shadow-xl bg-lighter z-[100]' : ' bg-lighter transition-all bg-transparent fixed top-0 left-0 w-full h-20 z-[100]'}>
      <div className='flex justify-between items-center w-full h-full 2xl:px-10 container'>
          <Link href="/" className='flex items-center w-48'>
            {/* <Image 
              src={logo}
              height={160}
              width={160}
              alt="logo"
              className='border-grey900'
            /> */}
            <h2 className='text-3xl tracking-widest text-blue font-semibold'>The<span className='text-orange'>D</span>ozy;</h2>
          </Link>
          <nav className=''>
            <ul className='hidden md:flex justify-around gap-5'>
              <li className=''>
                <Link className='text-base font-medium hover:border-b-2 hover:text-bgClr' href="/posts">Posts</Link>
              </li>
              <li className=''>
                <Link className='text-base font-medium hover:border-b-2 hover:text-bgClr' href="/">Snippets</Link>
              </li>
              <li className=''>
                <Link className='text-base font-medium hover:border-b-2 hover:text-bgClr' href="/">Latest</Link>
              </li>
              {
                user.uid ? (
                  <li className='ml-10 text-sm uppercase hover:border-b'>
                    {user.uid ? <button onClick={signOut}>Hi jamal, signout</button> : <Link href={'/sign-in'}>SignIn</Link>}
                  </li>
                ) : (
                  <p></p>
                )
              }
              </ul>
            {/* mobile menu */}
            <div className='md:hidden cursor-pointer' onClick={handleNav}>
              <HiMenuAlt3 size={25}/>
            </div>
          </nav>

          <div className='w-48 hidden md:flex justify-end gap-5 items-center opacity-60'>
            <button>
              <BsSunFill className='text-lg'/>
            </button>
            <button>
              <FiRss className='text-lg'/>
            </button>
          </div>
      </div>

        {/* mobile menu */}

        <div className={navOpen ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-textClr/70 z-[100000]' : ''}>
        <div className={navOpen ? 
          'md:hidden fixed bg-backgroundClr h-full top-0 left-0 w-[75%] sm:w-[60%] md-w[45%] p-10 ease-in-out duration-500'
          :
          'fixed top-0 left-[-100%] ease-in-out duration-500'
        }>
          <div>
            <div className='flex justify-between items-center'>
              <Link href="/" className='flex items-center'>
                <Image 
                  src={logo}
                  height={80}
                  width={80}
                  alt="logo"className='mr-1'
                />
              </Link>
              <div className='cursor-pointer rounded-full shadow-lg shadow-grey400' onClick={handleNav}>
                <CgClose size={25} />
              </div>
            </div>
            <nav className='py-4'>
              <ul className='flex flex-col gap-4'>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                  <Link href="/posts">Posts</Link>
                </li>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                  <Link href="/">Snippets</Link>
                </li>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                  <Link href="/">Latest</Link>
                </li>
              </ul>
            </nav>
            <div className='flex justify-between items-center w-4 gap-4'>
            <button>
              <BsSunFill />
            </button>
            <button>
              <FiRss />
            </button>
          </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;