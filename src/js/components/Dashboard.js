import React from "react";
import $ from 'jquery';

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      temp: 0
    }
    this.loadData = this.loadData.bind(this);
  }

  loadData() {
    return $.get("https://react-demo-8ba5f.firebaseio.com/"+this.props.url+".json");
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    this.loadData().then((data) => {
      this.setState({
        temp: data
      });
    })
  }

  render() {
    return (
      <div className="container jumbotron">
        <h2>{this.state.temp}</h2>
      </div>
    );
  }
}
