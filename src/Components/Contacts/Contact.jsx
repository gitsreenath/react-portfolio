import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'

import {BsWhatsapp} from 'react-icons/bs'

import './Contact.css'


import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => { 
    e.preventDefault();

    emailjs.sendForm('service_y4wp5fb', 'template_2zqbvuv', form.current, 'CAmArlCmDN3L8ulKU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='Contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">

<article className="contact_option">
  <AiOutlineMail/>
  <h4>Email</h4>
  <h5>sreenath2115@gmail.com</h5>
  <a href="mailto:sreenath2115@gmail.com" target="_blank">Send a Message</a>
</article>
<article className="contact_option">
  <BsWhatsapp/>
  <h4>Whatsapp</h4>
  <h5>MYemail@gamil.com</h5>
  <a href="https://wa.me/+919961518648" target="_blank">Send a Message</a>
</article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
<input type="text" name="name" id="" placeholder='Enter your name' required />
<input type="email" name="mail" id=" " placeholder='Enter your Mailid' required />
<textarea name="message" id="" cols="30" rows="10" placeholder='Enter your Messages' required></textarea>
<button className="btn btn-primary">Submit</button>
        </form>
      </div>
      
      </section>
  )
}

export default Contact