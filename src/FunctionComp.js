import React from "react";

function FunctionComp(props) {
  console.log("%c render of the <FunctionComponent/> CHILD", "color:purple;");
  return (
    <div>
      <p>
        <span className="purple">FunctionComponent: </span>
        {props.name}
      </p>
    </div>
  );
}
export default React.memo(FunctionComp);
