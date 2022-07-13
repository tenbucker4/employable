import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Work from "./components/Work";
import Resume from "./components/Resume";
import "./styles/app.css";

class App extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <div className="cv-form">
                    <General />
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
