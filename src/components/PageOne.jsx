import React from 'react';
import './PageOne.css';
import { Helmet } from 'react-helmet-async'


const PageOne = () => {
    return (
        <div className='page'>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai+Looped:wght@700&display=swap" rel="stylesheet" />
            </Helmet>
            {/*<div className="icon-box">
                <div className="icon-item">
                    <img src=".\ExperienceIcon\diyar.png" alt="" />
                </div>
            </div>
            <div className="content-box">
                <div className="content-column">1</div>
                <div className="content-column">2</div>
                <div className="content-column">3</div>
    </div>*/}
            <div className='box'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1105" height="559" fill="none" viewBox="0 0 1105 559">
                    <path fill="#FFBD20" d="M797.5 333.25a3.5 3.5 0 1 0-7 0h7Zm-7 0v225h7v-225h-7Z" />
                    <path stroke="#FFBD20" stroke-width="7" d="M1101 555H791m310 3.5L1097.53 1m2.97 3h-310" />
                    <path fill="#FFBD20" d="M790.718 229.003a3.5 3.5 0 1 0 7-.007l-7 .007Zm7-.007-.218-225-7 .007.218 225 7-.007ZM136 202.75a3.5 3.5 0 1 0 0-7v7Zm-136 0h136v-7H0v7Z" />
                </svg>
                <div className='name'>
                    <h2>HELLO, I AM DIYAR</h2>
                </div>
                <div className='title'>
                    <h6>I’M A <span className='highlight-text'>SOFTWARE</span> ENGINEER</h6>
                </div>
                <div className='subtitle'>
                    <h5>Are you looking for a fullstack developer who works hard but stays humble?</h5>
                </div>
                <div className='social-container'>
                    <a href="https://www.linkedin.com/in/diyardemircioglu/" target="_blank"><div className='social-item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" fill="none" viewBox="0 0 17 18">
                            <path fill="#fff" d="M0 4.978h3.762V17.25H0V4.978Zm14.432.758c.747.41 1.362 1.029 1.845 1.859.482.83.723 1.678.723 2.545v7.11h-3.798v-7.11c0-.193-.072-.41-.217-.65-.145-.24-.277-.397-.398-.47-.193-.12-.458-.18-.796-.18-.337 0-.602.048-.795.144l-1.556.758v7.508H5.643V4.978H9.44v.578c.748-.337 1.592-.494 2.532-.47.94.024 1.76.241 2.46.65ZM1.88.25c.53 0 .976.18 1.338.541.362.361.543.806.543 1.336s-.181.98-.543 1.353a1.79 1.79 0 0 1-1.338.56 1.79 1.79 0 0 1-1.338-.56A1.873 1.873 0 0 1 0 2.127c0-.53.18-.975.543-1.336A1.82 1.82 0 0 1 1.88.25Z" />
                        </svg>
                    </div></a>
                    <a href="mailto:diyar.d@hotmail.com" target="_blank"><div className='social-item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" fill="none" viewBox="0 0 17 18">
                            <path fill="#fff" d="M4.548 9.563 0 13.223v-7.32l4.548 3.66ZM17 2.731 8.518 9.563 0 2.731V.25h17v2.48Zm0 3.172v7.32l-4.548-3.66L17 5.903Zm-5.522 4.433L17 14.81v2.44H0v-2.44l5.522-4.474 2.996 2.4 2.96-2.4Z" />
                        </svg>
                    </div></a>
                    <a href="https://www.instagram.com/demircioglu_d/" target="_blank"><div className='social-item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" fill="none" viewBox="0 0 17 18">
                            <path fill="#fff" d="M15 7.464h-1.464c.119.429.178.857.178 1.286a5.266 5.266 0 0 1-1.536 3.714A5.265 5.265 0 0 1 10.5 13.59a5.141 5.141 0 0 1-2.036.41 5.014 5.014 0 0 1-2.018-.41 5.266 5.266 0 0 1-2.786-2.804 5.141 5.141 0 0 1-.41-2.035c0-.429.06-.857.179-1.286h-1.5v7.179c0 .19.065.345.196.464a.69.69 0 0 0 .482.179h11.75c.19 0 .345-.06.464-.179a.628.628 0 0 0 .179-.464v-7.18Zm0-4.571a.69.69 0 0 0-.179-.482.598.598 0 0 0-.464-.197h-1.964a.598.598 0 0 0-.464.197.69.69 0 0 0-.179.482V4.82c0 .19.06.352.179.482a.598.598 0 0 0 .464.197h1.964c.19 0 .345-.066.464-.197A.69.69 0 0 0 15 4.821V2.893ZM8.464 5.5c-.904 0-1.672.315-2.303.946s-.947 1.4-.947 2.304c0 .452.084.88.25 1.286a3.19 3.19 0 0 0 1.732 1.75c.393.166.816.25 1.268.25.453 0 .881-.084 1.286-.25a3.19 3.19 0 0 0 1.054-.697c.297-.298.53-.649.696-1.053.167-.405.25-.834.25-1.286a3.212 3.212 0 0 0-2-3 3.343 3.343 0 0 0-1.286-.25ZM1.93 17.25c-.548 0-1.006-.19-1.375-.572A1.927 1.927 0 0 1 0 15.286V2.214C0 1.667.185 1.202.554.821A1.837 1.837 0 0 1 1.929.25H15c.548 0 1.012.19 1.393.571a1.9 1.9 0 0 1 .571 1.393v13.072c0 .547-.19 1.011-.571 1.392A1.895 1.895 0 0 1 15 17.25H1.929Z" />
                        </svg>
                    </div></a>
                    <a href="https://github.com/Diyar9" target="_blank"><div className='social-item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" fill="none" viewBox="0 0 17 18">
                            <path fill="#fff" d="M11.785 9.168c.275 0 .516.14.722.418.206.279.349.58.427.906.138.487.182.987.133 1.498-.05.51-.231.975-.545 1.393-.216.279-.462.418-.737.418-.294 0-.545-.14-.751-.418a2.944 2.944 0 0 1-.457-.906 5.084 5.084 0 0 1-.073-1.498c.049-.51.22-.975.515-1.393.236-.279.491-.418.766-.418Zm-6.54 0c.274 0 .515.14.721.418.206.279.359.58.457.906a4.5 4.5 0 0 1 .103 1.498 2.71 2.71 0 0 1-.545 1.393c-.216.279-.462.418-.737.418-.294 0-.545-.14-.75-.418a2.943 2.943 0 0 1-.458-.906 5.083 5.083 0 0 1-.073-1.498c.049-.51.22-.975.515-1.393.236-.279.491-.418.766-.418Zm10.37-4.25C16.538 6.172 17 7.774 17 9.725c0 1.672-.206 3.008-.619 4.006a5.38 5.38 0 0 1-1.09 1.585 4.929 4.929 0 0 1-1.444 1.028c-.255.116-.525.227-.81.331a6.624 6.624 0 0 1-.928.261c-.334.07-.643.122-.928.157a18.49 18.49 0 0 1-2.519.157h-.766l-.678-.035-.707-.052-.795-.087a7.36 7.36 0 0 1-1.562-.384 7.725 7.725 0 0 1-2.047-1.045c-.658-.464-1.145-1.103-1.459-1.916C.216 12.733 0 11.397 0 9.725c0-1.904.462-3.507 1.385-4.807a7.668 7.668 0 0 1-.265-2.02c0-.93.176-1.812.53-2.648.746 0 1.385.162 1.915.488.295.162.6.365.913.61.315.243.658.528 1.032.853a11.709 11.709 0 0 1 3.152-.418c.982 0 1.935.127 2.858.383.687-.65 1.326-1.138 1.915-1.463C13.965.4 14.613.25 15.379.25a7.23 7.23 0 0 1 .501 2.647 7.67 7.67 0 0 1-.265 2.02Zm-2.062 9.684c.334-.325.609-.749.825-1.271.216-.523.324-1.132.324-1.83 0-.974-.236-1.799-.707-2.472-.432-.674-1.06-1.01-1.886-1.01-.157 0-.398.017-.722.052a19.69 19.69 0 0 0-1.281.191 7.03 7.03 0 0 1-.766.105 9.8 9.8 0 0 1-1.68 0 7.03 7.03 0 0 1-.766-.105 18.11 18.11 0 0 0-1.252-.191 7.465 7.465 0 0 0-.722-.053c-.825 0-1.463.337-1.915 1.01-.471.674-.707 1.498-.707 2.474 0 .697.108 1.306.324 1.829.216.522.491.946.825 1.271a3.79 3.79 0 0 0 1.238.697c.51.186.991.308 1.443.366.452.058.953.087 1.503.087h1.738c.57 0 1.075-.03 1.518-.087.441-.058.918-.18 1.428-.366a3.785 3.785 0 0 0 1.238-.697Z" />
                        </svg>
                    </div></a>
                </div>
            </div>
        </div>
    );
};

export default PageOne;
