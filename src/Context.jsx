import React from "react";
import { createContext, useContext, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export const Context = React.createContext();
const UserContext = createContext();

export const ContextProvider = ({ children }) => {


  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  
  const [codeLanguage, setCodeLanguage] = useState("");
  const [navigate, setNavigate] = useState(false);
  const navi = useNavigate();

   async function register(username, email, password) {
      try {
          console.log(username, email, password);
          const res = await axios.post("https://python-debug.herokuapp.com/register", { username, email, password});
          console.log(res.data);
          localStorage.setItem("token", JSON.stringify(res.data.token))
          console.log(JSON.stringify(res.data.token)+" tok");

          setUser(username)
          setNavigate(true)
          navi('/login');
        
      } catch (error) {
          console.log(error?.res?.data)
      }
      
   }


///lohinsss


   ///login
   async function login(username, password) {
    try {
        console.log(username, password);
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(Object.fromEntries(new FormData(e.target)))


            
        }
        const res = await fetch(`https://python-debug.herokuapp.com/login`, { 
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: "joe", password: "1234" }) 
     })

     if(!res.ok) throw Error("There was a problem in the login request")
        console.log("body:", options.body)
        /*
        const res = await fetch('https://python-debug.herokuapp.com/login', options)
        const data = await res.json()
        console.log("Res:", data)*/
        const data = await res.json()
 if(data[0]==200){
    localStorage.setItem("token", data.token);
    console.log( localStorage.setItem("token", data.token));
    console.log(token)

        setUser(username)
        setNavigate(true)
    }else{
        console.log("not valid")
    }
        
        return data


       /* const res = await axios.post("https://python-debug.herokuapp.com/login", { username, password });
       
       const data = await res.json()
   
    localStoragesetItem("jwt-token", data.token);
    console.log("tok"+ data.token)

    setUser(username)
    setNavigate(true)
    navi('/');
    return data*/

    } catch (error) {
        console.log(error?.res?.data)
    }
    
 }
   const login22 = async (username, password) => {
    
    const resp  = await axios.post("https://python-debug.herokuapp.com/login", 
    { username, password });



console.log(resp)
    if(!resp.ok) throw Error("There was a problem in the login request")

    if(resp.status === 401){
throw("Invalid credentials")
    }
else if(resp.status === 400){
          ("Invalid email or password format")
   
    data = await resp.json()
 
    localStoragesetItem("jwt-token", data.token);
    console.log(data.token+" yttttttt");
}} 
   ///


  async function logins(username, password) {
      try {
          console.log(username, password);
          const res = await axios.post("https://python-debug.herokuapp.com/login", 
          { username, password });

          console.log("res.data "+res.data);

          localStorage.setItem("token", JSON.stringify(res.data.token))
          console.log(JSON.stringify(res.data.user)+" user");

          setUser(res.data.user);
          setNavigate(true)

        
         
      } catch (error) {
          console.log(error?.response?.data)
      }
      if (navigate) {
        navi ("/");
    }
      
   }
   
 

   async function getCurrentUser() {
      try {
        
          const res = await axios.get(user, {
              headers: {
                  Authorization: localStorage.getItem('token')?.split(" ")[1]
              }
          });
          console.log("currentUser",res.data);
          setUser(res.data);
      } catch (error) {
          console.log(error?.response?.data)
      }
      setUserLoading(false);
   }

   function logout() {
      localStorage.removeItem('token')
      setUser(null);
      navi("/login");
   }

  const value = {
      register,
      login,
      getCurrentUser,
      logout,
      userLoading,
      user, codeLanguage,setCodeLanguage
  };



  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>

   
  );
};


export function useUserContext() {
  return useContext(UserContext);
}
