import React from 'react';

function About() {

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={profilepic} alt="Joanne's Profile Picture" />
                </div>
                <div className="nine columns main-col">
                    <h2>ABOUT ME</h2>

                    <p>I am passionate about learning new skills and challenge myself to create things that push the boundaries of excellence. I have strong technical skills and am detail oriented and creative.</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>CONTACT</h2>
                            <p className="address">
                                <span>Joanne Chun</span><br />
                                <span>3849 Old Pali Road<br />
                                    Honolulu Hawaii, 96817
                                </span><br />
                                <span>808-780-4564</span><br />
                                <span>jkchun@protonmail.com</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href={resumeDownload} className="button"><i className="fa fa-download"></i>RESUME</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About;