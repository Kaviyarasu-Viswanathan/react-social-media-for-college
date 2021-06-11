import React, { useEffect, useState } from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import ChatIcon from "@material-ui/icons/Chat";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import ChatRoom from "./Chatroom/ChatRoom";
import { useStateValue } from "./StateProvider";
import Badge from "@material-ui/core/Badge";

function Header({ userid, to }) {
  const [{ user }, dispatch] = useStateValue();
  const [show, handleShow] = useState(false);
  const TransitionNavBar = () => {
    if (window.scrollY > 50) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", TransitionNavBar);
    return () => {
      window.removeEventListener("scroll", TransitionNavBar);
    };
  }, []);
  return (
    <div className={`header ${show && "header__color"}`}>
      <div className="header__left">
        <img
          src="https://velalarengg.ac.in/images/vct-logo.png"
          alt="vcet_logo"
        />
      </div>
      <div className="header__middle">
        <Link to="/" className="home-icon">
          <p className="home-icon">Home</p>
        </Link>
        <Link to="/chatroom" className="chat-icon">
          <Badge badgeContent={5} color="secondary">
            <p className="chat-icon">Chat</p>
          </Badge>
        </Link>

        <SearchIcon className="search_icon" />
        <input type="text" placeholder="Search Students" />
      </div>
      <div className="header__right">
        <p>{user.displayName}</p>
        <Link to="/profile-page">
          <Avatar className="avatar" src={user.photoURL} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
