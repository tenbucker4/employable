import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="education-form">
                <form>
                    <label htmlFor="school">School</label>
                    <input
                        id="school"
                        type="text"
                        name="school"
                        defaultValue="The Odin Project"
                        onChange={this.props.onChange}
                    />
                    <label htmlFor="degree">Degree</label>
                    <input
                        id="degree"
                        type="text"
                        name="degree"
                        defaultValue="Fullstack Javascript"
                        onChange={this.props.onChange}
                    />
                    <label htmlFor="schoolStartDate">Start Year</label>
                    <input
                        id="schoolStartDate"
                        type="text"
                        name="start"
                        defaultValue="2022"
                        onChange={this.props.onChange}
                    />
                    <label htmlFor="schoolEndDate">End Year</label>
                    <input
                        id="schoolEndDate"
                        type="text"
                        name="end"
                        defaultValue="Present"
                        onChange={this.props.onChange}
                    />
                    <button>Delete</button>
                </form>
                <button>Add Entry</button>
            </div>
        );
    }
}

export default Education;
