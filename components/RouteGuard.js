import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { userAuth } from '../context/userAuth';
import Link from 'next/link';


function RouteGuard({ children }) {
    const [user] = userAuth();
    const router = useRouter();

    console.log(user.uid)
    const [isAuthorized, setIsAuthorized] = useState(true)

    useEffect(()=> {
        const authCheck = () => {
            if(!user.uid) {
                setIsAuthorized(false);            
            } else {
                setIsAuthorized(true);             
            }
        }

        authCheck();
        const preverntAccess = () => setIsAuthorized(false);
        router.events.on("routeChangeStart", preverntAccess);
        router.events.on("routeChangeComplete", authCheck);

        return () => {
            router.events.off("routeChangeStart", preverntAccess);
            router.events.off("routeChangeComplete", authCheck);
        };

    },[user, router, router.events])

   

    return isAuthorized ? (
        children
    ) : (
        <p>please  <Link href={'/sign-in'} className="text-blackClr text-2xl">signin first</Link></p>
    )
}

export default RouteGuard;