import React, { Component } from "react";

class Work extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="work-form">
                {this.props.experience?.map((item, i) => {
                    return (
                        <form key={i}>
                            <label htmlFor="company">Company</label>
                            <input
                                id="company"
                                type="text"
                                name="company"
                                defaultValue={item.company}
                                onChange={this.props.onChange}
                            />
                            <label htmlFor="position">Position</label>
                            <input
                                id="position"
                                type="text"
                                name="position"
                                defaultValue={item.position}
                                onChange={this.props.onChange}
                            />
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                rows={5}
                                defaultValue={item.description}
                                onChange={this.props.onChange}
                            ></textarea>
                            <label htmlFor="workStartDate">Start Year</label>
                            <input
                                id="workStartDate"
                                type="text"
                                name="start"
                                defaultValue={item.start}
                                onChange={this.props.onChange}
                            />
                            <label htmlFor="workEndDate">End Year</label>
                            <input
                                id="workEndDate"
                                type="text"
                                name="end"
                                defaultValue={item.end}
                                onChange={this.props.onChange}
                            />
                            <button>Delete</button>
                        </form>
                    );
                })}
                <button>Add Entry</button>
            </div>
        );
    }
}

export default Work;
