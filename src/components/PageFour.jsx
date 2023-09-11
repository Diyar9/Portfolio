import './PageFour.css';
import ScrollAnimation from './ScrollAnimation';
import React, { useState } from 'react';

const ProjectColumn = ({ title, description, imgSrc, tools, repoLink, imgRepo, imgDate }) => {
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [overlayClass, setOverlayClass] = useState('img-column-second unclicked');

    const handleOverlayClick = () => {
        setOverlayVisible(!isOverlayVisible);
        setOverlayClass(isOverlayVisible ? 'img-column-second unclicked' : 'img-column-second clicked');
    };

    return (
        <div className={`project-column ${isOverlayVisible ? 'overlay-visible' : ''}`}>
            <div className={`tools-column ${isOverlayVisible ? 'visible' : 'hidden'}`}>
                <div className="tools-wrapper">
                    {tools.map((tool, index) => (
                        <div key={index} className='tool-container'>
                            <img src={tool.toolSrc} alt={tool.toolAlt} className='tool-image' />
                            <h3 className='tools'>{tool.toolTitle}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`img-column ${isOverlayVisible ? 'overlay-visible' : ''}`}>
                <img className='img-column-main' src={imgSrc} alt={title} />
                <div className='img-column-overlay'>
                    <img
                        src="./ProjectIcon/readmore.png"
                        alt="Read more"
                        className={overlayClass}
                        onClick={handleOverlayClick}
                    />
                </div>
                <div className='img-column-date'>
                    <p className='img-date-item'>{imgDate}</p>
                </div>
            </div>
            <div className={`column-box ${isOverlayVisible ? 'hidden' : 'visible'}`}>
                <div className="column-item"><h2><span className='highlight-text'>{title}</span></h2></div>
                <div className="column-item"><p>{description}</p></div>
                <div className="column-item" id='githubRepoItem'>
                    <a href={repoLink} target="_blank"><img src={imgRepo} alt={title} /></a>
                </div>
            </div>
        </div>
    );
};

const PageFour = () => {
    return (
        <div className="page4">
            <ScrollAnimation />
            <div className="project-title-box">
                <div className="project-title-column"><h2>projects</h2></div>
                <div className="project-title-column"><h3>What i have <span className='highlight-text'>created</span></h3></div>
            </div>
            <div className="project-box fade-in scroll-in-down in-viewport">
                <ProjectColumn
                    tools={[
                        { toolSrc: './SkillIcon/icons8-html-100.png', toolAlt: 'HTML', toolTitle: 'HTML' },
                        { toolSrc: './SkillIcon/icons8-css-100.png', toolAlt: 'CSS', toolTitle: 'CSS' },
                        { toolSrc: './SkillIcon/icons8-react-native-gradient-100.png', toolAlt: 'React', toolTitle: 'React' },
                        { toolSrc: './SkillIcon/icons8-javascript-100.png', toolAlt: 'JavaScript', toolTitle: 'JavaScript' },
                        { toolSrc: './SkillIcon/icons8-responsive-design-100.png', toolAlt: 'Responsive design', toolTitle: 'Responsive design' },
                        { toolSrc: './SkillIcon/icons8-git-100.png', toolAlt: 'Git', toolTitle: 'Git' },
                        { toolSrc: './SkillIcon/github.png', toolAlt: 'Github', toolTitle: 'Github' },
                        { toolSrc: './SkillIcon/icons8-figma-100.png', toolAlt: 'Figma', toolTitle: 'Figma' }
                    ]}
                    githubSrc="C:\Users\Pc\portfolio\public\SkillIcon\github.png"
                    title="Portfolio"
                    description="A collection of my works and projects, showcasing my current skills and a timeline of my past experiences. The project have followed a structured approach where I, as a developer, have designed the UX using the tool Figma and then further developed the project using the React framework. Additionally, the project are responsive, making it accessible on mobile devices as well."
                    imgSrc=".\ProjectIcon\Portfolio.png"
                    imgDate="2023-07-24"
                    repoLink={"https://github.com/Diyar9/portfolio"}
                    imgRepo={"./SkillIcon/github.png"}
                />
                <ProjectColumn
                    tools={[
                        { toolSrc: './SkillIcon/icons8-excel-100.png', toolAlt: 'Excel', toolTitle: 'Excel' },
                    ]}
                    githubSrc="./ProjectIcon/readmore.png"
                    title="Sileon"
                    description="I served as an ambassador for Sileon AB, traveling to their customers in central Sweden to introduce their new invoicing service. I planned and organized my schedule in collaboration with Sileon and met with customers in person to provide live introductions and address their questions."
                    imgSrc=".\ProjectIcon\Sileon.jpg"
                    imgDate="2023-06-07"
                    repoLink={"https://docs.google.com/spreadsheets/d/e/2PACX-1vRTOHbGDj0Oq3As5Xtxuk7znCUYSe_u5XZWVz1L_1wajlK2MKZv7UQTzlHPBXtLVGxXug1Z5T88oSoN/pub?output=pdf"}
                    imgRepo={"./SkillIcon/icons8-more-100.png"}
                />
                <ProjectColumn
                    tools={[
                        { toolSrc: './SkillIcon/c-sharp.png', toolAlt: 'C#', toolTitle: 'C#' },
                        { toolSrc: './SkillIcon/icons8-html-100.png', toolAlt: 'HTML', toolTitle: 'HTML' },
                        { toolSrc: './SkillIcon/icons8-css-100.png', toolAlt: 'CSS', toolTitle: 'CSS' },
                        { toolSrc: './SkillIcon/icons8-javascript-100.png', toolAlt: 'JavaScript', toolTitle: 'JavaScript' },
                        { toolSrc: './SkillIcon/NET_Core_Logo.svg.png', toolAlt: '.Net Core', toolTitle: '.NET Core' },
                        { toolSrc: './SkillIcon/icons8-postgresql-100.png', toolAlt: 'PostgreSQL', toolTitle: 'PostgreSQL' },
                        { toolSrc: './SkillIcon/Blazor.png', toolAlt: 'Blazor', toolTitle: 'Blazor' },
                        { toolSrc: './SkillIcon/icons8-api-100.png', toolAlt: 'Rest API', toolTitle: 'RestAPI' },
                        { toolSrc: './SkillIcon/icons8-git-100.png', toolAlt: 'Git', toolTitle: 'Git' },
                        { toolSrc: './SkillIcon/icons8-bitbucket-100.png', toolAlt: 'Bitbucket', toolTitle: 'Bitbucket' }
                    ]}
                    githubSrc="./ProjectIcon/readmore.png"
                    title="Combitech"
                    description="During my internship at Combitech AB in Gothenburg, I worked as a systems developer and was tasked with developing a system for autonomous vehicles. In this role, I acted as a full-stack developer, handling both backend, frontend, and database aspects of the project."
                    imgSrc=".\ProjectIcon\Combitech.jpg"
                    imgDate="2023-01-16"
                    repoLink={"https://se370.wordpress.com/"}
                    imgRepo={"./SkillIcon/icons8-more-100.png"}
                />
                <ProjectColumn
                    tools={[
                        { toolSrc: './SkillIcon/c-sharp.png', toolAlt: 'C#', toolTitle: 'C#' },
                        { toolSrc: './SkillIcon/icons8-git-100.png', toolAlt: 'Git', toolTitle: 'Git' },
                        { toolSrc: './SkillIcon/github.png', toolAlt: 'Github', toolTitle: 'Github' }
                    ]}
                    githubSrc="./ProjectIcon/readmore.png"
                    title="RSS"
                    description="In my RSS reader project, I utilized C# as the primary programming language, focusing on the graphical user interface (GUI). I followed a three-layer architecture, incorporating user interface design, business logic, and data access layers to effectively manage RSS feeds."
                    imgSrc=".\ProjectIcon\RSS.png"
                    imgDate="2022-10-03"
                    repoLink={"https://github.com/Diyar9/RSS"}
                    imgRepo={"./SkillIcon/github.png"}
                />
                <ProjectColumn
                    tools={[
                        { toolSrc: './SkillIcon/ux.png', toolAlt: 'UX/UI', toolTitle: 'UX/UI' },
                        { toolSrc: './SkillIcon/icons8-figma-100.png', toolAlt: 'Figma', toolTitle: 'Figma' },
                    ]}
                    githubSrc="./ProjectIcon/readmore.png"
                    title="ArtFinder"
                    description="Worked on a project for OpenArt where the mission was to find a way to make art more accessible. The idea behind this project was to create a solution that helps residents navigate to art installations using a navigation system. Additionally, the system would provide information about each exhibition and be designed for use by multiple people."
                    imgSrc=".\ProjectIcon\ArtFinder.jpg"
                    imgDate="2022-05-02"
                    repoLink={"https://x6m2nsc5cn.wixsite.com/artfinder"}
                    imgRepo={"./SkillIcon/icons8-more-100.png"}
                />
                <ProjectColumn
                    tools={[
                        { toolSrc: './SkillIcon/c-sharp.png', toolAlt: 'C#', toolTitle: 'C#' },
                        { toolSrc: './SkillIcon/MSSQL.png', toolAlt: 'MSSQL', toolTitle: 'MSSQL' },
                        { toolSrc: './SkillIcon/icons8-scrum-100.png', toolAlt: 'Scrum', toolTitle: 'Scrum' },
                        { toolSrc: './SkillIcon/icons8-kanban-100.png', toolAlt: 'Kanban', toolTitle: 'Kanban' },
                        { toolSrc: './SkillIcon/icons8-poker-100.png', toolAlt: 'Planning poker', toolTitle: 'Planning poker' },
                        { toolSrc: './SkillIcon/icons8-git-100.png', toolAlt: 'Git', toolTitle: 'Git' },
                        { toolSrc: './SkillIcon/github.png', toolAlt: 'Github', toolTitle: 'Github' }
                    ]}
                    githubSrc="./ProjectIcon/readmore.png"
                    title="DinHatt"
                    description="Within this project, our school group had the opportunity to collaborate with a client to develop their system. We employed the agile working method, Scrum, in which one person took on the role of Scrum Master. We utilized Kanban and other agile practices associated with Scrum. The system for this project was built using a custom-made database and a C# GUI."
                    imgSrc=".\ProjectIcon\DinHatt.png"
                    imgDate="2022-03-28"
                    repoLink={"https://dinhatt.blogg.se/"}
                    imgRepo={"./SkillIcon/icons8-more-100.png"}
                />
                <ProjectColumn
                    tools={[
                        { toolSrc: './SkillIcon/icons8-java-100.png', toolAlt: 'Java', toolTitle: 'Java' },
                        { toolSrc: './SkillIcon/mysql.png', toolAlt: 'MySQL', toolTitle: 'MySQL' },
                        { toolSrc: './SkillIcon/icons8-git-100.png', toolAlt: 'Git', toolTitle: 'Git' },
                        { toolSrc: './SkillIcon/github.png', toolAlt: 'Github', toolTitle: 'Github' }
                    ]}
                    githubSrc="./ProjectIcon/readmore.png"
                    title="MIB"
                    description="MIB is a security system inspired by the Men in Black movie. This system is designed to monitor all registered criminals (aliens), agents, and their equipment. Each agent is responsible for a specific section, and there are various types of access levels, with some agents having higher roles that grant them additional privileges within the system. The system was developed using Java and utilized a pre-existing database, including an ER diagram, which served as a foundation for the system's development."
                    imgSrc=".\ProjectIcon\MIB.png"
                    imgDate="2021-05-03"
                    repoLink={"https://github.com/Diyar9/MIB"}
                    imgRepo={"./SkillIcon/github.png"}
                />
            </div>
        </div>
    );
};

export default PageFour;
