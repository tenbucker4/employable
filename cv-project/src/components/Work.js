import React, { Component } from "react";

class Work extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <label htmlFor="company">Company</label>
                <input
                    id="company"
                    type="text"
                    name="company"
                    defaultValue="Toronto Research Chemicals"
                    onChange={this.props.onChange}
                />
                <label htmlFor="position">Position</label>
                <input
                    id="position"
                    type="text"
                    name="position"
                    defaultValue="Analytical Chemist"
                    onChange={this.props.onChange}
                />
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    rows={5}
                    defaultValue="Cupidatat sunt anim incididunt nisi labore sunt
                            nulla Lorem elit irure."
                    onChange={this.props.onChange}
                ></textarea>
                <label htmlFor="workStartDate">Start Year</label>
                <input
                    id="workStartDate"
                    type="text"
                    name="start"
                    defaultValue="2020"
                    onChange={this.props.onChange}
                />
                <label htmlFor="workEndDate">End Year</label>
                <input
                    id="workEndDate"
                    type="text"
                    name="end"
                    defaultValue="2021"
                    onChange={this.props.onChange}
                />
            </form>
        );
    }
}

export default Work;
