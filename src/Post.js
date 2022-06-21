import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./Post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NearMeIcon from "@mui/icons-material/NearMe";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

function Post({ profilePic, image, username, timestamp, message }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      {image ? (
        <div className="post__image">
          <img src={image} alt="" />
        </div>
      ) : null}
      <div className="post__options">
        <div
          className="post__option"
          onClick={() => setIsLiked(!isLiked)}
          style={{ color: isLiked ? "#2e81f4" : "" }}
        >
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
