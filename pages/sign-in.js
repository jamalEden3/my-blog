import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { userAuth } from '../context/userAuth';
import { signIn } from '../lib/firebase.config';

function SignIn() {
   const [user ,userLoading ]= userAuth();

    const router = useRouter();
    const [userValues, setUserValues] = useState({
        email: '',
        password: ''
    });
    
    if(userLoading) {
        return (
            <p>Loading ....</p>
        ) 
    }

    if(user.uid && typeof window !==undefined) {
        router.push('/create-post');
        return null;
    }

    const handleChange = (event) => {
        const id = event.target.id;
        const updatedValue = event.target.value
        setUserValues({...userValues, [id]: updatedValue});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let missingFields = [];
        Object.entries(userValues).forEach(([key, value]) => {
            if(!value) {
                missingFields.push(key)
            }
        });

        if (missingFields.length > 1) {
            alert(`You've missed this field${missingFields.join(', ')}`)
        }

        signIn(userValues.email, userValues.password).catch((err) => {
            alert(err);
        });
        
    };


  return (
    <Layout>
        <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <div>
                <label htmlFor='email'>email</label>
                <input 
                    type='email'
                    placeholder='Type the email'
                    id="email"
                    value={userValues.email}
                    onChange={handleChange}
                    className='text-textClr'
                />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input 
                    type='password'
                    placeholder='Type the password'
                    id="password"
                    value={userValues.password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className='text-alertClr'>Sign In</button>
        </form>
    </Layout>
  )
}

export default SignIn;