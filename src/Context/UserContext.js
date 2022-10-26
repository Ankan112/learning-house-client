import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.init';
import { getAuth, updateProfile, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);


const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    const githubSignIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser)
            setUser(currentUser);
            setLoading(false);
        })
        return () => unSubscribe();
    }, [])
    const authInfo = {
        user,
        googleSignIn,
        createUser,
        logIn,
        logOut,
        loading,
        updateUserProfile,
        githubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;