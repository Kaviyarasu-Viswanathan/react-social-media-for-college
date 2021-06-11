import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./Feed.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Lottie from "react-lottie";
import * as animationData from "../images/heart.json";

function Feed({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} classname="post__avatar" />
        <div className="post__topInfo">
          <h5>{username}</h5>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comments</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreIcon />
          <p>More</p>
        </div>
      </div>
    </div>
  );
}

export default Feed;
