import React from "react";

const Education = (props) => {
    return (
        <form>
            <label htmlFor="school">School</label>
            <input id="school" type="text" />
            <label htmlFor="degree">Degree</label>
            <input id="degree" type="text" />
            <label htmlFor="schoolStartDate">Start Date</label>
            <input id="schoolStartDate" type="date" />
            <label htmlFor="schoolEndDate">End Date</label>
            <input id="schoolEndDate" type="date" />
        </form>
    );
};

export default Education;
