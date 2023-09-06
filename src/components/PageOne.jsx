import React from 'react';
import './PageOne.css';
import { Helmet } from 'react-helmet-async'


const PageOne = () => {
    return (
        <div className='page'>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai+Looped:wght@700&display=swap" rel="stylesheet" />
            </Helmet>
            <div className='box'>
                <svg className='desktop-svg' xmlns="http://www.w3.org/2000/svg" width="1105" height="559" fill="none" viewBox="0 0 1105 559">
                    <path fill="#FFBD20" d="M797.5 333.25a3.5 3.5 0 1 0-7 0h7Zm-7 0v225h7v-225h-7Z" />
                    <path stroke="#FFBD20" stroke-width="7" d="M1101 555H791m310 3.5L1097.53 1m2.97 3h-310" />
                    <path fill="#FFBD20" d="M790.718 229.003a3.5 3.5 0 1 0 7-.007l-7 .007Zm7-.007-.218-225-7 .007.218 225 7-.007ZM136 202.75a3.5 3.5 0 1 0 0-7v7Zm-136 0h136v-7H0v7Z" />
                </svg>
                <div className="page-info">
                    <div className='name'>
                        <h2>HELLO, I AM DIYAR</h2>
                    </div>
                    <div className='title'>
                        <h6>I’M A <span className='highlight-text' id='mobile-changes'>SOFTWARE</span> ENGINEER</h6>
                    </div>
                    <div className='subtitle'>
                        <h5>Are you looking for a fullstack developer who works hard but stays humble?</h5>
                    </div>
                </div>
                <div className="page-social">
                    <div className='social-container'>
                        <a href="mailto: diyar.d@hotmail.com" target="_blank">
                            <div className='social-item'>
                                <img src="./SocialIcon/icons8-email-100.png" alt="Mail" />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/demircioglu_d/" target="_blank">
                            <div className='social-item'>
                                <img src="./SocialIcon/icons8-instagram-100.png" alt="Instagram" />
                            </div>
                        </a>
                        <a href="https://github.com/Diyar9" target="_blank">
                            <div className='social-item'>
                                <img id='bigger' src="./SocialIcon/icons8-github-100.png" alt="Github" />
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/diyardemircioglu/" target="_blank">
                            <div className='social-item'>
                                <img id='bigger' src="./SocialIcon/icons8-linkedin-100.png" alt="LinkedIn" />
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PageOne;
