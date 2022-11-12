import { createContext, useEffect, useState } from "react";


export const UserContext = createContext();


const ContextProvider = ({children}) => {

    const handleLogout = () =>{
        localStorage.removeItem('token');
        window.location.replace('http://localhost:3000/login');
    }

    const [token,setToken] = useState(null);
    useEffect(() =>{
       const token =  localStorage.getItem('token');
       if(token){
            setToken({
                token
            })
        }
    },[]);
    return (
            <UserContext.Provider value={{token,setToken,handleLogout}}>
                {children}
            </UserContext.Provider>
        )
}
export {ContextProvider};