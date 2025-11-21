import React from 'react'
import graduate from '../assets/graduate.jpg'
import mentor from '../assets/mentorship.png'
import { NavLink } from 'react-router';



export default function Projects() {
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
                <h2 className='caption'> Projects</h2>
                <div className='wrapper'>
                  <img src={mentor} className='wrapper-img' alt=''/>
                  <div className='wrapper-content'>
                    <h4 className='blog-caption'>Basic School Infrastructure Project</h4>
                  <p>The NUGS Basic School Infrastructure Project is a bold 
                    step toward eliminating barriers to education in underserved communities. 
                    As part of our commitment to accessible and quality basic education, NUGS
                     is spearheading the construction of a 6-unit classroom block at Kanania 
                     in the Kassena-Nankana District of the Upper East Region and a 3-unit 
                     classroom block at Bitim in the Oti Region.</p>
                  </div>
                 <div className='explore-more-wrapper'>
                          <NavLink to='/blogs' className='explore-more'>Read More...</NavLink>
                  </div>

                  

                </div>
            </div>
    
          
    </>
  )
}
