import React, { Component } from "react";
import SimpleComp from "./SimpleComponent";

export class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "ThinkMan",
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("I'm in shouldComponentUpdate()");
    console.log(this.state.name);
    console.log(nextState);

    if (this.state.name !== nextState.name) {
      return true;
    } //it is better to replace all this logic by using a pureComponent

    return false; // by default
  }
  changeToLazyMan = () => {
    this.setState({
      name: "LazyMan",
    });
  };
  render() {
    console.log("%c RENDER() OF <PARENTCOMPONENT/>", "color:red");
    return (
      <div>
        <SimpleComp />
        <button onClick={this.changeToLazyMan}>Change to LazyMan</button>
      </div>
    );
  }
}

export default ParentComponent;
