import React, { Component } from "react";
import SimpleComp from "./SimpleComponent";
import PureComp from "./PureComponent";
import FunctionComp from "./FunctionComp";
import BtnChangeToLazyMan from "./BtnChangeToLazyMan";

export class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "ThinkMan",
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate() decide True");
    // console.log(this.state.name);
    // console.log(nextState);

    // if (this.state.name !== nextState.name) {
    //   return true;
    // } //it is better to replace all this logic by using a pureComponent

    return true; //true by default
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
        <p>
          <span className="red">ParentComponent: </span>
          {this.state.name}
        </p>

        <SimpleComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <FunctionComp name={this.state.name} />
        <BtnChangeToLazyMan changeToLazyMan={this.changeToLazyMan} />
      </div>
    );
  }
}

export default ParentComponent;
