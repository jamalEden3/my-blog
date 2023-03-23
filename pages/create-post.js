import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import RouteGuard from '../components/RouteGuard';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';


import { createPost } from '../lib/firebase.config';

function CreatePost() {
    const [postValues, setPostValues] = useState({
        title: '',
        slug: '',
        desc: '',
        category: '',
        content: ''
    });

    const [article, setAarticle] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        const id = event.target.id;
        const updatedValue = event.target.value
        setPostValues({...postValues, [id]: updatedValue});
        
    }

    
    const getArticleContent = (value) => {
        
        setAarticle(value);
        updatePostValues();
    }
    const updatePostValues = () => {
        setPostValues({...postValues, ['content']: article})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setIsLoading(true);

        let missingFields = [];
        Object.entries(postValues).forEach(([key, value]) => {
            if(!value) {
                missingFields.push(key)
            }
        });
        if (missingFields.length > 1) {
            alert(`You've missed this field${missingFields.join(', ')}`)
        }


        createPost(postValues)
        .then(() => {
            setIsLoading(false);

        }).catch((err)=> {
            setIsLoading(false);
            alert(err)
        })
    }


  return (
        <form onSubmit={handleSubmit} className='mt-24'>
            <h1 className=' text-alertClr text-2xl'>Create New Post</h1>
            <div className=' flex flex-col gap-2 w-48'>
                <label htmlFor='title'>Title</label>
                <input 
                    type='text'
                    placeholder='Type the title'
                    id="title"
                    value={postValues.title}
                    onChange={handleChange}
                    className=' border-2 px-4 py-2'
                />
            </div>
            <div className=' flex flex-col gap-2 w-48'>
                <label htmlFor='slug'>slug</label>
                <input 
                    type='text'
                    placeholder='Type the slug'
                    id="slug"
                    value={postValues.slug}
                    onChange={handleChange}
                    className=' border-2 px-4 py-2'
                />
            </div>
            <div className=' flex flex-col gap-2 w-48'>
                <label htmlFor='title'>Desc</label>
                <input 
                    type='text'
                    placeholder='Type the Desc'
                    id="desc"
                    value={postValues.desc}
                    onChange={handleChange}
                    className=' border-2 px-4 py-2'
                />
            </div>
            <div className=' flex flex-col gap-2 w-48'>
                <label htmlFor='title'>Category</label>
                <input 
                    type='text'
                    placeholder='Category'
                    id="category"
                    value={postValues.category}
                    onChange={handleChange}
                    className=' border-2 px-4 py-2'
                />
            </div>
            <div>
                <label htmlFor='content'>content</label>
                <ReactQuill value={article} onChange={getArticleContent} />
            </div>
            <button type="submit" className='text-alertClr'>{isLoading ? 'Creating ...' : 'Create'}</button>
        </form>
  )
}

export default CreatePost