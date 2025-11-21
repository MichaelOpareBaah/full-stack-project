import React from 'react'
import graduate from '../assets/graduate.jpg'

export default function Contact() {
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
                <div className='contact-container'> 
                    <h2 className='caption'>Get in Touch</h2>
                    <div className='contact-form'>
                      <form className="contact-form">
                        <label>First Name</label>
                         <input
                            type="text"
                            name="name"
                            placeholder="Michael"
                            required
                          />
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Owusu"
                            required
                          />
                        <label>Email</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="mikeowusu@gmail.com"
                            required
                          />
                        <label>Your message</label>
                        <textarea
                         name="message"
                         placeholder="Your Message"
                         required
                        >

                        </textarea>
                         <button type="submit" className="contact-btn">
                          Send Message
                        </button>
                      </form>

                    </div>
                </div>
        
              
        </>
  )
}
