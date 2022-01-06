import React from 'react';
import { skillDataOne, skillDataTwo } from './skillData';
import "./skill.css";

const Skill = () => {
    return (
        <>
            <section className="section skills">
                <div className="section-title">
                    <h2>Skills</h2>
                    <div className="underline"></div>
                </div>

                <div className="secton-center skills-center">
                    <article>
                        <h3>Front-End Developer</h3>
                        {
                            skillDataOne.map((link)=>{
                                const {id, paraHead, classOne, classTwo, percentage} = link;
                                return(
                                    <div className="skill" key={id}>
                                        <p>{paraHead}</p>
                                        <div className="skill-container">
                                            <div className={classOne}></div>
                                            <p className={classTwo}>
                                                {percentage}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </article>

                    <article>
                        <h3>Design</h3>
                       {
                           skillDataTwo.map((link)=>{
                               const {id, paraHead, classOne, classTwo, percentage} = link;
                               return(
                                <div className="skill" key={id}>
                                    <p>{paraHead}</p>
                                    <div className="skill-container">
                                        <div className={classOne}></div>
                                        <p className={classTwo}>
                                            {percentage}
                                        </p>
                                    </div>
                                </div>
                               )
                           })
                       }
                    </article>
                </div>
            </section>
        </>
    )
}

export default Skill;
