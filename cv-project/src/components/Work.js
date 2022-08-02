import React, { Component } from "react";
import uniqid from "uniqid";

class Work extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="work-form">
                {this.props.experience?.map((item, i) => {
                    return (
                        <form key={item.id}>
                            <label htmlFor="company">Company</label>
                            <input
                                id="company"
                                type="text"
                                name="company"
                                defaultValue={item.company}
                                onChange={(e) =>
                                    this.props.onChange(
                                        e.target.name,
                                        e.target.value,
                                        i
                                    )
                                }
                            />
                            <label htmlFor="position">Position</label>
                            <input
                                id="position"
                                type="text"
                                name="position"
                                defaultValue={item.position}
                                onChange={(e) =>
                                    this.props.onChange(
                                        e.target.name,
                                        e.target.value,
                                        i
                                    )
                                }
                            />
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                rows={5}
                                defaultValue={item.description}
                                onChange={(e) =>
                                    this.props.onChange(
                                        e.target.name,
                                        e.target.value,
                                        i
                                    )
                                }
                            ></textarea>
                            <label htmlFor="workStartDate">Start Year</label>
                            <input
                                id="workStartDate"
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
                            <label htmlFor="workEndDate">End Year</label>
                            <input
                                id="workEndDate"
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
                            <button
                                type="button"
                                onClick={() =>
                                    this.props.getID("experience", i)
                                }
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

export default Work;
