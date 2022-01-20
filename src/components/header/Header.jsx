import React from 'react';
import { Link } from "react-router-dom";
import "./header.css"
import sagar2 from "../images/sagar2.jpg";
import sagar1 from "../images/sagar.jpg";
import Service from '../service/Service';
import Skill from '../skills/Skill';
import Blogs from "../blogs/Blogs";
import Footer from '../footer/Footer';
import LatestWork from '../latestWork/LatestWork';


const Header = () => {
    return (
        <>
        {/* -----hero-sections------ */}
            <header className="hero">
                <div className="secton-center hero-center">
                    <article className="hero-info">
                        <div className="underline"></div>
                        <h1>I'm Sagar Chaudhary</h1>
                        <h4 className="typing"></h4>
                        <a href="./components/cv/Resume-new.pdf" download className="btn download-btn">Download CV</a>
                        <Link to="/contact" className="btn hire-btn">Hire Me</Link>
                    </article>
                    <article className="hero-img">
                        <img src={sagar2} className="hero-photo" alt="sagar chaudhary" />
                    </article>
                </div>
            </header>

            {/* -------About info----- */}

            <section className="section about">
                <div className="section-center about-center">
                    <artcle className="about-img">
                        <img src={sagar1} alt="sagar1" />
                    </artcle>
                    <article className="about-info">
                        <div className="section-title about-title">
                            <h2>About</h2>
                            <div className="underline"></div>
                        </div>
                        <p>
                            Hello, I am Sagar Chaudhary and I am a web developer. I live and work in
                            somewhere warm. I spend most of my day, experimenting with HTML, CSS
                            and JavaScript (and its endless list of frameworks). I enjoy coding
                            and the challenge of learning something new everyday. You can also
                            find me on Social media platform.
                        </p>
                    </article>
                </div>
            </section>

            {/* sevices secton */}

            <Service />
            <LatestWork />
            <Skill />
            <Blogs />
            <Footer />
        </>
    );
}

export default Header
