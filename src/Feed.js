import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
function Feed() {
  return (
    <div className="feed">
      {/* StoryReels */}
      <StoryReel />

      <MessageSender />
      {/* Post */}
      <Post
        profilePic="./images/cat.jpg"
        message="First Post"
        timestamp="22/09/2000"
        username="Quoonaaa"
        image="./images/cheems.jpg"
      />

      <Post
        profilePic="./images/cat.jpg"
        message="Wowwww"
        timestamp="22/09/2000"
        username="Quoonaaa"
      />

      <Post />
    </div>
  );
}

export default Feed;
