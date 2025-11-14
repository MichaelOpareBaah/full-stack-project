import React, { useContext } from 'react'
import logo from '../assets/kossLogo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { NavLink } from 'react-router';
import { HeaderContext } from '../layouts/Layout';
import { MdClose } from "react-icons/md";





export default function Header() {
    const styles={
        width:'60px'
    }
    const {show,handleToggle}=useContext(HeaderContext)
  return (
   <div className='navbar'>
     <div className='header-container'>
      <NavLink to='/'className='logo-details' >
        <img src={logo}   alt='' style={styles} />
        <h2 className='logo-caption'>Alumni</h2>
      </NavLink>
      <div className='header-icons'>
        {
           show? <MdClose onClick={handleToggle} />:<RxHamburgerMenu onClick={handleToggle} />
        }
         
        
        <IoMdSearch />
        <FaRegUser />
        
      </div>
     </div>
     
      {/*className={`navbar-items ${show?'nav-items':''}`}  */}
      <div className='navbar-items'>
        <NavLink to='/'  className='nav-item'>Home</NavLink>
        <NavLink to='events'  className='nav-item'>Events</NavLink>
        <NavLink to='projects'  className='nav-item'>Projects</NavLink>
        <NavLink to='executives'  className='nav-item'>Executives</NavLink>
        {/* <NavLink to='blogs' onClick={handleToggle} className='nav-item'>Blogs</NavLink> */}
        <NavLink to='contact'  className='nav-item'>Contact Us</NavLink>
     </div>
    </div>
  
  )
}
