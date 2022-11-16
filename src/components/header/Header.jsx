import React, { useContext } from "react";

import "./Header.scss";
// import UserPhoto from "./janet.jpg";
import searchIcon from "../../icons/search.svg";
import { UserInfo } from "../../services/ContextApi/Context";

export default function Header({ titleName, search }) {
  const data = useContext(UserInfo)[0].data;
  // console.log(UserInfo);
  return (
    <div className="Header">
      <h3 className="title">{titleName}</h3>
      <div className="user_info">
        {search ? (
          <div className="searchInput">
            <div className="input_anime">
              <input type="text" placeholder="Search..." />
            </div>
            <img src={searchIcon} alt="" />
          </div>
        ) : (
          ""
        )}
        <span className="icon-notification"></span>
        <p className="user_name">{`${data.first_name} ${data.last_name}`}</p>
        <div className="user_photo">
          <img src={data.avatar} alt="" />
        </div>
      </div>
    </div>
  );
}
