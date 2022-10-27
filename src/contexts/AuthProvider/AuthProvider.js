import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from "../../firebase/firebase.config"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [theme,setTheme] = useState('light');

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const varyfyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const authInfo = { user, loading,theme,setTheme, setLoading, varyfyEmail, updateUserProfile, providerLogin, logout, createUser, login};

    // manage users
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('state changed for user: ', currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;