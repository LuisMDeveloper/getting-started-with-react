import React from "react";

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      payment: 0
    }
    this.handlePaymentChange = this.handlePaymentChange.bind(this);
  }

  paymentValueLink = (value) => {
      return {
          value: this.state.payment,
          requestChange: this.handlePaymentChange
      };
  }

  handlePaymentChange(newPayment) {
    this.setState({payment: newPayment});
  }

  render() {
    return (
      <div>
        <input type="text" valueLink={this.paymentValueLink()} />
        {this.state.payment}
      </div>
    );
  }

}
