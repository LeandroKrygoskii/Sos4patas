import { createContext, useState } from "react";
import api from '../services/api';
import {setCookie} from 'nookies';
import Router from 'next/router';


export const AuthContext = createContext({});

export function AuthProvider({children}){
   
    
    const [user, setUser] = useState(null);
    const isAuth = !!user;
    async function signIn({name, password}){
         
         const ndata = { name , password} 
         

        // const data = new FormData();
        // data.append('name' , name);
        // data.append('password', password);

        // console.log(data)


        const response = await api.post('/auth', {name, password});
        

        //salvar o token em Cookies
        setCookie(undefined, 'nextauth.token' , response.data.token, {
            maxAge: 60 * 60 * 8 //8 hours
        })

        setUser(user)

        Router.push('/dashboard')

    }
    
    return(
       <AuthContext.Provider value={{user: user ,isAuth: isAuth , signIn }}>
           {children}
       </AuthContext.Provider>
    )
}