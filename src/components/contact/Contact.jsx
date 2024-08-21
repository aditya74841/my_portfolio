import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_65g5xo6', 'template_8k1ehud', form.current, 'oBVM4ReuT4ojSBFhH')
           e.target.reset();
           showAlert();
    };
    const showAlert = () => {
        alert('Message sent successfully!');
      };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact__container'>
                <div className="contact__options">
                    <article className='contact__option  '>
                        <MdOutlineEmail className='contact__option-icon ml-auto mr-auto' />
                        <h4>Email</h4>
                        <h5>aditya74810@gmail.com</h5>
                        <a href="mailto:aditya74810@gmail.com" target='_blank' rel="noreferrer"> Click to Send a message</a>
                    </article>
                    {/* <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon ml-auto mr-auto' />
                        <h4>Messenger</h4>
                        <h5>Aditya Ranjan</h5>
                        <a href="#" target='_blank' rel="noreferrer">  Click to Send a message</a>
                    </article> */}
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon ml-auto mr-auto' />
                        <h4>Whatsapp</h4>
                        <h5>+917481092465</h5>
                        <a href="https://api.whatsapp.com/send?phone=+917481092465" target='_blank' rel="noreferrer"> Click to Connect me on Whatsapp</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required  className='px-2 py-1'/>
                    <input type="email" name='email' placeholder='Your Email' required className='px-2 py-1' />
                    <textarea name="message" rows="7" placeholder='Your Message' required className='px-2 py-1'></textarea>
                    <button type='submit' className='btn btn-primary' >Send a Message</button>
                    <p>Please send your Name, email and Message</p>
                </form>
                
            </div>
        </section>
    )
}

export default Contact