import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from './../../../firebase.init';
import axios from "axios";


export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')



    // sing up user
    const singUp = async (email, password) => {
        try {
            setLoading(true)
            return await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
            setError(error.code)
            throw error
        }
    }


    // SingIn user
    const singIn = async(email, password) => {
        try {
            setLoading(true)
            return await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            setError(error.code)
            throw error
        }
    }


    // Log Out
    const LogOut = async()=> {
        try {
            return await signOut(auth)
        } catch (error) {
            setError(error.code)
            throw error
        }
    }


    // Update User Profile
    const updateUserProfile =async(name, photo)=> {
        try {
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo,
            })
            setUser(auth.currentUser)
        } catch (error) {
            setError(error.code)
            throw error
        }
    }


    // google Login
    const googleLogin =async()=> {
        try {
            setLoading(true)
            return await signInWithPopup(auth, googleProvider)
        } catch (error) {
            setError(error.code)
            throw error
        }
    }


    // Observer For Users
    useEffect(()=> {
        const unSubscribe = auth.onAuthStateChanged((user) => {
            setUser(user)

            if (user) {
                axios.post("http://localhost:7000/api-set-token", {email: user.email, name: user.displayName})
                .then((data) => {
                    if (data.data.token) {
                        localStorage.setItem('token', data.data.token)
                        setLoading(false)
                    }
                })
            } else {
                localStorage.removeItem('token')
                setLoading(false)
            }
        });
        return () => {
            unSubscribe()
        }
    },[])

    const ContextValue = {user, singUp, singIn, updateUserProfile, googleLogin, error, setError, LogOut}

  return (
    <AuthContext.Provider value={ContextValue}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
