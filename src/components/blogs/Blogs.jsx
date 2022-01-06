import React from 'react';
import "./blogs.css";
import github from "../images/git.png";
import sagar3 from "../images/sagar3.jpg";
import css from "../images/css.jpg";
import js from "../images/js.png";
import react from "../images/react.png";
import { Link } from 'react-router-dom';



const Blogs = () => {
    return (
        <>
            <section className="section blog">
                <div className="section-title">
                    <h2>Blogs</h2>
                    <div className="underline"></div>
                </div>
                <div className="section-center blog-center">

                    <div className="card">
                        <div className="card-side card-front">
                            <img src={github} alt="github"/>
                            <div className="card-info">
                                <h4>Learn For Beginers</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Sint, ea.
                                </p>
                                <div className="card-footer">
                                    <img src={sagar3} alt="" />
                                    <p>Sagar Chaudhary</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-side card-back">
                            <Link to="/github" className="btn hero-btn">Read More</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-side card-front">
                            <img src={css} alt=""/>
                            <div className="card-info">
                                <h4>Learn For Beginers</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Sint, ea.
                                </p>
                                <div className="card-footer">
                                    <img src={sagar3} alt="" />
                                    <p>Sagar Chaudhary</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-side card-back">
                            <Link to="/css" className="btn hero-btn">Read More</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-side card-front">
                            <img src={react} alt=""/>
                            <div className="card-info">
                                <h4>Learn For Beginers</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Sint, ea.
                                </p>
                                <div className="card-footer">
                                    <img src={sagar3} alt="" />
                                    <p>Sagar Chaudhary</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-side card-back">
                            <Link to="/react" className="btn hero-btn">Read More</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-side card-front">
                            <img src={js} alt=""/>
                            <div className="card-info">
                                <h4>Learn For Beginers</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Sint, ea.
                                </p>
                                <div className="card-footer">
                                    <img src={sagar3} alt="" />
                                    <p>Sagar Chaudhary</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-side card-back">
                            <Link to="/javascript" className="btn hero-btn">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="blogs-btn-wrapper">
                    <Link to='/blog' className='blogs-btn'>See More &#8594;</Link>
                </div>
            </section>
        </>
    )
}

export default Blogs;
