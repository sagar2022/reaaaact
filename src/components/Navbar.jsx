import React, { useState, useRef, useEffect } from 'react';
import { social, links } from "../data/data";
import { FaBars } from "react-icons/fa";
import logo from "../components/images/loogo.svg";
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
      setShowLinks(!showLinks);
    };
  
    useEffect(() => {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      if (showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
        linksContainerRef.current.style.height = "0px";
      }
    }, [showLinks]);
  
    return (
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <Link to='/'><img src={logo} className="logo" alt="logo" /></Link>
            <button className="nav-toggle" onClick={toggleLinks}>
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="social-icons">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url} target='_blank'>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  };


export default Navbar
