import React from "react";

export default class SubMessage extends React.Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    this.props.onDelete(this.props.message);
  }

  static defaultProps = {
    message: 'Its good to see you!'
  }

  static propTypes = {
    message: React.PropTypes.string.isRequired
  }

  render() {
    const divStyle = {
      margin: 5
    };

    return (
      <div style={divStyle}>
      {this.props.message}
      <button onClick={this.handleDelete} className="btn btn-danger">x</button>
      </div>
    );
  }

}
