import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import RouteGuard from '../../components/RouteGuard';
import { updatePost, getPostBySlug } from '../../lib/firebase.config';
import { userAuth } from '../../context/userAuth';


function EditPost({ post }) {
    console.log(post)
    const router = useRouter();
    const [postValues, setPostValues] = useState(post);
    const [isLoading, setIsLoading] = useState(false);
    const [user, userLoading] = userAuth();

    
    if(userLoading) {
        return;
    }
    
    if(!user && typeof window !== undefined) {
        router.push('/sign-in');
        return null;
    }
    
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

        updatePost(postValues)
        .then(() => {
            setIsLoading(false);
            router.push(`/posts/${post.slug}`)
        }).catch((err)=> {
            setIsLoading(false);
            alert(err)
        })
    }


  return (
    <Layout>
        <RouteGuard>
            <form onSubmit={handleSubmit}>
                <h1>this post slig is {post.slug}</h1>
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
                <button type="submit" className='text-alertClr'>{isLoading ? 'Editing ...' : 'Edit'}</button>
            </form> 
        </RouteGuard>   
    </Layout>
  )
}

export async function getServerSideProps(context) {
    const post = await getPostBySlug(context.query.slug);
    return{
        props: {
            post,
        }
    }
}
export default EditPost