import React from 'react';
import "./latestWork.css";
import { latestProject } from './latestWorkData';
import { Link } from 'react-router-dom';

const LatestWork = () => {
    return (
        <>
          <section className="section projects" data-aos="fade-up">
            <div className="section-title">
                <h2>latest works</h2>
                <div className="underline"></div>
                <p className="projects-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                repudiandae cupiditate ea facilis incidunt, non sapiente! Debitis
                magnam, earum assumenda obcaecati cum quaerat
                </p>
            </div>  
            <div className="section-center projects-center">
                {
                    latestProject.map((link) => {
                        const { id, img, heading, className, url } = link;
                        return (
                            <a href={url} className={className} key={id}>
                                <article className="project">
                                    <img
                                    src={img}
                                    alt="single project"
                                    className="project-img"
                                    />
                                    <div className="project-info">
                                    <h4>{heading}</h4>
                                    </div>
                                </article>
                            </a>
                        )
                    })
                }
            </div>
            <div className="project-btn-wrapper">
                <Link to='/portfolio' className='project-btn'>See More  &#8594;</Link>
            </div>
        </section>
        </>
    );
}

export default LatestWork;
