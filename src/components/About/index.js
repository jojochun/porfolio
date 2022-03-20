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

                    <p>{bio}</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>CONTACT</h2>
                            <p className="address">
                                <span>{name}</span><br />
                                <span>{street}<br />
                                    {city} {state}, {zip}
                                </span><br />
                                <span>{phone}</span><br />
                                <span>{email}</span>
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