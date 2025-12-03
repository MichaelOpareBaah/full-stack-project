import React, { useState } from 'react'
import graduate from '../assets/graduate.jpg'

export default function Contact() {
  const [formelements, setFormElements]=useState({
    firstname:'',
    secondname:'',
    email:'',
    message:''
  })
  const [showMessage,setShowMessage]=useState(false)
 
      const styles={
    width:'100%',
    height:'300px',
    objectFit:'cover',
    marginBottom:'40px' 

  }
  const submitForm = async (e)=>{
    e.preventDefault()
    const form = new FormData(e.target)
    
    setFormElements({
      ...formelements,
      firstname: form.get('firstname'),
      secondname:form.get('secondname'),
      email:form.get('email'),
      message:form.get('message')
    })
    const  response= await fetch('http://localhost:3000/contact',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(formelements)
      })
      const data= response
      console.log(data)
      e.target.reset();
      if(response.ok){
        console.log('data submitted')
        setShowMessage(true)
      }else{
        console.log('data not submitted')
      }
  }
  
  return (
    <>
                <div>
                    <img src={graduate} alt='' style={styles}/>
                </div>
                <div className='contact-container'> 
                    <h2 className='caption'>Get in Touch</h2>
                    <div className='contact-form'>
                      <form className="contact-form" onSubmit={submitForm} >
                        <label>First Name</label>
                         <input
                            type="text"
                            name="firstname"
                            placeholder="Michael"
                            required
                           
                          />
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="secondname"
                            placeholder="Owusu"
                            required
                          />
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
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
                         <button type="submit" className="contact-btn" >
                          Send Message
                        </button>
                      </form>
                      {showMessage? <p>Info submitted</p>:null}
                     

                    </div>
                </div>
        
              
        </>
  )
}
