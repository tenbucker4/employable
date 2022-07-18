import React from "react";
import "../styles/resume.css";

const Resume = (props) => {
    return (
        <div className="resume-bin">
            <header>
                <div className="heading">
                    <h1>Ben Tucker</h1>
                    <h2>Software Developer</h2>
                </div>
                <div className="contact-details">
                    <ul>
                        <li>
                            <img src={require("../images/phone.png")} />
                            778-555-5555
                        </li>
                        <li>
                            <img src={require("../images/email.png")} />
                            bwtucker4@gmail.com
                        </li>
                    </ul>
                </div>
            </header>
            <section className="education-section">
                <h3>Education</h3>
                <div className="education-entry">
                    <p>Fullstack Javascript</p>
                    <p>
                        The Odin Project | <span>2022 - Present</span>
                    </p>
                </div>
                <div className="education-entry">
                    <p>M.Sc Chemistry</p>
                    <p>
                        Queen's University | <span>2019 - 2020</span>
                    </p>
                </div>
                <div className="education-entry">
                    <p>B.Sc Chemistry (Honours)</p>
                    <p>
                        Queen's University | <span>2014 - 2019</span>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Resume;
