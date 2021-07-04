import React from "react";
import "./Paper.css";

function Paper(props) {
  return (
    <div id="printable" className="paper">
      {props.children}
    </div>
  );
}

export default Paper;
