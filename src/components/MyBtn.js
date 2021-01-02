import React from "react";

class MyBtn extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            error:false
        }
    }

    render() {
        let name = "React"
        let bgColor = this.props.bgColor ? this.props.bgColor : "#F00"
        return (
            <div style={{backgroundColor: bgColor, color: "#fff"}} onClick={this.props.onClick}>
                {name}
                <p>{this.props.title}</p>
            </div>
        )
    }
}

export default MyBtn;