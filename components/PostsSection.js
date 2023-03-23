import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { getFormattedDate } from '../lib/utils';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import hero2 from '../public/hero2.png';

function PostsSection({ posts }) {

  return (
    <div className=''>
       <Image
        src={hero2}
        width={480}
        height={480}
        className=''
       /> 
    </div>
  )
}

export default PostsSection