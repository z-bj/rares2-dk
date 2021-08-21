import React from "react";

function BtnChangeToLazyMan(props) {
  console.log("%c render of the <BtnChangeToLazyMan/> CHILD", "color:purple;");
  console.log(props);
  return <button onClick={props.changeToLazyMan}>Change to LazyMan</button>;
}
export default React.memo(BtnChangeToLazyMan);
