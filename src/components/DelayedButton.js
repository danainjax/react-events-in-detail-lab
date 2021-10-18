// Code DelayedButton Component Here
import React, { Component } from "react";
// import { EnvironmentPlugin } from "webpack";

class DelayedButton extends Component {
  render(props) {
    console.log(props);
    return (
      <div>
        <button onClick={this.handleClick}>Delayed</button>
      </div>
    );
  }

  handleClick = (event) => {
    console.log(event);
    event.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };
}

export default DelayedButton;
