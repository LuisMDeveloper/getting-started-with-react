import React from "react";

import SubMessage from "./SubMessage"

export default class MessageBox extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Hello World!</h1>
        <SubMessage />
      </div>
    );
  }
}
