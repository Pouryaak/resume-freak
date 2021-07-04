import React from "react";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDetails,
  setEmail,
  setPhone,
  setWebsite,
} from "../../features/detailSlice";

function ContactDetails() {
  const details = useSelector(selectDetails);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="sideHeader__fields">
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          fullWidth
          value={details.phone}
          onChange={(e) => dispatch(setPhone(e.target.value))}
        />
      </div>
      <div className="sideHeader__fields">
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
          value={details.email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
      </div>
      <div className="sideHeader__fields">
        <TextField
          id="outlined-basic"
          label="Website"
          variant="outlined"
          fullWidth
          value={details.website}
          onChange={(e) => dispatch(setWebsite(e.target.value))}
        />
      </div>
    </div>
  );
}

export default ContactDetails;
