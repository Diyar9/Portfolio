import React, { useState, useEffect } from 'react';
import './PageTwo.css';
import './ScrollAnimation.css';
import { Helmet } from 'react-helmet-async';
import ScrollAnimation from './ScrollAnimation';

const PageTwo = () => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Define the tools for each category
    const categoryTools = {
        FrontBack: [
            { toolSrc: './SkillIcon/icons8-java-100.png', toolAlt: 'Java', toolTitle: 'Java', },
            { toolSrc: './SkillIcon/c-sharp.png', toolAlt: 'C-sharp', toolTitle: 'C#', },
            { toolSrc: './SkillIcon/NET_core_logo.svg.png', toolAlt: '.NET Core', toolTitle: '.NET Core', },
            { toolSrc: './SkillIcon/Blazor.png', toolAlt: 'Blazor', toolTitle: 'Blazor', },
            { toolSrc: './SkillIcon/mvc.png', toolAlt: 'MVC', toolTitle: 'MVC', },
            { toolSrc: './SkillIcon/icons8-api-100.png', toolAlt: 'RestAPI', toolTitle: 'RestAPI', },
            { toolSrc: './SkillIcon/icons8-html-100.png', toolAlt: 'HTML', toolTitle: 'HTML', },
            { toolSrc: './SkillIcon/icons8-css-100.png', toolAlt: 'CSS', toolTitle: 'CSS', },
            { toolSrc: './SkillIcon/icons8-javascript-100.png', toolAlt: 'JavaScript', toolTitle: 'JavaScript', },
            { toolSrc: './SkillIcon/icons8-react-native-gradient-100.png', toolAlt: 'React', toolTitle: 'React', },
            { toolSrc: './SkillIcon/icons8-Responsive-design-100.png', toolAlt: 'Responsive design', toolTitle: 'Responsive design' },
        ],
        Database: [
            { toolSrc: './SkillIcon/MSSQL.png', toolAlt: 'MSSQL', toolTitle: 'MSSQL', },
            { toolSrc: './SkillIcon/mysql.png', toolAlt: 'MySQL', toolTitle: 'MySQL', },
            { toolSrc: './SkillIcon/icons8-postgresql-100.png', toolAlt: 'PostgreSQL', toolTitle: 'PostgreSQL', },
        ],
        Agile: [
            { toolSrc: './SkillIcon/icons8-scrum-100.png', toolAlt: 'Scrum', toolTitle: 'Scrum', },
            { toolSrc: './SkillIcon/icons8-kanban-100.png', toolAlt: 'Kanban', toolTitle: 'Kanban', },
            { toolSrc: './SkillIcon/icons8-poker-100.png', toolAlt: 'Planning Poker', toolTitle: 'Planning Poker' },
        ],
        Other: [
            { toolSrc: './SkillIcon/icons8-git-100.png', toolAlt: 'Git', toolTitle: 'Git' },
            { toolSrc: './SkillIcon/github.png', toolAlt: 'Github', toolTitle: 'Github' },
            { toolSrc: './SkillIcon/icons8-bitbucket-100.png', toolAlt: 'Bitbucket', toolTitle: 'Bitbucket' },
            { toolSrc: './SkillIcon/ux.png', toolAlt: 'UX/UI', toolTitle: 'UX/UI' },
            { toolSrc: './SkillIcon/icons8-figma-100.png', toolAlt: 'Figma', toolTitle: 'Figma' },
            { toolSrc: './SkillIcon/icons8-data-modelling-100.png', toolAlt: 'Data Modeling', toolTitle: 'Data Modeling' },
            { toolSrc: './SkillIcon/icons8-diagram-100.png', toolAlt: 'Unified Modeling Language', toolTitle: 'UML' },
            { toolSrc: './SkillIcon/icons8-excel-100.png', toolAlt: 'Excel', toolTitle: 'Excel', },
            { toolSrc: './SkillIcon/icons8-requirement-100.png', toolAlt: 'Requirements Management', toolTitle: 'Requirements Management' },
        ],
        // Add more categories and their respective tools as needed
    };

    // Create state for each skill column's menu
    const [menuStates, setMenuStates] = useState([
        {
            isOpen: false,
            title: 'Full-stack',
            tools: categoryTools['FrontBack'],
        },
        {
            isOpen: false,
            title: 'Database',
            tools: categoryTools['Database'],
        },
        {
            isOpen: false,
            title: 'Agile',
            tools: categoryTools['Agile'],
        },
        {
            isOpen: false,
            title: 'Other',
            tools: categoryTools['Other'],
        },
    ]);

    // Function to toggle a specific skill column's menu
    const toggleMenu = (index) => {
        const updatedMenuStates = [...menuStates];
        updatedMenuStates[index].isOpen = !updatedMenuStates[index].isOpen;
        setMenuStates(updatedMenuStates);
    };


    return (
        <div className="page2">
            <Helmet>
                {/* Helmet content */}
            </Helmet>
            <ScrollAnimation />
            <div className="text-box">
                <div className="text-column">
                    <h2>Skills</h2>
                </div>
                <div className="text-column">
                    <h3>What i am <span className='highlight-text'>great</span> at</h3>
                </div>
                <div className="text-column">
                    <p>These are the skills I've learned over the past three years from school, work experience, and things I enjoy doing in my free time.</p>
                </div>
            </div>
            <div className="skill-box">
                {menuStates.map((skill, index) => (
                    <div
                        key={skill.title}
                        className={`skill-column fade-in ${viewportWidth < 768
                            ? skill.title === 'Frontend/Backend' || skill.title === 'Agile'
                                ? 'scroll-in-left'
                                : 'scroll-in-right'
                            : 'scroll-in-down'
                            } in-viewport`}
                        onClick={() => toggleMenu(index)}
                    >
                        {skill.isOpen ? (
                            // Hide the title and image when skillMenu is visible
                            null
                        ) : (
                            <>
                                <img src={`./SkillIcon/icons8-${skill.title.toLowerCase()}-100.png`} alt={skill.title} />
                                <h2>{skill.title}</h2>
                            </>
                        )}
                        {/* Render the menu */}
                        {skill.isOpen && (
                            <div className="skillMenu visible">
                                <div className='skills-wrapper'>
                                    {skill.tools && skill.tools.map((tool, toolIndex) => (
                                        <div key={toolIndex} className='skill-container'>
                                            <img src={tool.toolSrc} alt={tool.toolAlt} className='tool-image' />
                                            <h3 className='skills'>{tool.toolTitle}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );


};

export default PageTwo;
