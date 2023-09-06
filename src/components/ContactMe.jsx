import React, { } from 'react';
import './ContactMe.css';
import './ScrollAnimation.css';
import { Helmet } from 'react-helmet-async'
import ScrollAnimation from './ScrollAnimation';
import { ContactForm } from './ContactForm';

const ContactMe = () => {

    return (
        <div className="page5">
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai+Looped:wght@700&display=swap" rel="stylesheet" />
            </Helmet>
            <ScrollAnimation />
            <div className='contact-box'>
                <div className="contact-column">
                    <div className="contact-item">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;