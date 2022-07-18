import React from "react";

const General = (props) => {
    const { personalDetails } = props;

    return (
        <form>
            <label htmlFor="userName">Your Name</label>
            <input id="userName" type="text" />
            <label htmlFor="userEmail">Your Email</label>
            <input id="userEmail" type="email" />
            <label htmlFor="userTitle">Title</label>
            <input id="userTitle" type="text" />
            <label htmlFor="userPhone">Phone Number</label>
            <input id="userPhone" type="number" />
        </form>
    );
};

export default General;
