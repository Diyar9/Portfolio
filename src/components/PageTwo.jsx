import React, { useState, useEffect } from 'react';
import './PageTwo.css';
import './ScrollAnimation.css';
import { Helmet } from 'react-helmet-async'
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

    return (
        <div className="page2">
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai+Looped:wght@700&display=swap" rel="stylesheet" />
            </Helmet>
            <ScrollAnimation />
            <div className='text-box'>
                <div className="text-column"><h2>Skills</h2></div>
                <div className="text-column"><h3>What i am <span className='highlight-text'>great</span> at</h3></div>
                <div className="text-column"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facere quibusdam nulla nesciunt inventore, sequi cupiditate quaerat explicabo ad! Est labore adipisci, suscipit maxime dolores eaque cum dicta ad fugit.</p></div>
            </div>
            <div className="skill-box">
                <div className={`skill-column fade-in scroll-in-${viewportWidth < 768 ? 'left' : 'down'} in-viewport`}>
                    <img src=".\SkillIcon\icons8-frontend-100.png" alt="Frontend/backend" />
                    <h2>Frontend/Backend</h2>
                </div>

                <div className={`skill-column fade-in scroll-in-${viewportWidth < 768 ? 'right' : 'down'} in-viewport`}>
                    <img src=".\SkillIcon\icons8-database-100.png" alt="Database" />
                    <h2>Database</h2>
                </div>

                <div className={`skill-column fade-in scroll-in-${viewportWidth < 768 ? 'left' : 'down'} in-viewport`}>
                    <img src=".\SkillIcon\icons8-agile-100.png" alt="Agile" />
                    <h2>Agile</h2>
                </div>

                <div className={`skill-column fade-in scroll-in-${viewportWidth < 768 ? 'right' : 'down'} in-viewport`}>
                    <img src=".\SkillIcon\icons8-other-100.png" alt="other" />
                    <h2>other</h2>
                </div>
            </div>
        </div>
    );
};

export default PageTwo;