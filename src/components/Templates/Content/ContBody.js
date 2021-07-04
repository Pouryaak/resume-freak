import React from "react";
import { useSelector } from "react-redux";
import { selectDetails } from "../../../features/detailSlice";
import "./ContBody.css";
import ContentRight from "./ContentRight";

function ContBody() {
  const details = useSelector(selectDetails);
  return (
    <div className="contBody">
      <div className="contBody__left">
        <div className="contBody__left__profile">
          <div className="contBody__left__header">Profile</div>
          <div className="contBody__left__profile_body">{details.intro}</div>
        </div>
        <div className="contBody__left__emp__header">Employment History</div>
        {details.employmentHistory &&
          details.employmentHistory.map((emp) => (
            <div className="contBody__left__employment">
              <div className="contBody__left__emp__title">
                {emp.position}, {emp.company}
              </div>
              <div className="contBody__left__emp__date">
                {emp.startDate} - {emp.endDate}
              </div>
              <div className="contBody__left__emp__tech">
                <div>
                  <span>Technologies Used: </span> {emp.technologies}
                </div>
              </div>
              <div className="contBody__left__emp__desc">
                <ul className="contBody__left__emp__list">
                  {emp.description.split("-").map((des) => (
                    <li>{des}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        <div className="contBody__left__education">
          <div className="contBody__left__header">Education</div>
          <div>
            Bachelor Degree in Software Engineering, Asia Pacific University,
            Kuala Lumpur
          </div>
          <div className="contBody__left__emp__date">June 2015 - June 2018</div>
        </div>
      </div>
      <div className="contBody__right">
        <ContentRight />
      </div>
    </div>
  );
}

export default ContBody;
