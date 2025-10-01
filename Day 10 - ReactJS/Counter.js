import React, { Component } from "react";
import MyHocComp from "./MyHocComp";

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 0,
  //   };
  // }

  // incrementData = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };

  // decrementData = () => {
  //   this.setState({
  //     count: this.state.count - 1,
  //   });
  // };

  // resetData = () => {
  //   this.setState({
  //     count: 0,
  //   });
  // };

  render() {
    return (
      <div>
        <h1>Counter Component</h1>
        <h2>{this.props.count}</h2>
        <button onMouseOver={this.props.incrementData}>Hover Increment</button>
        <button onClick={this.props.incrementData}>Click Increment</button>
        <button onClick={this.props.decrementData}>Decrement</button>
        <button onClick={this.props.resetData}>Reset</button>
      </div>
    );
  }
}

export default MyHocComp(Counter);
