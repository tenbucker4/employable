import React, { Component } from "react";
import "../styles/footer.css";

class ColorPicker extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer-buttons">
                <h4>Choose a color theme:</h4>
                <div className="color-picker">
                    <button
                        id="blue"
                        className="active"
                        onClick={(e) => this.props.onClick(e.target.id)}
                    ></button>
                    <button
                        id="green"
                        onClick={(e) => this.props.onClick(e.target.id)}
                    ></button>
                    <button
                        id="red"
                        onClick={(e) => this.props.onClick(e.target.id)}
                    ></button>
                    <button
                        id="black"
                        onClick={(e) => this.props.onClick(e.target.id)}
                    ></button>
                </div>
                <div className="pdf-bin">
                    <button
                        className="download"
                        onClick={this.props.onPdfClick}
                    >
                        Download
                    </button>
                </div>
            </div>
        );
    }
}

export default ColorPicker;
