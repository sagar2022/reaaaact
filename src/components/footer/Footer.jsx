import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <ul className="icons">
                    <li>
                        <a href="https://www.facebook.com/emoz.anbu" className="icon" target='_blank'>
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/AnbuEmoz" className="icon" target='_blank'>
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/sagar2022/" className="icon" target='_blank'>
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.github.com/sagar2022" className="icon" target='_blank'>
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/emoz.anbuu/" className="icon" target='_blank'>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>

                <p>&copy; Sagar Chaudhary. All right reserved</p>
            </footer>  
        </>
    )
}

export default Footer;

