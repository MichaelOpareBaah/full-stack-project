import React from 'react'
import graduate from '../assets/graduate.jpg'

export default function Executives() {
     const styles={
    width:'100%',
    height:'300px',
    objectFit:'cover',
    marginBottom:'40px' 

  }
  return (
    <>
        <div>
            <img src={graduate} alt='' style={styles}/>
        </div>
        <div className='container'>
            <h2 className='caption'>alumni executives</h2>
            Executive Page
        </div>

      
    </>
  )
}
