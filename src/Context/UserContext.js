import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.init';
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);


const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser)
            setUser(currentUser)
        })
        return () => unSubscribe();
    }, [])
    const authInfo = {
        user,
        googleSignIn,
        createUser,
        logIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;