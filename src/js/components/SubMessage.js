import React from "react";

export default class SubMessage extends React.Component {

  static defaultProps = {
    message: 'Its good to see you!'
  }

  static propTypes = {
    message: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <div>{this.props.message}</div>
    );
  }

}
