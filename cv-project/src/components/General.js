import React, { Component } from "react";

class General extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="general-form">
                <form>
                    <label htmlFor="userName">Your Name</label>
                    <input
                        id="userName"
                        type="text"
                        name="name"
                        defaultValue="Ben Tucker"
                        onChange={this.props.onChange}
                    />
                    <label htmlFor="userEmail">Your Email</label>
                    <input
                        id="userEmail"
                        type="email"
                        name="email"
                        defaultValue="bwtucker4@gmail.com"
                        onChange={this.props.onChange}
                    />
                    <label htmlFor="userTitle">Title</label>
                    <input
                        id="userTitle"
                        type="text"
                        name="title"
                        defaultValue="Software Developer"
                        onChange={this.props.onChange}
                    />
                    <label htmlFor="userPhone">Phone Number</label>
                    <input
                        id="userPhone"
                        type="text"
                        name="phone"
                        defaultValue="778-555-5555"
                        onChange={this.props.onChange}
                    />
                </form>
            </div>
        );
    }
}

export default General;
