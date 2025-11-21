import React from 'react'
import graduate from '../assets/graduate.jpg'
import { NavLink } from 'react-router';
import { projectData } from '../data';



export default function Projects() {
      const styles={
    width:'100%',
    height:'300px',
    objectFit:'cover',
    marginBottom:'40px' 

  }
  const displayData = projectData.map(item => (
      <NavLink key={item.id} to={`${item.id}`}>
        <div className='wrapper'>
          <div>
            <img src={item.image} alt='' className='wrapper-img'/>
          </div>
          <div className='wrapper-content'>
            <h4 className='wrapper-caption'>{item.title}</h4>
            <p>{item.content}</p>
          </div>
          <div className='explore-more-wrapper'>
            <NavLink to='/blogs' className='explore-more'>view more</NavLink>
          </div>
        </div>
      </NavLink>
    ));
  return (
    <>
            <div>
                <img src={graduate} alt='' style={styles}/>
            </div>
            <h2 className='caption'> Projects</h2>
            <div className='all-wrappers'> 
                
                {displayData}
            </div>
    
          
    </>
  )
}
