/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useRef, useEffect } from 'react'

// GSAP Import
import { gsap } from "gsap/dist/gsap";

// Ant Icons Import
import { GithubOutlined, LayoutOutlined } from '@ant-design/icons'

// Image Import
import projectImageOne from '../images/project-images/gitMusic.PNG'
import projectImageTwo from '../images/project-images/openweathermap.PNG'
import projectImageThree from '../images/project-images/convo-chat-app.png'

const PortfolioSection = () => {
    const portfolioRef = useRef(null)

    useEffect(() => {
        gsap.from(portfolioRef.current, { opacity: 0, duration: 1.5 })
    }, [])

    return (
        <main className='portfolio-section' ref={portfolioRef}>
            <div className="portfolio-container">
                <div className="portfolio">
                    <h2 className="portfolio-title">gitMusic</h2>
                    <p className="portfolio-description">
                        An online music store to purchase some great albums. This store was made using React, React Router, Sass and Commerce.js.
                    </p>
                    <div className="portfolio-link-container">
                        <a href="#" className="portfolio-link"><GithubOutlined /> Github Code</a>
                        <a href="#" className="portfolio-link"><LayoutOutlined /> Live Demo</a>
                    </div>
                    <img src={projectImageOne} alt="Project Image" className="portfolio-image" width='420px'/>
                </div>
                <div className="portfolio">
                    <h2 className="portfolio-title">Weather App</h2>
                    <p className="portfolio-description">
                        A weather app that provides you with the current weather along with a five-day forecast. This app was made using React, Sass, GSAP, Axios, OpenWeatherMap Api and TomTom Maps SDK.
                    </p>
                    <div className="portfolio-link-container">
                        <a href="#" className="portfolio-link"><GithubOutlined /> Github Code</a>
                        <a href="#" className="portfolio-link"><LayoutOutlined /> Live Demo</a>
                    </div>
                    <img src={projectImageTwo} alt="Project Image" className="portfolio-image" width='420px'/>
                </div>
                <div className="portfolio">
                    <h2 className="portfolio-title">Convo Chat App</h2>
                    <p className="portfolio-description">
                        An online chat application with google and facebook authentication built using React, React Router, Sass, Axios, Firebase and ChatEngine.
                    </p>
                    <div className="portfolio-link-container">
                        <a href="#" className="portfolio-link"><GithubOutlined /> Github Code</a>
                        <a href="#" className="portfolio-link"><LayoutOutlined /> Live Demo</a>
                    </div>
                    <img src={projectImageThree} alt="Project Image" className="portfolio-image" width='420px'/>
                </div>
                {/* <div className="portfolio">
                    <h2 className="portfolio-title">Project #4</h2>
                    <p className="portfolio-description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid, ut minima doloribus autem modi odio incidunt quam ea numquam.
                    </p>
                    <div className="portfolio-link-container">
                        <a href="#" className="portfolio-link"><GithubOutlined /> Github Code</a>
                        <a href="#" className="portfolio-link"><LayoutOutlined /> Live Demo</a>
                    </div>
                    <img src={projectImage} alt="Project Image" className="portfolio-image" />
                </div> */}
            </div>
        </main>
    )
}

export default PortfolioSection