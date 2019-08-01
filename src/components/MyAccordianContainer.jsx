import React, { Component } from "react";
import MyAccordian from "./MyAccordian";

class MyAccordianContainer extends Component {
  state = {
    isHidden: false
  };

  handleClick = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };
  render() {
    return (
      <div className="accordian">
        <span className="btn btn-secondary" onClick={this.handleClick}>
          Accordian Demo
        </span>
        <span>{!this.state.isHidden && <MyAccordian />}</span>
      </div>
    );
  }
}

export default MyAccordianContainer;
