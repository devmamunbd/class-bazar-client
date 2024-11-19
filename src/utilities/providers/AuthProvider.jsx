import { createContext, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './../../../firebase.init';


export const AuthContext = createContext()

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



    const ContextValue = {user, }

  return (
    <AuthContext.Provider value={ContextValue}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
