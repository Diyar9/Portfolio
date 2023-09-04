import React, { useEffect, useState } from 'react';
import './PageThree.css';
import { Helmet } from 'react-helmet-async';
import ScrollAnimation from './ScrollAnimation';

const PageThree = () => {

    return (
        <div className="page3">
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai+Looped:wght@700&display=swap" rel="stylesheet" />
            </Helmet>
            <ScrollAnimation />
            <div className="experience-title-box fade-in scroll-in">
                <div className="experience-title-column"><h2>Experience</h2></div>
            </div>
            <div className="experience-box">
                <div className="experience-column fade-in scroll-in" >
                    <img src=".\ExperienceIcon\orebro_01.png" alt="Örebro University" />
                </div>
                <div className="experience-column fade-in scroll-in" >
                    <div className="experience-column-text"><h2>2021 Janurary</h2></div>
                    <div className="experience-column-text"><h3>I started studying <span className='highlight-text'>systems science</span> at Örebro University. </h3></div>
                    <div className="experience-column-text" id='courses'>
                        <ul>
                            <li>Courses taken:</li>
                            <li>Systems science, foundation course - IK100G,</li>
                            <li>Psychology foundation course - PS707G,</li>
                            <li>Client programming for web systems - IK201G,</li>
                            <li>Object Oriented Programming with C# - IK202G,</li>
                            <li>Database management with SQL Server - IK203G,</li>
                            <li>Web system with .NET - IK204G,</li>
                            <li>Requirements management - IK205G,</li>
                            <li>Object-oriented analysis and design - IK206G,</li>
                            <li>System development project with Scrum and Extreme Programming - IK207G,</li>
                            <li>Interaction design - IK208G</li>
                        </ul>
                    </div>
                </div>
                <div className="experience-column fade-in scroll-in" >
                    <div className="experience-column-text"><h2>2023 Janurary - May</h2></div>
                    <div className="experience-column-text"><h3>Internship at Combitech AB as a <span className='highlight-text'>system developer</span> in Gothenburg.</h3></div>
                </div>
                <div className="experience-column fade-in scroll-in" >
                    <img src=".\ExperienceIcon\Combitech.jpg" alt="Combitech" />
                </div>
                <div className="experience-column fade-in scroll-in" >
                    <img src=".\ExperienceIcon\sileon.jpg" alt="Sileon" />
                </div>
                <div className="experience-column fade-in scroll-in" >
                    <div className="experience-column-text"><h2>2023 June - July</h2></div>
                    <div className="experience-column-text"><h3>Summer internship at Sileon AB as an <span className='highlight-text'>ambassador</span>.</h3></div>
                </div>
                <div className="experience-column fade-in scroll-in" >
                    <div className="experience-column-text"><h2>2024 Janurary</h2></div>
                    <div className="experience-column-text"><h3><span className='highlight-text'>Bachelor’s degree</span> in systems science.</h3></div>
                </div>
                <div className="experience-column fade-in scroll-in" >
                    <img src=".\ExperienceIcon\examen2.png" alt="Graduated" />
                </div>
                <div className="experience-line"></div>
            </div>
        </div>
    );
};

export default PageThree;