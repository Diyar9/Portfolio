import React, { } from 'react';
import './PageThree.css';
import { Helmet } from 'react-helmet-async'

const PageTwo = () => {
    return (
        <div className="page3">
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai+Looped:wght@700&display=swap" rel="stylesheet" />
            </Helmet>
            <div className='page3-title'><h1>Experience</h1></div>
            <div className='timeline-box'>
                <div className='timeline-column'>
                    <img src="./ExperienceIcon/ÖrebroNormal.png" alt="Örebro" />
                </div>
                <div className='timeline-column'>
                    <h1>2021 - January</h1>
                    <p>I started studying systems science at Örebro University.</p>
                    <ul>
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
                <div className='timeline-column'>
                    <h1>2023 - January - May</h1>
                    <p>Internship at Combitech AB as a <span className='highlight-text'>system developer</span> in Gothenburg.</p>
                </div>
                <div className='timeline-column'>
                    <img src=".\ExperienceIcon\Combitech.rgb_.png" alt="Combitech" />
                </div>
                <div className='timeline-column'>
                    <img src="./ExperienceIcon/1.jpg" alt="Sileon" />
                </div>
                <div className='timeline-column'>
                    <h1>2023 - June - July</h1>
                    <p>Summer internship at Sileon AB as an <span className='highlight-text'>ambassador</span>.</p>
                </div>
                <div className='timeline-column'>
                    <h1>2024 - January</h1>
                    <p>Bachelor’s degree in systems science.</p>
                </div>
                <div className='timeline-column'>
                    <img src=".\ExperienceIcon\diploma.jpg" alt="Diploma" />
                </div>
            </div>
        </div>
    );
};

export default PageTwo;