import React from 'react'
import Footer from '../footer/Footer';
import github from "../images/git.png";
import sagar3 from "../images/sagar3.jpg";
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <>
         <div className="section blog">
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
            </div> 
         </div>
         <Footer />
        </>
    )
}

export default Blog;