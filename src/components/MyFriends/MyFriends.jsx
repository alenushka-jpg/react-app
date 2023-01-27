import React from "react";
import "./MyFriends.css";
import { HandySvg } from "handy-svg";
import FriendsItem from "./FriendsItem/FriendsItem";
import iconKebab from "../../icon/icon-kebab.svg";

const MyFriends = (props) => {
  const friendsElements = props.friendsNames.map((f) => (
    <FriendsItem key={f.name} name={f.name} id={f.id} />
  ));

  return (
    <section className="myFriends">
      <form className="myFriends__form">
        <label className="myFriends__label">
          <input className="myFriends__input" type="text" placeholder="Search Friends!"/>
        </label>
      </form>
      <div className="myFriends__top-bar">
        <h2 className="myFriends__title">Friends</h2>
        <button>
          <span className="visually-hidden">Open options</span>
          <HandySvg src={iconKebab} width="20" height="20" />
        </button>
      </div>
      <ul className="myFriends__list">{friendsElements}</ul>
    </section>
  );
};

export default MyFriends;
