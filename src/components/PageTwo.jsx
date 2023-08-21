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
                    <div className='front-item'>
                        <img src=".\skillsIcon\icons8-html-50.png" alt="html-icon" />
                        <h5>HTML</h5>
                    </div>
                    <div className='front-item'>
                        <img id='css-icon' src=".\skillsIcon\icons8-css-50.png" alt="css-icon" />
                        <h5>CSS</h5>
                    </div>
                    <div className='front-item'>
                        <img src=".\skillsIcon\icons8-javascript-50.png" alt="js-icon" />
                        <h5>JavaScript</h5>
                    </div>
                    <div className='front-item'>
                        <img src=".\skillsIcon\icons8-react-native-50.png" alt="react-icon" />
                        <h5>React</h5>
                    </div>
                </div>

                <div className='sub-text' id='back'>
                    <h2>BACK-END</h2>
                </div>
                <div className='back-container'>
                    <div className='back-item'>
                        <img src=".\skillsIcon\icons8-java-50.png" alt="java-icon" />
                        <h5>Java</h5>
                    </div>
                    <div className='back-item'>
                        <img src=".\skillsIcon\icons8-c-50.png" alt="c#-icon" />
                        <h5>C#</h5>
                    </div>
                    <div className='back-item'>
                        <img src=".\skillsIcon\icons8-.net-framework-50 (1).png" alt=".NET-icon" />
                        <h5>.NET Core</h5>
                    </div>
                    <div className='back-item'>
                        <img src=".\skillsIcon\icons8-mysql-50.png" alt="mysql-icon" />
                        <h5>MySQL</h5>
                    </div>
                    <div className='back-item'>
                        <img src=".\skillsIcon\icons8-postgresql-50.png" alt="postgresql-icon" />
                        <h5>PostgreSQL</h5>
                    </div>
                </div>

                <div className='sub-text' id='agile'>
                    <h2>AGILE METHODS</h2>
                </div>
                <div className='agile-container'>
                    <div className='agile-item'>
                        <img src=".\skillsIcon\icons8-scrum-50.png" alt="scrum-icon" />
                    </div>
                    <div className='agile-item'>
                        <img src=".\skillsIcon\icons8-kanban-50.png" alt="kanban-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageTwo;