// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line react/prop-types, no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider,createUserWithEmailAndPassword,getAuth,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";
import app from '../FirebaseConfig/firebaseconfig';



export const AuthContext = createContext(null)
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const loginWithGoogle = () =>{
        setLoder(true)
        return signInWithPopup(auth, googleProvider)
    }
    const [user,setUser] = useState(null)
    const [loader,setLoder] = useState(true)
    const createUser = (email , password) =>{
        setLoder(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const singIn = (email, password) => {
        setLoder(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const singOut = () => {
        setLoder(true)
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoder(false);
            
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const authinfo = {
        user,
        loginWithGoogle,
        createUser,
        singIn,
        singOut,
        loader
       
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;