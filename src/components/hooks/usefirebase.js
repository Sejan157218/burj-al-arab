import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword , signOut } from "firebase/auth";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [islogin,setLogin] = useState(false)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handlerGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

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




    const handlerToSubmit = (email, password) => {
        islogin ?
        handlerLogin(email, password) 
        : 
        handlerEmailSignIn(email, password)
    }

    const handlerEmailSignIn = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            }).catch((error) => {
                setError(error.message);

            })
            ;
    }


    const handlerLogin=(email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setError('login is success')
        })
        .catch((error) => {
            setError(error.message);
        });
    }
    return {
        user,
        error,
        islogin,
        setLogin,
        handlerGoogleSignIn,
        handlerToSubmit,
        logOut,
    }
}

export default useFirebase;