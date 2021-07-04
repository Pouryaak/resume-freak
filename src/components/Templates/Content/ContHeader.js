import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "semantic-ui-react";
import { selectDetails } from "../../../features/detailSlice";
import "./ContHeader.css";

function ContHeader() {
  const details = useSelector(selectDetails);
  return (
    <div className="contHeader">
      {details.phone !== "" && (
        <div className="contHeader__phone">
          <Icon name="phone" style={{ color: "#462de3" }} /> &nbsp;{" "}
          {details.phone}
        </div>
      )}
      {details.email !== "" && (
        <div className="contHeader__email">
          <Icon name="mail" style={{ color: "#462de3" }} /> &nbsp;
          {details.email}
        </div>
      )}
      {details.website !== "" && (
        <div className="contHeader__website">
          <Icon name="globe" style={{ color: "#462de3" }} /> &nbsp;{" "}
          {details.website}
        </div>
      )}
    </div>
  );
}

export default ContHeader;
