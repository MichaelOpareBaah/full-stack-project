import React from 'react'
import graduate from '../assets/graduate.jpg'
import { teamData } from '../data'

export default function Executives() {
     const styles={
    width:'100%',
    height:'300px',
    objectFit:'cover',
    marginBottom:'40px' 
}
const displayExecutives= teamData.map(item=>{
  return(
     <div className='executive-wrapper' key={item.id}>
                <img src={item.image}  className='executive-img' alt=''/>
              
              <h2 className='caption'>{item.name}</h2>
              <h4 className='execution-position'>{item.position}</h4>

           </div>

  )
})
  return (
    <>
        <div>
            <img src={graduate} alt='' style={styles}/>
        </div>
        <div className='container'>
            <h2 className='caption'>alumni executives</h2>
            <div className='all-wrappers'>
               {displayExecutives}
            </div>
         
        </div>

      
    </>
  )
}
