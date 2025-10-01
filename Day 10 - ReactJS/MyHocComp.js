import React, { Component } from 'react'

const MyHocComp = (WrapperComp) => {
    class Hoc extends Component{constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementData = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementData = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  resetData = () => {
    this.setState({
      count: 0,
    });
  };

  render(){
    return <WrapperComp count={this.state.count} incrementData={this.incrementData}></WrapperComp>
  }
    }
    return Hoc;
}

export default MyHocComp;
