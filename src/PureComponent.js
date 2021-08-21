import React, { PureComponent } from "react";
class PureComp extends PureComponent {
  render() {
    console.log("%c render of the simple <PureComponent/> ", "color:green;");
    return (
      <div>
        <p>
          <span className="green">PureComponent</span>
          {this.props.name}
        </p>
      </div>
    );
  }
}

export default PureComp;
