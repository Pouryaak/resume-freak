import React from "react";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDetails,
  setDesiredPosition,
  setImage,
  setName,
} from "../../features/detailSlice";
import "./SideHeader.css";
import { Divider, Icon } from "semantic-ui-react";

function SideHeader() {
  const detail = useSelector(selectDetails);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="sideHeader__fields">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          fullWidth
          value={detail.name}
          onChange={(e) => dispatch(setName(e.target.value))}
        />
      </div>
      <div className="sideHeader__fields">
        <TextField
          id="outlined-basic"
          label="Desired Position"
          variant="outlined"
          fullWidth
          value={detail.desiredPosition}
          onChange={(e) => dispatch(setDesiredPosition(e.target.value))}
        />
      </div>
      <Divider horizontal>
        <h3>
          <Icon name="image" /> Image
        </h3>
      </Divider>
      <div className="sideHeader__fields">
        <TextField
          id="outlined-basic"
          label="Image URL"
          variant="outlined"
          fullWidth
          value={detail.image}
          onChange={(e) => dispatch(setImage(e.target.value))}
        />
      </div>
    </div>
  );
}

export default SideHeader;
