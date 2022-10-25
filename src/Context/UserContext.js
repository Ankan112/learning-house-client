import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.init';
import { getAuth, signInWithPopup } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);


const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const authInfo = {
        user,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;