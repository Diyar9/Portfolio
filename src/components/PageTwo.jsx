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
            <div className='text-box fade-in scroll-in'>
                <div className="text-column"><h2>Skills</h2></div>
                <div className="text-column"><h3>What i am <span className='highlight-text'>great</span> at</h3></div>
                <div className="text-column"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facere quibusdam nulla nesciunt inventore, sequi cupiditate quaerat explicabo ad! Est labore adipisci, suscipit maxime dolores eaque cum dicta ad fugit.</p></div>
            </div>
            <div className="skill-box fade-in scroll-in">
                <div className="skill-column">
                    <img src=".\SkillIcon\icons8-frontend-100.png" alt="Frontend" />
                    <h2>Frontend/Backend</h2>
                </div>
                <div className="skill-column">
                    <img src=".\SkillIcon\icons8-database-100.png" alt="Database" />
                    <h2>Database</h2>
                </div>
                <div className="skill-column">
                    <img src=".\SkillIcon\icons8-agile-100.png" alt="Agile" />
                    <h2>Agile methods</h2>
                </div>
                <div className="skill-column">
                    <img src=".\SkillIcon\icons8-other-100.png" alt="Other" />
                    <h2>Other</h2>
                </div>
            </div>
            {/*
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

            </div>*/}

        </div>
    );
};

export default PageTwo;