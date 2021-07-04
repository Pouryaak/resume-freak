import React from "react";
import Ratings from "@material-ui/lab/Rating";
import Rta from "react-rating";
import { withStyles } from "@material-ui/core/styles";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./ContentRight.css";

function ContentRight() {
  return (
    <div className="contentRight">
      <div className="contentRight__details">
        <div className="contentRight__header">Details</div>
        <div>+601128009145</div>
        <a>pourya.akramina@gmail.com</a>
      </div>
      <div className="contentRight__links">
        <div className="contentRight__title">Links</div>
        <a href="">LinkedIn</a>
        <br />
        <a href="">Github</a>
      </div>
      <div className="contRight__technical">
        <div className="contentRight__title">Technical Skills</div>
        <div className="contRight__tech__skill">
          <div>JavaScript</div>
          <div>
            <Rta
              initialRating={2}
              color="#462de3"
              emptySymbol={<FiberManualRecordIcon style={{ fill: "gray" }} />}
              fullSymbol={<FiberManualRecordIcon style={{ fill: "#462de3" }} />}
            />
            {/* <StyledRating
              name="read-only"
              value={2}
              icon={<FiberManualRecordIcon />}
              readOnly
            /> */}
          </div>
        </div>
        <div className="contRight__tech__skill">
          <div>JavaScript</div>
          <div>
            <Rta
              initialRating={2}
              color="#462de3"
              emptySymbol={<FiberManualRecordIcon style={{ fill: "gray" }} />}
              fullSymbol={<FiberManualRecordIcon style={{ fill: "#462de3" }} />}
            />
            {/* <StyledRating
              name="read-only"
              value={2}
              icon={<FiberManualRecordIcon />}
              readOnly
            /> */}
          </div>
        </div>
        <div className="contRight__tech__skill">
          <div>JavaScript</div>
          <div>
            <Rta
              initialRating={2}
              color="#462de3"
              emptySymbol={<FiberManualRecordIcon style={{ fill: "gray" }} />}
              fullSymbol={<FiberManualRecordIcon style={{ fill: "#462de3" }} />}
            />
          </div>
        </div>
        <div className="contRight__tech__skill">
          <div>JavaScript</div>
          <div>
            <Rta
              initialRating={2}
              color="#462de3"
              emptySymbol={<FiberManualRecordIcon style={{ fill: "gray" }} />}
              fullSymbol={<FiberManualRecordIcon style={{ fill: "#462de3" }} />}
            />
          </div>
        </div>
        <div className="contRight__tech__skill">
          <div>JavaScript</div>
          <div>
            <Rta
              initialRating={2}
              color="#462de3"
              emptySymbol={<FiberManualRecordIcon style={{ fill: "gray" }} />}
              fullSymbol={<FiberManualRecordIcon style={{ fill: "#462de3" }} />}
            />
          </div>
        </div>
        <div className="contRight__tech__skill">
          <div>JavaScript</div>
          <div>
            <Rta
              initialRating={2}
              color="#462de3"
              emptySymbol={<FiberManualRecordIcon style={{ fill: "gray" }} />}
              fullSymbol={<FiberManualRecordIcon style={{ fill: "#462de3" }} />}
            />
          </div>
        </div>
        <div className="contRight__tech__skill">
          <div>JavaScript</div>
          <div>
            <Rta
              initialRating={2}
              color="#462de3"
              emptySymbol={<FiberManualRecordIcon style={{ fill: "gray" }} />}
              fullSymbol={<FiberManualRecordIcon style={{ fill: "#462de3" }} />}
            />
          </div>
        </div>
      </div>
      <div className="contRight__Languages">
        <div className="contentRight__title">Languages</div>
        <div className="contRight__tech__skill">
          <div>English</div>
          <div>
            <Rta
              initialRating={2}
              color="#462de3"
              emptySymbol={<FiberManualRecordIcon style={{ fill: "gray" }} />}
              fullSymbol={<FiberManualRecordIcon style={{ fill: "#462de3" }} />}
            />
          </div>
        </div>
        <div className="contRight__tech__skill">
          <div>Persian</div>
          <div>
            <Rta
              initialRating={2}
              color="#462de3"
              emptySymbol={<FiberManualRecordIcon style={{ fill: "gray" }} />}
              fullSymbol={<FiberManualRecordIcon style={{ fill: "#462de3" }} />}
            />
          </div>
        </div>
      </div>
      <div className="contRight__softSkills">
        <div className="contentRight__title">Soft Skills</div>
        <div>- Strong communication skills</div>
        <div>- Fast and keen to learn</div>
        <div>- Willing to share knowledge and experience</div>
        <div>- Ability to work under pressure to meet deadlines</div>
      </div>
    </div>
  );
}

export default ContentRight;
