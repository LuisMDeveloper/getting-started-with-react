import React from "react";

import SubMessage from "./SubMessage"

export default class MessageBox extends React.Component {

  constructor() {
    super();
    this.state = {
      isVisible: true,
      titleMessage: 'Hello World!',
      messages: [
        'Excepteur sint occaecat cupidatat non proident',
        'Ut enim ad minim veniam',
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        'Lorem ipsum dolor sit amet',
        'Consectetur adipisicing elit',
      ]
    }
  }

  render() {
    let inlineStyles = {
      display: this.state.isVisible ? 'block' : 'none'
    };

    var messages = this.state.messages.map((message) => {
      return <SubMessage message={message} />
    });

    return (
      <div className="container jumbotron" style={inlineStyles}>
        <h1>{this.props.titleMessage}</h1>
        {messages}
      </div>
    );
  }

}
