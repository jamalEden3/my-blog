import React, {useState} from 'react';
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
  const handleNav = () => {
    setnavOpen(!navOpen)
  }

  return (
    <header className='fixed w-full h-20 shadow-xl z-[100] border-grey900'>
      <div className='flex justify-between items-center w-full h-full px-8 2xl:px-16'>
          <Link href="/" className='flex items-center'>
            <Image 
              src={logo}
              height={160}
              width={160}
              alt="logo"
              className='border-grey900'
            />
            {/* <span className='text-2xl'>jamal</span> */}
          </Link>
          <nav className='border-grey900'>
            <ul className='hidden md:flex'>
              <li className='text-sm ml-10 uppercase'>
                <Link className='hover:border-b-2' href="/posts">Posts</Link>
              </li>
              <li className='text-sm ml-10 uppercase'>
                <Link className='hover:border-b-2' href="/">Snippets</Link>
              </li>
              <li className='text-sm ml-10 uppercase'>
                <Link className='hover:border-b-2' href="/">Latest</Link>
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
          <ul className='flex gap-5'>
              <li>
                <button>
                  <BsSunFill />
                </button>
              </li>
              <li>
                <button>
                  <FiRss />
                </button>
              </li>
            </ul>
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
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;