import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getPostBySlug } from '../../lib/firebase.config';
import { getFormattedDate } from '../../lib/utils';
import Layout from '../../components/Layout';


function PostPage({ post }) {
    const router = useRouter();
    const slug = router.query;

    useEffect(() => {
        if(!post) {
            router.push('/404');
            return;
        }
    }, []);

    if(!post) {
        return null
    }
    

  return (
    <Layout>
        <article>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>{getFormattedDate(post.createdAt)}</p>
        </article>
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
    const post = await getPostBySlug(context.query.slug)
    return {
      props: {
        post,
      },
    };
}

export default PostPage