import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Work from "./components/Work";
import Resume from "./components/Resume";
import "./styles/app.css";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";

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
                },
            ],
            experience: [],
        };

        this.handlePersonalChange = this.handlePersonalChange.bind(this);
        this.handleEducationChange = this.handleEducationChange.bind(this);
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

    render() {
        return (
            <div className="container">
                <div className="cv-form">
                    <General onChange={this.handlePersonalChange} />
                    <Education onChange={this.handleEducationChange} />
                    <Work />
                </div>
                <div className="cv-display">
                    <Resume
                        name={this.state.personalDetails.name}
                        title={this.state.personalDetails.title}
                        phone={this.state.personalDetails.phone}
                        email={this.state.personalDetails.email}
                        education={this.state.education}
                    />
                </div>
            </div>
        );
    }
}

export default App;
