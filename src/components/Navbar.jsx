import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Helmet } from 'react-helmet-async'

const Navbar = ({ sections, scrollHandler }) => {

    // TO CHANGE BURGER CLASSES
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [scroll_class, setScrollClass] = useState("scroll-bar visible");
    const [page_class, setPageClass] = useState("page-bar visible");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu visible");
            setScrollClass("scroll-bar hidden");
            setPageClass("page-bar hidden");
            document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu hidden");
            setScrollClass("scroll-bar visible");
            setPageClass("page-bar visible");
            document.body.style.overflow = "auto"; // Enable scrolling
        }
        setIsMenuClicked(!isMenuClicked);
    };

    // TO CHANGE SCROLL CLASSES + WINDOW-SCROLL
    const [circle_class, setCircleClass] = useState("circle-outside unclicked");
    const [circle_class_primary, setCircleClassPrimary] = useState("circle-primary");

    const [circleStates, setCircleStates] = useState(sections.map(() => false));
    const [currentPrimaryIndex, setCurrentPrimaryIndex] = useState(-1);
    const [activeSectionIndex, setActiveSectionIndex] = useState(-1);

    /*const handleMenuClick = (index) => {
        setIsMenuClicked(false);
        setActiveSectionIndex(index); // Update the active section index directly
        setCurrentPrimaryIndex(index); // Update the primary circle
        setCircleStates(circleStates.map((_, i) => i === index)); // Update circle states
        scrollHandler(sections[index].ref);
    };*/

    const handleMenuClick = (event, index) => {
        event.preventDefault(); // Prevent the default link behavior
        setIsMenuClicked(false);
        setCurrentPrimaryIndex(index); // Update the primary circle
        scrollHandler(sections[index].ref);
    };


    const handleCircleClick = (index) => {
        scrollHandler(sections[index].ref); // Scroll to the section's top position
        setCurrentPrimaryIndex(index); // Update primary circle
    };
    
    
    
    useEffect(() => {
        const handleScroll = () => {
            // Calculate the current active section based on the scroll position
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
        
            const newActiveSectionIndex = sections.findIndex(section => {
                const sectionTop = section.ref.current.offsetTop;
                const sectionBottom = sectionTop + section.ref.current.offsetHeight;
                return scrollTop >= sectionTop - windowHeight / 2 && scrollTop < sectionBottom - windowHeight / 2;
            });
        
            if (newActiveSectionIndex !== -1) {
                setActiveSectionIndex(newActiveSectionIndex);
                setCurrentPrimaryIndex(newActiveSectionIndex); // Update primary circle
            }
        
            // Update circleStates based on activeSectionIndex
            const newCircleStates = sections.map((_, i) => i === newActiveSectionIndex);
            setCircleStates(newCircleStates);
        };

        const handleWindowScroll = () => {
            if (!isMenuClicked) {
                handleScroll();
            }
        };

        // Set up initial scroll behavior based on menu state
        if (isMenuClicked) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Update the page number dynamically
        const pageNumberElement = document.querySelector('.page-number');
        if (pageNumberElement) {
            pageNumberElement.textContent = `${activeSectionIndex + 1} | ${sections.length}`;
        }

        window.addEventListener("scroll", handleWindowScroll);

        return () => {
            window.removeEventListener("scroll", handleWindowScroll);
            document.body.style.overflow = "auto";
        };
    }, [sections, isMenuClicked, activeSectionIndex]);

    // PAGE-BAR
    const [number_class, setNumberClass] = useState("page-number");

    return (
        <div className='nav-bar'>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai+Looped:wght@700&display=swap" rel="stylesheet" />
            </Helmet>
            <nav>

                <div className='burger-menu' onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={`${burger_class} middle`}></div>
                    <div className={burger_class}></div>
                </div>

                <div className={scroll_class}>
    {sections.map((section, index) => (
        <div className={`circle-outside ${index === currentPrimaryIndex ? "clicked" : ""}`} key={index} onClick={() => handleCircleClick(index)}>
            <div className={index === currentPrimaryIndex ? circle_class_primary : ""}></div>
        </div>
    ))}
</div>




                <div className={page_class}>
                    <div className={number_class}>
                        <p>1 | {sections.length}</p>
                    </div>
                </div>

            </nav>
            <div className={menu_class}>
                <ul className='links'>
                    {sections.map((section, index) => (
                        <li
                            key={index}
                            onClick={(event) => handleMenuClick(event, index)}
                            className={index === activeSectionIndex ? "active" : ""}
                        >
                            <a href="#">{section.label}</a>
                        </li>
                    ))}

                </ul>
            </div>
        </div>

    );
}

export default Navbar;