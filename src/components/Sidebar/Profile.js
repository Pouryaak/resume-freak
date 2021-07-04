import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, TextArea } from "semantic-ui-react";
import { selectDetails, setIntro } from "../../features/detailSlice";
import "./Profile.css";

function Profile() {
  const details = useSelector(selectDetails);
  const dispatch = useDispatch();
  return (
    <Form>
      <div className="profile__header">Profile Description</div>
      <TextArea
        placeholder="Tell about yourself!"
        value={details.intro}
        style={{ minHeight: 200 }}
        onChange={(e, { value }) => dispatch(setIntro(value))}
      />
    </Form>
  );
}

export default Profile;
