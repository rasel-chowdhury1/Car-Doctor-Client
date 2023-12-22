import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext();
export const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signinUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logoutUser = () =>{
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user ',user);
            setLoading(false);
        })
        return () => {
            return unSubscribe();
        }
    },[])

    const authInfo = {
       user,
       loading,
       createUser,
       signinUser,
       logoutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;