import React from 'react'
import emailjs from '@emailjs/browser'

import { useRef } from 'react';

import '../styles/contact.scss'; 

function Contact() {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs.sendForm(
      'service_gc6349w', 
      'template_fr6wvvx', 
      form.current, 
      'wjwvceVpZ4TU8dsEK'
    ).then(() => {
      alert('Message sent successfully!'); 
    }).catch(error => {
      console.log(error); 
      alert('Failed to send message'); 
    })
  }
  return (
    <section className='contact' id='contact' >
      <div className=' contact-msg d-flex flex-column justify-content-center align-items-center pt-5'>

        <h1 className='text-h1'> Contact Me  </h1>

        <form ref={form} onSubmit={sendEmail} className='w-100  p-2 '>
          <div className='form-group'>
            <label htmlFor='fullName' >Full Name </label>
            <input type='text' name='from_name' className='form-control' id='fullName' />
          </div>
          <div className='form-group'>
            <label htmlFor='email' >Email </label>
            <input type='email' name='from_email' className='form-control' id='email' />
          </div>
          <div className='form-group'>
            <label htmlFor='msg' >Your Message </label>
            <textarea  className='form-control' name='message'  rows='8' ></textarea>
          </div>
          <button type='submit' className='btn fw-bold w-100 p-2 my-2 '>submit</button>
        </form>
      </div>

      <div className='contact-info'>
        <div className='time'>
          <span><i className='bi bi-clock'></i></span>
          <hr className='text-primary w-100 fw-bold'></hr>
          <p>Saturday & Sunday</p>
          <p>08:00 - 18:00</p>
        </div>
        <div className='phone'>
          <span><i className='bi bi-telephone'></i></span>
          <hr className='text-primary w-100 fw-bold'></hr>
          <p>Cell Phone</p>
          <p>+49 (0) 15561 0079 71</p>
        </div>
        <div className='map'>
          <span><i className='bi bi-map'></i></span>
          <hr className='text-primary w-100 fw-bold'></hr>
          <p>Germany </p>
          <p>Zwickau, Sachsen</p>
        </div>

      </div>
    </section>
  )
}

export default Contact
