import React from 'react';
import Footer from '../footer/Footer';

const style = {
    color: '#fff',
    textAlign: 'center',
    lineHeight: '1.5'
}

const Contact = () => {
    return (
        <>
            <section className="section single-page" style={style}>
                <div className="section-title">
                    <h1>contact</h1>
                    <div className="underline"></div>
                </div>
                <div className="section-center page-info">
                    <p>
                    If you are looking to get ahold of me, you can send me an email at
                    <a href="mailto:chaudharysagar256@gmail.com"> @chaudharysagar256</a>
                    </p>
                    <p>or you can contact me through phone call <strong>+977-9806025406</strong> </p>
                    <p>
                    You can also reach me on Facebook at 
                    <a href="https://facebook.com/emoz.anbu" target="_blank"> @sagar</a>
                    </p>
                </div>
            </section>
         <Footer /> 
        </>
    );
}

export default Contact;
