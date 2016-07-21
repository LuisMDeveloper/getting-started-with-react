import React from "react";
import { array } from 'lodash';

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
    };
    this.handleAdd = this.handleAdd.bind(this); // ES6 require you bind manually 'this'
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  handleAdd(e) {
    let newMessage = this.refs.newMessage.value;
    let updatedMessages = this.state.messages.concat([newMessage]);
    this.setState({
      messages: updatedMessages
    });
  }

  deleteMessage(message) {
    let updatedMessages = _.without(this.state.messages, message);
    this.setState({
      messages: updatedMessages
    });
  }

  render() {
    let inlineStyles = {
      display: this.state.isVisible ? 'block' : 'none'
    };

    var messages = this.state.messages.map((message) => {
      return <SubMessage message={message} onDelete={this.deleteMessage}/>
    });

    return (
      <div className="container jumbotron" style={inlineStyles}>
        <h1>{this.props.titleMessage}</h1>
        <div className="form-inline">
          <input ref="newMessage" type="text" className="form-control"></input>
          <button className="btn btn-primary" onClick={this.handleAdd}>Add</button>
        </div>

        {messages}
      </div>
    );
  }

}
