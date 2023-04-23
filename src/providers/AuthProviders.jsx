import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateCurrentUser } from "firebase/auth";
import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const user = {displayName: 'sagor nodi'}

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);

    
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
// observe auth state change
    useEffect = ( () => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state change', currentUser);
            setUser(currentUser);
        });
        return () =>{
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;