import React, { useContext } from 'react'
import { HeaderContext } from '../layouts/Layout';
import Hero from '../components/Hero'
import graduate from '../assets/graduate.jpg'
import Blog from '../components/Blog';
import Events from './Events';
import Qrcode from '../assets/QRcode.JPG'
import { NavLink } from 'react-router';

export default function Home() {
    const {show}=useContext(HeaderContext)
  
  return (
    <div className={`${show?'hidden-content':''}`}>
       <Hero />
       <div className='container'> 
        <div style={{marginBottom:'100px'}}>
          <h2 className='caption'>KOSS Old Students’ Association (Anuanom)</h2>
          <p>Welcome home to the proud alumni of Konongo Odumase Senior High School (KOSS) — affectionately 
            known as AKOSS. This platform celebrates the legacy of excellence, unity, 
            and service that defines our great school.KOSS Senior High School, in the Ashanti 
            Region of Ghana, boasts a proud alumni network known as Anuanom.</p>
            <p> Since 1953, former students have excelled in education, sports, arts, and leadership. 
              The alumni association supports the school through infrastructure projects, educational initiatives,
               and student welfare programs while fostering a global network for mentorship, collaboration, and 
               community engagement. KOSS alumni continue to uphold the schools values and contribute positively 
               to both the school and society.</p>

       </div>
       <div className='section'>
          <div className='sub-second'>
              <img src={graduate} alt='' />
          </div>
          
          <div className='sub-second'>
            <h4>The KOSS Old Students Association is committed to:</h4>
             <ul>
               <li>Supporting the school: Funding infrastructure, ICT facilities, and educational initiatives.</li>
               <li>Community engagement: Assisting students in need and promoting social responsibility.</li>
               <li>Networking: Connecting alumni locally and globally, fostering collaboration and mentorship.</li>
             </ul>
             <p>Through their dedication, KOSS alumni continue to uphold the school’s motto and contribute to the growth of the institution and society.</p>
          </div>
       </div>
       
       </div>
       <Events />
       <div className='explore-more-wrapper'>
         <NavLink to='/blogs' className='explore-more'>Load More...</NavLink>
       </div>
       

       <section className='scan-section'>
         <h1>Scan to join alumni whatsapp group</h1>
         <img src={Qrcode} alt=''/>
       </section>
       <Blog limit={3} />
       <div className='explore-more-wrapper'>
         <NavLink to='/blogs' className='explore-more'>Explore More Stories</NavLink>
       </div>
            
    </div>
  )
}
