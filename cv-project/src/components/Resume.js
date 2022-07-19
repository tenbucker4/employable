import React, { Component } from "react";
import "../styles/resume.css";

class Resume extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="resume-bin">
                <header>
                    <div className="heading">
                        <h1>{this.props.name}</h1>
                        <h2>{this.props.title}</h2>
                    </div>
                    <div className="contact-details">
                        <ul>
                            <li>
                                <img src={require("../images/phone.png")} />
                                {this.props.phone}
                            </li>
                            <li>
                                <img src={require("../images/email.png")} />
                                {this.props.email}
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
                <section className="work-section">
                    <h3>Work Experience</h3>
                    <div className="work-entry">
                        <div className="work-heading">
                            <p>Analytical Chemist</p>
                            <p>
                                Toronto Research Chemicals |{" "}
                                <span>2020 - 2021</span>
                            </p>
                        </div>
                        <div className="work-details">
                            Cupidatat sunt anim incididunt nisi labore sunt
                            nulla Lorem elit irure. Aliquip quis excepteur et
                            nostrud enim irure nostrud officia. Et deserunt et
                            aliquip voluptate elit cupidatat. Adipisicing enim
                            minim do anim eiusmod est. Irure laboris anim
                            voluptate proident. Cillum reprehenderit est magna
                            minim. Nostrud ex aute laborum ea irure amet ea
                            ipsum ut non minim anim nisi.
                        </div>
                    </div>
                    <div className="work-entry">
                        <div className="work-heading">
                            <p>Analytical Chemist</p>
                            <p>
                                Toronto Research Chemicals |{" "}
                                <span>2020 - 2021</span>
                            </p>
                        </div>
                        <div className="work-details">
                            Cupidatat sunt anim incididunt nisi labore sunt
                            nulla Lorem elit irure. Aliquip quis excepteur et
                            nostrud enim irure nostrud officia. Et deserunt et
                            aliquip voluptate elit cupidatat. Adipisicing enim
                            minim do anim eiusmod est. Irure laboris anim
                            voluptate proident. Cillum reprehenderit est magna
                            minim. Nostrud ex aute laborum ea irure amet ea
                            ipsum ut non minim anim nisi.
                        </div>
                    </div>
                </section>
                <footer>
                    <p>Ben Tucker</p>
                    <p>778-555-5555</p>
                    <p>bwtucker4@gmail.com</p>
                </footer>
            </div>
        );
    }
}

export default Resume;
