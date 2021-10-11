import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const handlerGoogleSignIn = () => {
      return  signInWithPopup(auth, googleProvider)
            
    }
    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {

        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    return {
        user,
        error,
        handlerGoogleSignIn,
        logOut,
    }
}

export default useFirebase;