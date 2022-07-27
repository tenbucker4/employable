import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Work from "./components/Work";
import Resume from "./components/Resume";
import "./styles/app.css";
import uniqid from "uniqid";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            personalDetails: {
                name: "Ben Tucker",
                title: "Software Developer",
                phone: "778-555-5555",
                email: "bwtucker4@gmail.com",
            },
            education: [
                {
                    degree: "Fullstack Javascript",
                    school: "The Odin Project",
                    start: "2022",
                    end: "Present",
                    id: uniqid(),
                },
            ],
            experience: [
                {
                    company: "Toronto Research Chemicals",
                    position: "Analytical Chemist",
                    description:
                        "Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure.",
                    start: "2020",
                    end: "2021",
                    id: uniqid(),
                },
            ],
        };

        // this.handlePersonalChange = this.handlePersonalChange.bind(this);
        // this.handleEducationChange = this.handleEducationChange.bind(this);
        // this.handleWorkChange = this.handleWorkChange.bind(this);
        // ONLY NEED WHEN NOT USING ARROW FUNCTIONS
    }

    handlePersonalChange = (e) => {
        const { name, value } = e.target;

        this.setState((prevState) => ({
            ...prevState,
            personalDetails: {
                ...prevState.personalDetails,
                [name]: value,
            },
        }));

        console.log(this.state);
    };

    handleEducationChange = (e) => {
        const { name, value } = e.target;

        this.setState(({ education }) => ({
            education: [
                {
                    ...education[0],
                    [name]: value,
                },
            ],
        }));
    };

    handleWorkChange = (e) => {
        const { name, value } = e.target;

        this.setState(({ experience }) => ({
            experience: [
                {
                    ...experience[0],
                    [name]: value,
                },
            ],
        }));
    };

    render() {
        return (
            <div className="container">
                <div className="cv-form">
                    <General onChange={this.handlePersonalChange} />
                    <Education onChange={this.handleEducationChange} />
                    <Work onChange={this.handleWorkChange} />
                </div>
                <div className="cv-display">
                    <Resume
                        name={this.state.personalDetails.name}
                        title={this.state.personalDetails.title}
                        phone={this.state.personalDetails.phone}
                        email={this.state.personalDetails.email}
                        education={this.state.education}
                        experience={this.state.experience}
                    />
                </div>
            </div>
        );
    }
}

export default App;
