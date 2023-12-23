import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signinUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignin = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logoutUser = () =>{
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user in Auth Provider ',user);
            setLoading(false);

            if(currentUser && currentUser.email){
                
                const loggedUser = {
                    email: currentUser.email
                }

                fetch('http://localhost:3000/jwt',{
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log('jwt response - ',data);
                        // Warning: Local storage is not the best (second best place) 
                        //to store access token
                        localStorage.setItem("car-doctor-access-token", data.token);
                        
                    })
            }
            else{
                localStorage.removeItem('car-doctor-access-token')
            }
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
       logoutUser,
       googleSignin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;