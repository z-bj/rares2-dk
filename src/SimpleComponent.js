import React, { Component } from "react";

class SimpleComponent extends Component {
  render() {
    console.log("%c RENDER OF THE CHILD <SIMPLE COMPONENT/> ", "color:yellow;");
    return <div>HELLO</div>;
  }
}

export default SimpleComponent;
