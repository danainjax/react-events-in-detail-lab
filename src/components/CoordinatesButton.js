// Code CoordinatesButton Component Here
import React, { Component } from "react";

class CoordinatesButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Coordinates</button>
      </div>
    );
  }

  handleClick = (event, props) => {
    console.log(this.props);
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };
}

export default CoordinatesButton;
