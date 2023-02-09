import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';


import { createPost } from '../lib/firebase.config';

function CreatePost() {
    const router = useRouter();
    const [postValues, setPostValues] = useState({
        title: '',
        slug: '',
        content: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        const id = event.target.id;
        const updatedValue = event.target.value
        setPostValues({...postValues, [id]: updatedValue});
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


        console.log(postValues)

        createPost(postValues)
        .then(() => {
            setIsLoading(false);

        }).catch((err)=> {
            setIsLoading(false);
            alert(err)
        })
    }


  return (
    <Layout>
        <form onSubmit={handleSubmit}>
            <h1>Create New Post</h1>
            <div>
                <label htmlFor='title'>Title</label>
                <input 
                    type='text'
                    placeholder='Type the title'
                    id="title"
                    value={postValues.title}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='slug'>slug</label>
                <input 
                    type='text'
                    placeholder='Type the slug'
                    id="slug"
                    value={postValues.slug}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='content'>content</label>
                <textarea 
                    type='text'
                    placeholder='Type the content'
                    id="content"
                    value={postValues.content}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className='text-alertClr'>{isLoading ? 'Creating ...' : 'Create'}</button>
        </form>
    </Layout>
  )
}

export default CreatePost