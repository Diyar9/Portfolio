import React, { useRef } from 'react';
import './ContactMe.css';
import './ScrollAnimation.css';
import { Helmet } from 'react-helmet-async'
import ScrollAnimation from './ScrollAnimation';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kygzcv7', 'template_88j62eh', form.current, 'gD-MmW8c4XeRRYBIW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className="page5">
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai+Looped:wght@700&display=swap" rel="stylesheet" />
            </Helmet>
            <ScrollAnimation />
            <div className='contact-box fade-in scroll-in-down in-viewport'>
                <div className="contact-item">
                    <h3 className='contact-title'>Let’s <span className='highlight-text'>discuss</span> on something cool together!</h3>
                </div>
                <div className='contact-item'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="input-group">
                            <input type="text" className='input-group__input' name="user_name" required />
                            <label className='input-group__label'>Name</label>
                        </div>
                        <div className="input-group">
                            <input type="email" className='input-group__input' name="user_email" required />
                            <label className='input-group__label'>Email</label>
                        </div>
                        <div className="input-group">
                            <input type="text" className='input-group__input' name="subject" required />
                            <label className='input-group__label'>Subject</label>
                        </div>
                        <div className="input-group">
                            <textarea className='input-group__input' name="message" required />
                            <label className='input-group__label'>Message</label>
                        </div>
                        <div>
                            <input className='input-group__input' id='send-btn' type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;