import { getAuth } from "firebase/auth";
import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const user = {displayName: 'sagor nodi'}

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);

    const authInfo = {
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;