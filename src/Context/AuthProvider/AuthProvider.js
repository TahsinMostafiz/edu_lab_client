import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init'


export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [user, setUser] = useState();


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(email, password);
    }

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        return signOut(auth);
    }



    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });

        return () => {
            unSubscribe();
        }
    }, []);



    const authInfo = {user, providerLogin, logOut, createUser, logIn};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;