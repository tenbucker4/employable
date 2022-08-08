import React, { Component } from "react";
import uniqid from "uniqid";

class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="education-form">
                {this.props.education?.map((item, i) => {
                    return (
                        <form key={item.id}>
                            <div className="form-line">
                                <label htmlFor="school">School</label>
                                <input
                                    id="school"
                                    type="text"
                                    name="school"
                                    defaultValue={item.school}
                                    onChange={(e) =>
                                        this.props.onChange(
                                            e.target.name,
                                            e.target.value,
                                            i
                                        )
                                    }
                                />
                            </div>
                            <div className="form-line">
                                <label htmlFor="degree">Degree</label>
                                <input
                                    id="degree"
                                    type="text"
                                    name="degree"
                                    defaultValue={item.degree}
                                    onChange={(e) =>
                                        this.props.onChange(
                                            e.target.name,
                                            e.target.value,
                                            i
                                        )
                                    }
                                />
                            </div>
                            <div className="form-line">
                                <label htmlFor="schoolStartDate">
                                    Start Year
                                </label>
                                <input
                                    id="schoolStartDate"
                                    type="text"
                                    name="start"
                                    defaultValue={item.start}
                                    onChange={(e) =>
                                        this.props.onChange(
                                            e.target.name,
                                            e.target.value,
                                            i
                                        )
                                    }
                                />
                            </div>
                            <div className="form-line">
                                <label htmlFor="schoolEndDate">End Year</label>
                                <input
                                    id="schoolEndDate"
                                    type="text"
                                    name="end"
                                    defaultValue={item.end}
                                    onChange={(e) =>
                                        this.props.onChange(
                                            e.target.name,
                                            e.target.value,
                                            i
                                        )
                                    }
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => this.props.getID("education", i)}
                            >
                                Delete
                            </button>
                        </form>
                    );
                })}
                <button onClick={this.props.onAdd}>Add Entry</button>
            </div>
        );
    }
}

export default Education;
