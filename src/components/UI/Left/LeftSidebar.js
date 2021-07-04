import React from "react";
import "./LeftSidebar.css";

function LeftSidebar(props) {
  return <div className="leftSidebar">{props.children}</div>;
}

export default LeftSidebar;
