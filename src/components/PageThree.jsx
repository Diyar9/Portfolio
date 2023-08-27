import React, { } from 'react';
import './PageThree.css';
import { Helmet } from 'react-helmet-async'

const PageThree = () => {
    return (
        <div className="page3">
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai+Looped:wght@700&display=swap" rel="stylesheet" />
            </Helmet>
            <div className="experience-title-box">
                <div className="experience-title-column"><h2>Experience</h2></div>
            </div>
            <div className="experience-line">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="1050" fill="none" viewBox="0 0 8 982">
                    <path stroke="#FFBD20" stroke-linecap="round" stroke-width="7" d="M4 982V-18" />
                </svg>
            </div>
            <div className="experience-box">
                <div className="experience-column">
                    <img src=".\ExperienceIcon\orebro_01.png" alt="Örebro University" />
                </div>
                <div className="experience-column">
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
                <div className="experience-column">
                    <div className="experience-column-text"><h2>2023 Janurary</h2></div>
                    <div className="experience-column-text"><h3>May, Internship at Combitech AB as a <span className='highlight-text'>system developer</span> in Gothenburg.</h3></div>
                </div>
                <div className="experience-column">
                    <img src=".\ExperienceIcon\Combitech.rgb_.png" alt="Combitech" />
                </div>
                <div className="experience-column">
                    <img src=".\ExperienceIcon\sileon.jpg" alt="Sileon" />
                </div>
                <div className="experience-column">
                    <div className="experience-column-text"><h2>2023 June - July</h2></div>
                    <div className="experience-column-text"><h3>Summer internship at Sileon AB as an <span className='highlight-text'>ambassador</span>.</h3></div>
                </div>
                <div className="experience-column">
                    <div className="experience-column-text"><h2>2024 Janurary</h2></div>
                    <div className="experience-column-text"><h3><span className='highlight-text'>Bachelor’s degree</span> in systems science.</h3></div>
                </div>
                <div className="experience-column">
                    <img src=".\ExperienceIcon\examen2.png" alt="Graduated" />
                </div>
            </div>
        </div>
    );
};

export default PageThree;