import React, { useState } from 'react';
import './PageTwo.css';
import { Helmet } from 'react-helmet-async'

const PageTwo = () => {
    return (
        <div className="page2">
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai+Looped:wght@700&display=swap" rel="stylesheet" />
            </Helmet>
            <div className='page2-title'><h1>Current skills</h1></div>
            <div className='skill-box'>
                <div className="skill-column">
                    <h1>Front-end</h1>
                </div>
                <div className='skill-column'>
                    <img src=".\SkillIcon\icons8-html-100.png" alt="HTML" />
                    <p>HTML</p>
                </div>
                <div className='skill-column'>
                    <img src=".\SkillIcon\icons8-css-100.png" alt="CSS" />
                    <p>CSS</p>
                </div>
                <div className='skill-column'>
                    <img src=".\SkillIcon\icons8-javascript-100.png" alt="JavaScript" />
                    <p>JavaScript</p>
                </div>
                <div className='skill-column'>
                    <img src=".\SkillIcon\icons8-react-native-100.png" alt="React" />
                    <p>React</p>
                </div>
                <div className="skill-column" id='space'></div>
                <div className='skill-column'>
                    <img src=".\SkillIcon\ux.png" alt="UX/UI" />
                    <p>UX/UI</p>
                </div>
                <div className='skill-column'>
                    <img src=".\SkillIcon\icons8-responsive-design-100.png" alt="Responsive design" />
                    <p>Responsive design</p>
                </div>
                <div className='skill-column'>
                    <img src=".\SkillIcon\icons8-api-100.png" alt="API" />
                    <p>API</p>
                </div>
                <div className="skill-column" id='space'></div>
            </div>

            <div className="skill-box">
                <div className="skill-column">
                    <h1>Back-end</h1>
                </div>
                <div className='skill-column'>
                    <img src=".\SkillIcon\icons8-java-100.png" alt="Java" />
                    <p>Java</p>
                </div>
                <div className='skill-column'>
                    <img src=".\SkillIcon\c-sharp.png" alt="C#" />
                    <p>C#</p>
                </div>
                <div className='skill-column'>
                    <img src=".\SkillIcon\NET_Core_Logo.svg.png" alt=".NET" />
                    <p>.NET Core</p>
                </div>
                <div className='skill-column'>
                    <img src="./SkillIcon/blazor.png" alt="Blazor" />
                    <p>Blazor</p>
                </div>
                <div className="skill-column" id='space'></div>
                <div className='skill-column'>
                    <img src=".\SkillIcon\mvc.png" alt="MVC" />
                    <p>ASP.NET MVC</p>
                </div>
                <div className='skill-column'>
                    <img src=".\SkillIcon\icons8-postgresql-100.png" alt="PostgreSQL" />
                    <p>PostgreSQL</p>
                </div>
                <div className='skill-column'>
                    <img src=".\SkillIcon\mysql.png" alt="MySQL" />
                    <p>MySQL</p>
                </div>
                <div className='skill-column'>
                    <img src=".\SkillIcon\icons8-data-modelling-100.png" alt="Data modelling" />
                    <p>Data modelling</p>
                </div>
                <div className="skill-column" id='space'></div>
                <div className='skill-column'>
                    <img src=".\SkillIcon\icons8-api-100.png" alt="API" />
                    <p>API</p>
                </div>
                <div className="skill-column" id='space'></div>
                <div className="skill-column" id='space'></div>
                <div className="skill-column" id='space'></div>
            </div>

            <div className='skill-box'>
                <div className="skill-column">
                    <h1>Agile methods</h1>
                </div>
                <div className='skill-column'>
                    <img src=".\SkillIcon\icons8-scrum-100.png" alt="Scrum" />
                    <p>Scrum</p>
                </div>
                <div className='skill-column'>
                    <img src=".\SkillIcon\icons8-kanban-100.png" alt="Kanban" />
                    <p>Kanban</p>
                </div>
                <div className="skill-column" id='space'></div>
                <div className="skill-column" id='space'></div>
            </div>

            <div className='skill-box'>
                <div className="skill-column">
                    <h1>Other</h1>
                </div>
                <div className='skill-column'>
                    <img src="./SkillIcon/github.png" alt="Github" />
                    <p>Github</p>
                </div>
                <div className='skill-column'>
                    <img src=".\SkillIcon\icons8-git-100.png" alt="Git" />
                    <p>Git</p>
                </div>
                <div className='skill-column'>
                    <img src=".\SkillIcon\icons8-diagram-100.png" alt="UML" />
                    <p>UML</p>
                </div>
                <div className='skill-column'>
                    <img src=".\SkillIcon\icons8-requirement-100.png" alt="Requirement management" />
                    <p>Requirement management</p>
                </div>

            </div>

            {/*<div className='skill-container'>
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
                    <div className='back-item' id='row1'>
                        <img src=".\skillsIcon\icons8-java-50.png" alt="java-icon" />
                        <h5>Java</h5>
                    </div>
                    <div className='back-item' id='row1'>
                        <img src=".\skillsIcon\icons8-c-50.png" alt="c#-icon" />
                        <h5>C#</h5>
                    </div>
                    <div className='back-item' id='row1'>
                        <img src=".\skillsIcon\icons8-.net-framework-50 (1).png" alt=".NET-icon" />
                        <h5>.NET Core</h5>
                    </div>
                    <div className='back-item' id='row1'>
                        <img src=".\skillsIcon\blazorpng.png" alt="Blazor" />
                        <h5>Blazor</h5>
                    </div>
                    <div className='back-item' id='row2'>
                        <img src=".\skillsIcon\mvcpng.png" alt="MVC" />
                        <h5>MVC</h5>
                    </div>
                    <div className='back-item' id='row2'>
                        <img src=".\skillsIcon\icons8-mysql-50.png" alt="mysql-icon" />
                        <h5>MySQL</h5>
                    </div>
                    <div className='back-item' id='row2'>
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
                        <h5>Scrum</h5>
                    </div>
                    <div className='agile-item'>
                        <img src=".\skillsIcon\icons8-kanban-50.png" alt="kanban-icon" />
                        <h5>Kanban</h5>
                    </div>
                </div>
    </div>*/}

        </div>
    );
};

export default PageTwo;