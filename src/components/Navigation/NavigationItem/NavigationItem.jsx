import React from "react";
import "./NavigationItem.css";
import { NavLink } from "react-router-dom";
// import { HandySvg } from "handy-svg";

const NavigationItem = (props) => {
  return (
    <li className="navigation-item">
      <NavLink className="navigation-item__link">
        {props.text}
      </NavLink>
    </li>
  );
}

export default NavigationItem;
