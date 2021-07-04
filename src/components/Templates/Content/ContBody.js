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
        <div className="contBody__left__employment">
          <div className="contBody__left__emp__title">
            Executive Web Development, Asia Pacific University, Kuala Lumpur
          </div>
          <div className="contBody__left__emp__date">
            January 2019 - Present
          </div>
          <div className="contBody__left__emp__tech">
            <div>
              <span>Technologies Used: </span> PHP, JavaScript, React, Redux,
              WordPress, Vue.js, CSS/SASS, jQuery, Atlassian Products, Linux and
              Git/GitHub
            </div>
          </div>
          <div className="contBody__left__emp__desc">
            <ul className="contBody__left__emp__list">
              <li>
                Developed and structured feature-rich client WordPress websites
                and Plugins, ensuring that all needs were met and company
                policies and procedures followed; created high-quality code.
              </li>
              <li>
                Collaborated with project managers and creative teams to deliver
                original, efficient solutions; advised clients and provided
                expertise.
              </li>
              <li>
                Managed a team of 4 students and junior web developers; trained
                and educated them to become experienced web developers; measured
                the performance of the team.
              </li>
              <li>
                Managed and developed over 70 responsive websites in a WordPress
                Multi-site setup.
              </li>
              <li>
                Designed and Developed high quality, intuitive design with
                React.js within the WordPress environment
              </li>
              <li>
                Designed and Developed simple web apps using React and Redux
              </li>
            </ul>
          </div>
        </div>
        <div className="contBody__left__employment">
          <div className="contBody__left__emp__title">
            Executive Web Development, Asia Pacific University, Kuala Lumpur
          </div>
          <div className="contBody__left__emp__date">
            January 2019 - Present
          </div>
          {/* <div className="contBody__left__emp__tech">
            <div>
              <span>Technologies Used: </span> PHP, JavaScript, React, Redux,
              WordPress, Vue.js, CSS/SASS, jQuery, Atlassian Products, Linux and
              Git/GitHub
            </div>
          </div> */}
          <div className="contBody__left__emp__desc">
            <ul className="contBody__left__emp__list">
              <li>Learned HTML, CSS, PHP and JavaScript.</li>
              <li>Learned to work with Atlassian Jira, Core, Software.</li>
              <li>
                Learned to work with WordPress and created few websites from
                scratch.
              </li>
              <li>
                Support and development of new functionality for already
                existing projects.
              </li>
              <li>
                Worked with a multidisciplinary team to convert business needs
                into technical specifications.
              </li>
            </ul>
          </div>
        </div>
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
