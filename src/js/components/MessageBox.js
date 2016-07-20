import React from "react";

import SubMessage from "./SubMessage"

export default class MessageBox extends React.Component {

  constructor() {
    super();
    this.state = {
      isVisible: true,
      titleMessage: 'Hello World!'
    }
  }

  render() {
    let inlineStyles = {
      display: this.state.isVisible ? 'block' : 'none'
    };
    return (
      <div className="container jumbotron" style={inlineStyles}>
        <h1>{this.state.titleMessage}</h1>
        <SubMessage />
      </div>
    );
  }

}
