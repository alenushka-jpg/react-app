import React from "react";
import "./NavigationItem.css";
import { NavLink } from "react-router-dom";

const NavigationItem = (props) => {
  return (
    <li>
      <NavLink className={(navData) =>
          navData.isActive ? "navigation__link active" : "navigation__link"}>
        {props.text}
      </NavLink>
    </li>
  );
}

export default NavigationItem;
