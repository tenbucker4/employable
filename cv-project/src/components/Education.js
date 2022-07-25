import React from "react";

const Education = (props) => {
    return (
        <form>
            <label htmlFor="school">School</label>
            <input id="school" type="text" defaultValue="The Odin Project" />
            <label htmlFor="degree">Degree</label>
            <input
                id="degree"
                type="text"
                defaultValue="Fullstack Javascript"
            />
            <label htmlFor="schoolStartDate">Start Year</label>
            <input id="schoolStartDate" type="text" defaultValue="2022" />
            <label htmlFor="schoolEndDate">End Year</label>
            <input id="schoolEndDate" type="text" defaultValue="Present" />
        </form>
    );
};

export default Education;
