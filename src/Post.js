import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
function Post({ props, profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={profilePic} className="post_avatar" />
        <div className="post_topInfo">
          <h3>{username}</h3>
          {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post_bottom">
        <p>{message}</p>
      </div>

      <div className="post_image">
        <img src={image} alt="" />
      </div>
      <div className="post_options">
        <div className="post_option">
          <ThumbUpAltRoundedIcon />
          <p>Like</p>
        </div>
        <div className="post_option">
          <ChatBubbleOutlineRoundedIcon />
          <p>Comment</p>
        </div>
        <div className="post_option">
          <ShareRoundedIcon />
          <p>Share</p>
        </div>
        <div className="post_option">
          <AccountCircleRoundedIcon />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
