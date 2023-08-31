import React, { useState } from 'react';
import './PageFour.css';
import { Helmet } from 'react-helmet-async'

const PageFour = () => {
    return (
        <div className="page4">
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai+Looped:wght@700&display=swap" rel="stylesheet" />
            </Helmet>
            <div className='text-box'>
                <div className="text-column"><h2>Projects</h2></div>
                <div className="text-column"><h3>Dive into my <span className='highlight-text'>Work</span></h3></div>
                <div className="text-column"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facere quibusdam nulla nesciunt inventore, sequi cupiditate quaerat explicabo ad! Est labore adipisci, suscipit maxime dolores eaque cum dicta ad fugit.</p></div>
            </div>
            <div className="project-box">
                <div className="project-column">
                    <div className='img-column'>
                        <img className='img-column-main' src=".\ProjectIcon\Portfolio.png" alt="Portfolio" />
                        <div className='img-column-overlay'>
                            <img src="./ProjectIcon/readmore.png" alt="Read more" />
                        </div>
                    </div>
                    <div className="column-box">
                        <div className="column-item"><h2><span className='highlight-text'>Portfolio</span></h2></div>
                        <div className="column-item"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, provident recusandae. In illum expedita, quidem cupiditate pariatur quo iste odio, sapiente perferendis provident maiores explicabo corrupti natus veritatis voluptates laboriosam.</p></div>
                    </div>
                </div>
                <div className="project-column">
                    <div className='img-column'>
                        <img className='img-column-main' src=".\ProjectIcon\RSS.png" alt="RSS" />
                        <div className='img-column-overlay'>
                            <img src="./ProjectIcon/readmore.png" alt="Read more" />
                        </div>
                    </div>
                    <div className="column-box">
                        <div className="column-item"><h2><span className='highlight-text'>RSS</span></h2></div>
                        <div className="column-item"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, provident recusandae. In illum expedita, quidem cupiditate pariatur quo iste odio, sapiente perferendis provident maiores explicabo corrupti natus veritatis voluptates laboriosam.</p></div>
                    </div>
                </div>
                <div className="project-column">
                    <div className='img-column'>
                        <img className='img-column-main' src=".\ProjectIcon\MIB.png" alt="MIB" />
                        <div className='img-column-overlay'>
                            <img src="./ProjectIcon/readmore.png" alt="Read more" />
                        </div>
                    </div>
                    <div className="column-box">
                        <div className="column-item"><h2><span className='highlight-text'>MIB</span></h2></div>
                        <div className="column-item"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, provident recusandae. In illum expedita, quidem cupiditate pariatur quo iste odio, sapiente perferendis provident maiores explicabo corrupti natus veritatis voluptates laboriosam.</p></div>
                    </div>
                </div>
                <div className="project-column">
                    <div className='img-column'>
                        <img className='img-column-main' src=".\ProjectIcon\DinHatt.jpg" alt="DinHatt" />
                        <div className='img-column-overlay'>
                            <img src="./ProjectIcon/readmore.png" alt="Read more" />
                        </div>
                    </div>
                    <div className="column-box">
                        <div className="column-item"><h2><span className='highlight-text'>DinHatt</span></h2></div>
                        <div className="column-item"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, provident recusandae. In illum expedita, quidem cupiditate pariatur quo iste odio, sapiente perferendis provident maiores explicabo corrupti natus veritatis voluptates laboriosam.</p></div>
                    </div>
                </div>
                <div className="project-column">
                    <div className='img-column'>
                        <img className='img-column-main' src=".\ProjectIcon\ArtFinder.jpg" alt="ArtFinder" />
                        <div className='img-column-overlay'>
                            <img src="./ProjectIcon/readmore.png" alt="Read more" />
                        </div>
                    </div>
                    <div className="column-box">
                        <div className="column-item"><h2><span className='highlight-text'>ArtFinder</span></h2></div>
                        <div className="column-item"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, provident recusandae. In illum expedita, quidem cupiditate pariatur quo iste odio, sapiente perferendis provident maiores explicabo corrupti natus veritatis voluptates laboriosam.</p></div>
                    </div>
                </div>
                <div className="project-column">
                    <div className='img-column'>
                        <img className='img-column-main' src=".\ProjectIcon\Combitech.jpg" alt="Combitech" />
                        <div className='img-column-overlay'>
                            <img src="./ProjectIcon/readmore.png" alt="Read more" />
                        </div>
                    </div>
                    <div className="column-box">
                        <div className="column-item"><h2><span className='highlight-text'>ATMS Light</span></h2></div>
                        <div className="column-item"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, provident recusandae. In illum expedita, quidem cupiditate pariatur quo iste odio, sapiente perferendis provident maiores explicabo corrupti natus veritatis voluptates laboriosam.</p></div>
                    </div>
                </div>
                <div className="project-column">
                    <div className='img-column'>
                        <img className='img-column-main' src=".\ProjectIcon\Sileon.jpg" alt="Sileon" />
                        <div className='img-column-overlay'>
                            <img src="./ProjectIcon/readmore.png" alt="Read more" />
                        </div>
                    </div>
                    <div className="column-box">
                        <div className="column-item"><h2><span className='highlight-text'>Sileon</span></h2></div>
                        <div className="column-item"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, provident recusandae. In illum expedita, quidem cupiditate pariatur quo iste odio, sapiente perferendis provident maiores explicabo corrupti natus veritatis voluptates laboriosam.</p></div>
                    </div>
                </div>

                <div className="project-column">
                    <div className="project-row">
                        <div className='img-row'>
                            <img className='img-row-main' src=".\ProjectIcon\Kalkylator.png" alt="Calculator" />
                            <div className='img-row-overlay'>
                                <img src="./ProjectIcon/readmore-right.png" alt="Read more" />
                            </div>
                        </div>
                        <div className="row-box">
                            <div className="row-item"><h2><span className='highlight-text'>Calculator</span></h2></div>
                            <div className="row-item"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, provident recusandae. In illum expedita, quidem cupiditate pariatur quo iste odio, sapiente perferendis provident maiores explicabo corrupti natus veritatis voluptates laboriosam.</p></div>
                        </div>
                    </div>
                    <div className="project-row">
                        <div className='img-row'>
                            <img className='img-row-main' src=".\ProjectIcon\ProcentKalkylator.png" alt="PercentageCalculator" />
                            <div className='img-row-overlay'>
                                <img src="./ProjectIcon/readmore-right.png" alt="Read more" />
                            </div>
                        </div>
                        <div className="row-box">
                            <div className="row-item"><h2><span className='highlight-text'>Percentage Calculator</span></h2></div>
                            <div className="row-item"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, provident recusandae. In illum expedita, quidem cupiditate pariatur quo iste odio, sapiente perferendis provident maiores explicabo corrupti natus veritatis voluptates laboriosam.</p></div>
                        </div>
                    </div>
                    <div className="project-row">
                        <div className='img-row'>
                            <img className='img-row-main' src=".\ProjectIcon\TemperaturOmvandlare.png" alt="TemperatureConverter" />
                            <div className='img-row-overlay'>
                                <img src="./ProjectIcon/readmore-right.png" alt="Read more" />
                            </div>
                        </div>
                        <div className="row-box">
                            <div className="row-item"><h2><span className='highlight-text'>Temperature Converter</span></h2></div>
                            <div className="row-item"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, provident recusandae. In illum expedita, quidem cupiditate pariatur quo iste odio, sapiente perferendis provident maiores explicabo corrupti natus veritatis voluptates laboriosam.</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageFour;

{/*<div className="column-box-mini">
                        <div className="column-mini-item"><h2><span className='highlight-text'>Portfolio</span></h2></div>
                        <div className="column-mini-item"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, provident recusandae. In illum expedita, quidem cupiditate pariatur quo iste odio, sapiente perferendis provident maiores explicabo corrupti natus veritatis voluptates laboriosam.</p></div>
                        <div className="column-mini-item"><h5><span className='highlight-text'>Read more</span></h5></div>
                    </div> */}