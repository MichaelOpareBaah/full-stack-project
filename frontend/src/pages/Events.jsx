import React from 'react'
import { eventsData } from '../data'
import { NavLink } from 'react-router'
import graduate from '../assets/graduate.jpg'


export default function Events() {
   const styles={
    width:'100%',
    height:'300px',
    objectFit:'cover',
    marginBottom:'40px' 

  }
  const displayEvents=eventsData.map((item)=>{
    return(
      <NavLink>
          <div className='event'>
            <img src={item.image_url} alt='' style={{width:'280px',height:'200px',objectFit:'cover'}}/>
            <div className='event-details'>
                <h4 className='event-name'>{item.name}</h4>
                <h5 className='event-date'>{item.date}</h5>
                <p className='event-location'>{item.location.venue}</p>
                
            </div>
            
          </div>
      </NavLink>
      
    )
  })
  return (
    <>
      <img src={graduate} alt='' style={styles}/>
      <div className='container'>
      
      <h2 className='caption'>UPCOMING EVENTS</h2>
      <div className='all-events'>
          {displayEvents}
      </div>
       
       
       
      </div>
    </>
    
  )
}
