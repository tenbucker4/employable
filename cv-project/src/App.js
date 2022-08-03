import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Work from "./components/Work";
import Resume from "./components/Resume";
import ColorPicker from "./components/ColorPicker";
import "./styles/app.css";
import uniqid from "uniqid";
import JsPDF from "jspdf";

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
                {
                    degree: "M.Sc Chemistry",
                    school: "Queen's University",
                    start: "2019",
                    end: "2020",
                    id: uniqid(),
                },
                {
                    degree: "B.Sc Chemistry (Honours)",
                    school: "Queen's University",
                    start: "2014",
                    end: "2019",
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
            colors: {
                blue: {
                    dark: "#195c70",
                    light: "#81aebb",
                },
                green: {
                    dark: "rgb(0, 78, 26)",
                    light: "rgb(122, 182, 141)",
                },
                red: {
                    dark: "rgb(129, 2, 2)",
                    light: "rgb(229, 172, 172)",
                },
                black: {
                    dark: "black",
                    light: "rgb(147, 146, 146)",
                },
            },
        };

        // this.handlePersonalChange = this.handlePersonalChange.bind(this);
        // this.handleEducationChange = this.handleEducationChange.bind(this);
        // this.handleWorkChange = this.handleWorkChange.bind(this);
        // ONLY NEED WHEN NOT USING ARROW FUNCTIONS
    }

    // Update state when personal details are changed
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

    // Update state when education details are changed
    handleEducationChange = (name, value, i) => {
        this.setState(({ education }) => ({
            education: [
                ...education.slice(0, i),
                {
                    ...education[i],
                    [name]: value,
                },
                ...education.slice(i + 1),
            ],
        }));
    };

    // Update state when work details are changed
    handleWorkChange = (name, value, i) => {
        this.setState(({ experience }) => ({
            experience: [
                ...experience.slice(0, i),
                {
                    ...experience[i],
                    [name]: value,
                },
                ...experience.slice(i + 1),
            ],
        }));
    };

    // Add entry to education array in state when new entry is populated
    handleEducationItemAdd = () => {
        const id = uniqid();
        this.setState((prevState) => ({
            ...prevState,
            education: [
                ...prevState.education,
                {
                    id: id,
                    school: "",
                    degree: "",
                    start: "",
                    end: "",
                },
            ],
        }));
    };

    // Add entry to work array in state when new entry is populated
    handleWorkItemAdd = () => {
        const id = uniqid();
        this.setState((prevState) => ({
            ...prevState,
            experience: [
                ...prevState.experience,
                {
                    id: id,
                    company: "",
                    position: "",
                    start: "",
                    end: "",
                },
            ],
        }));
    };

    // Delete selected item from education/experience array
    handleEducationItemDelete = (property, index) => {
        this.setState((prevState) => ({
            ...prevState,
            [property]: [...prevState[property]].filter(
                (item) => item.id !== index
            ),
        }));
    };

    // Get unique ID of item to be deleted
    getUniqueId = (property, index) => {
        this.handleEducationItemDelete(
            property,
            this.state[property][index].id
        );
    };

    handleColorChange = (color) => {
        document.getElementById("name-title").style.color =
            this.state.colors[color].dark;
        document.querySelector("header").style.borderBottom =
            "3px solid " + this.state.colors[color].light;
        document.getElementById("education-title").style.color =
            this.state.colors[color].dark;
        document.getElementById("work-title").style.color =
            this.state.colors[color].dark;
        document.querySelector("footer").style.borderTop =
            "2px solid " + this.state.colors[color].light;
    };

    generatePDF = () => {
        const report = new JsPDF("portrait", "pt", "a4");
        report.html(document.querySelector(".resume-bin")).then(() => {
            report.save("report.pdf");
        });
    };

    render() {
        return (
            <div className="container">
                <h1>Hired</h1>
                <div className="cv-form">
                    <h3>Personal Details</h3>
                    <General onChange={this.handlePersonalChange} />
                    <h3>Education</h3>
                    <Education
                        education={this.state.education}
                        onChange={this.handleEducationChange}
                        onAdd={this.handleEducationItemAdd}
                        onDelete={this.handleEducationItemDelete}
                        getID={this.getUniqueId}
                    />
                    <h3>Work Experience</h3>
                    <Work
                        experience={this.state.experience}
                        onChange={this.handleWorkChange}
                        onAdd={this.handleWorkItemAdd}
                        onDelete={this.handleEducationItemDelete}
                        getID={this.getUniqueId}
                    />
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
                    <ColorPicker
                        onClick={this.handleColorChange}
                        onPdfClick={this.generatePDF}
                    />
                </div>
            </div>
        );
    }
}

export default App;
