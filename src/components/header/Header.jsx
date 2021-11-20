import React from 'react';
import "./header.css"
import sagar2 from "../images/sagar2.jpg";

const Header = () => {
    return (
        <header className="hero">
            <div className="secton-center hero-center">
                <article className="hero-info">
                    <div className="underline"></div>
                    <h1>I'm Sagar Chaudhary</h1>
                    <h4 className="typing"></h4>
                    <a href="./components/cv/resume.pdf" download className="btn hero-btn">Download CV</a>
                    <a href="/contact" className="btn hero-btn">Hire Me</a>
                </article>
                <article className="hero-img">
                    <img src={sagar2} className="hero-photo" alt="sagar chaudhary" />
                </article>
            </div>
        </header>
    )
}

export default Header
