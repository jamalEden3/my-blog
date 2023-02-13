import { createContext, useState, useEffect, useContext } from 'react';
import { onAuthStateChanged } from '../lib/firebase.config';

const AuthContext = createContext({ user: null, userLoading: true });

export const AuthProvider = ({ children }) => {
  /* App state of user and loading */
  const [userLoading, setUserLoading] = useState(true);
  const [user, setUser] = useState({email: null, uid: null});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((res) => {
      if (res) {
        setUser({
          email: res.email,
          uid: res.uid,
        });
      } else {
        setUser({ email: null, uid: null });
      }
    });
    setUserLoading(false);

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={[user, userLoading]}>
      {children}
    </AuthContext.Provider>
  );
};

export const userAuth = () => useContext(AuthContext);