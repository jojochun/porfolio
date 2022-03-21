import React from 'react';
import dna from '../const/dna';

function Header() {
    return (
        <header id="home">

            <nav id="nav-wrap">

                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul>

            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">Joanne Chun</h1>
                    <h3>I am a <span>bioengineering/pharmaceutical scientist, </span> researching the molecular genetics and signaling pathways during liver cancer growth.
                        I hope to apply my knowledge of computer science and coding to help develop new therapies to treat this deadly disease.</h3>
                    <hr />

                </div>
                <div className="dna">
                    <dna
                        params={dna}
                        className="dna"
                    />
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

        </header>
    );
}


export default Header;