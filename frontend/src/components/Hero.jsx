import React from 'react'
import graduate from '../assets/graduate.jpg'
export default function Hero() {
  const styles={
    width:'100%',
    height:'600px',
    objectFit:'cover',
    marginBottom:'40px' 

  }
  return (
    <div>
       <img src={graduate} alt='' style={styles}/>
    </div>
  )
}
