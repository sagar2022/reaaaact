import React from 'react';
import "./service.css";
import { data } from './serviceData';



const Service = () => {
    return (
        <>
            <section className="section">
                <div className="section-title">
                    <h2>Services</h2>
                    <div className="underline"></div>
                </div>
                <div className="services-center secton-center">
                       { data.map((link)=>{
                           const {id, className, heading, para} = link;
                           return (
                            <article className="service" key={id}>
                                <i className={className}></i>
                                <h4>{heading}</h4>
                                <div className="underline"></div>
                                <p>{para}</p>
                            </article>
                           ); 
                       })}
                </div>
            </section>
        </>
    )
}

export default Service;
