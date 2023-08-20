import './App.css';
import Navbar from './components/Navbar'
import React, { useRef } from 'react'

function App() {

  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();

  const sections = [
    { label: 'About', ref: section1 },
    { label: 'Skills', ref: section2 },
    { label: 'Experience', ref: section3 },
    { label: 'Project', ref: section4 }

  ];

  const scrollHandler = (elmRef) => {
    const yOffset = elmRef.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: yOffset, behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar sections={sections} scrollHandler={scrollHandler} />
      <div className='content' ref={section1}>About</div>
      <div className='content' ref={section2}>Skills</div>
      <div className='content' ref={section3}>Experience</div>
      <div className='content' ref={section4}>Project</div>
    </div>
  );
}

export default App;