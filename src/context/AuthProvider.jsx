import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import axiosAPI from '../axios/axiosAPI';
import useAxiosSecure from '../axios/UseAxiosSecure';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser?.email) {
                axiosAPI.post("/jwt", { email: currentUser?.email })
                    .then(res => {
                        console.log(res.data);
                        setLoading(false);
                    });
            }
            else {
                axiosAPI.post ("/logout", {})
                .then (res=> {
                    console.log ("Logout", res.data)
                })
                setLoading(false);
            }

            
        })
        return () => unsubscribe();
    }, []);

    const createAccountWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateProfileByEmail = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, { displayName, photoURL })
    }

    const signInToAccout = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const continueWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const contextInfo = {
        createAccountWithEmail,
        updateProfileByEmail,
        signInToAccout,
        continueWithGoogle,
        signOutUser,
        user,
        loading,
        setLoading,
    }


    return (
        <div>
            <AuthContext.Provider value={contextInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;