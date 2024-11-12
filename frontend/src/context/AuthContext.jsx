import { createContext,useContext, useState, useEffect } from "react";
import { registerRequest } from "../api/auth";
import Cookies from 'js-cookie'



export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
    return context;

};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const signup = async (user) =>{ //Funcion para hacer registro
        try{
            const res = await registerRequest(user);
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
            Cookies.set('token', res.data.token)
        } catch(error){
            setErrors(error.response ? error.response.data : [error.message]);
        }

    };
    const signin = async (user) =>{ //Funcion para hacer login
        try{
            const res = await loginRequest(user);
            console.log(res)
            setIsAuthenticated(true)
            setUser(res.data)
            Cookies.set('token', res.data.token)
        }catch(error){
            if(Array.isArray(error.response.data)){
                return setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
            console.log(error)
        }
    };
    // useEffect(()=>{ //useEffect para limpiar los errores pasado 5 seg
    //     if(errors.length > 0){
    //         const timer = setTimeout(()=>{
    //             setErrors([])
    //         }, 5000)
    //         return () => clearTimeout(timer)
    //     }
    // }, [errors])

    useEffect(()=>{ //useEffect para verificar si hay un token en las cookies
        const cookies = Cookies.get()
        if(cookies.token){
            console.log(cookies.token)
        }
    },[])

    return (
        <AuthContext.Provider value={{signup, signin, user, isAuthenticated, errors}}>
            {children}
        </AuthContext.Provider>
    )
};
