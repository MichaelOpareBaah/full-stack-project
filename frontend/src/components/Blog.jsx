import React from 'react'
import {data} from '../data'
import { NavLink } from 'react-router'


export default function Blog() {
    const diplayData=data.map((item)=>
       {
       return(
        <NavLink to={`blogs/${item.id}`} >
         <div className='blog' key={item.id}>
            <div>
                <img src={item.image} alt='' className='blog-img'/>
            </div>
      
      <div className='blog-content'>
         <h4 className='blog-caption'>{item.title}</h4>
        <p>{item.content}</p>
      </div>
    </div>
    </NavLink>
       )
       }
    )
  return (
   
    <>
      <h2 className='caption'>LATEST NEWS</h2>
      <div className='all-blogs'>
      
        {diplayData}
    </div>
    </>
    
      
   
  )
}
