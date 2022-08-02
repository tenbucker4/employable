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
                    {this.props.education?.map((item, i) => {
                        return (
                            <div key={i} className="education-entry">
                                <p id="degree-title">{item.degree}</p>
                                <p>
                                    {item.school} |{" "}
                                    <span>
                                        {item.start} - {item.end}
                                    </span>
                                </p>
                            </div>
                        );
                    })}
                </section>
                <section className="work-section">
                    <h3>Work Experience</h3>
                    {this.props.experience.map((item, i) => {
                        return (
                            <div key={i} className="work-entry">
                                <div className="work-heading">
                                    <p id="position-title">{item.position}</p>
                                    <p>
                                        {item.company} |{" "}
                                        <span>
                                            {item.start} - {item.end}
                                        </span>
                                    </p>
                                </div>
                                <div className="work-details">
                                    {item.description}
                                </div>
                            </div>
                        );
                    })}
                </section>
                <footer>
                    <p>{this.props.name}</p>
                    <p>{this.props.phone}</p>
                    <p>{this.props.email}</p>
                </footer>
            </div>
        );
    }
}

export default Resume;
