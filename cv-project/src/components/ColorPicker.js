import React, { Component } from "react";
import "../styles/footer.css";

class ColorPicker extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer-buttons">
                <div className="color-picker">
                    <button
                        id="blue"
                        onClick={(e) => this.props.onClick(e.target.id)}
                    >
                        Blue
                    </button>
                    <button
                        id="green"
                        onClick={(e) => this.props.onClick(e.target.id)}
                    >
                        Green
                    </button>
                    <button
                        id="red"
                        onClick={(e) => this.props.onClick(e.target.id)}
                    >
                        Red
                    </button>
                    <button
                        id="black"
                        onClick={(e) => this.props.onClick(e.target.id)}
                    >
                        Black
                    </button>
                </div>
                <div className="pdf-bin"></div>
            </div>
        );
    }
}

export default ColorPicker;
