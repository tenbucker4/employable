import React, { Component } from "react";

class Work extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <label htmlFor="company">Company</label>
                <input id="company" type="text" />
                <label htmlFor="position">Position</label>
                <input id="position" type="text" />
                <label htmlFor="workStartDate">Start Date</label>
                <input id="workStartDate" type="date" />
                <label htmlFor="workEndDate">End Date</label>
                <input id="workEndDate" type="date" />
            </form>
        );
    }
}

export default Work;
