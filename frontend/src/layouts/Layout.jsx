import React, { createContext, useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'


const HeaderContext = createContext() 

export default function Layout() {
    const[show, setShow]=useState(false)
    function handleToggle(){
        setShow((item)=>!item)
    }
  return (
    <HeaderContext.Provider value={{show,setShow,handleToggle}}>
  
       <Header /> 
       
       <Outlet />
       <Footer  />
      
    </HeaderContext.Provider>
  )
}

export{HeaderContext}