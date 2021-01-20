import React, { Component } from "react";

class Loadingpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false,
    };
    this.timer = setTimeout(this.showMessage, 2500);
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  messageTime() {
    this.setState({
      showMessage: true,
    });
  }
  render() {
    const { showMessage } = this.state;
    if (!showMessage) {
      return null;
    }
    return <div>...Loading</div>;
  }
}

export default Loadingpage;
