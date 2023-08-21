import React from 'react';
import './PageTwo.css';
import { Helmet } from 'react-helmet-async'


const PageTwo = () => {
    return (
        <div className='page'>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai+Looped:wght@700&display=swap" rel="stylesheet" />
            </Helmet>
            <div className='skill-container'>
                <div className='skill-title'>
                    <h6>CURRENT <span className='highlight-text'>SKILL</span></h6>
                </div>

                <div className='sub-text' id='front'>
                    <h2>FRONT-END</h2>
                </div>
                <div className='front-container'>
                    <div className='front-item'><img src="C:\Users\Pc\portfolio\public\skillsIcon\icons8-html-50.png" alt="" /></div>
                    <div className='front-item'></div>
                    <div className='front-item'></div>
                    <div className='front-item'></div>
                </div>

                <div className='sub-text' id='back'>
                    <h2>BACK-END</h2>
                </div>

                <div className='back-container'>
                    <div className='back-item'></div>
                    <div className='back-item'></div>
                    <div className='back-item'></div>
                    <div className='back-item'></div>
                </div>

                <div className='sub-text' id='agile'>
                    <h2>AGILE METHODS</h2>
                </div>

                <div className='agile-container'>
                    <div className='agile-item'></div>
                    <div className='agile-item'></div>
                </div>
            </div>
        </div>
    );
};

export default PageTwo;