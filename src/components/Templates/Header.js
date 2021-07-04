import React from "react";
import { useSelector } from "react-redux";
import { Image } from "semantic-ui-react";
import { selectDetails } from "../../features/detailSlice";
import "./Header.css";

function Header() {
  const details = useSelector(selectDetails);
  return (
    <div className="header">
      <div className="header__image">
        <Image circular size="tiny" src={details.image} />
      </div>
      <div className="header__info">
        <div className="header__infoName">{details.name}</div>
        <div className="header__infoPosition">{details.desiredPosition}</div>
      </div>
    </div>
  );
}

export default Header;
