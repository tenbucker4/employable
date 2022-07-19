import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Work from "./components/Work";
import Resume from "./components/Resume";
import "./styles/app.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            personalDetails: {
                name: "Ben Tucker",
                title: "",
                phone: "",
                email: "",
            },
            education: [],
            experience: [],
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            personalDetails: {
                name: e.target.value,
            },
        });
        console.log("hi");
    };

    render() {
        return (
            <div className="container">
                <div className="cv-form">
                    <General onChange={this.handleChange} />
                    <Education />
                    <Work />
                </div>
                <div className="cv-display">
                    <Resume />
                </div>
            </div>
        );
    }
}

export default App;
