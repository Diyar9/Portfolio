import './App.css';
import Navbar from './components/Navbar'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import PageFour from './components/PageFour';
import ContactMe from './components/ContactMe';
import React, { useRef } from 'react'

function App() {

  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();

  const sections = [
    { label: 'About', ref: section1 },
    { label: 'Skills', ref: section2 },
    { label: 'Experience', ref: section3 },
    { label: 'Project', ref: section4 },
    { label: 'Contact me', ref: section5 }

  ];

  const scrollHandler = (elmRef) => {
    const yOffset = elmRef.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: yOffset, behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar sections={sections} scrollHandler={scrollHandler} />
      <div className='page-one' ref={section1}><PageOne scrollHandler={() => scrollHandler(section5)} /></div>
      <div className='page-two' ref={section2}><PageTwo /></div>
      <div className='page-three' ref={section3}><PageThree /></div>
      <div className='page-four' ref={section4}><PageFour /></div>
      <div className='page-five' ref={section5}><ContactMe /></div>
    </div>
  );
}

export default App;