import React, { PureComponent } from "react";
class PureComp extends PureComponent {
  render() {
    console.log("%c render of the simple <PureComponent/> ", "color:green;");
    return <div>PureComponent</div>;
  }
}

export default PureComp;
