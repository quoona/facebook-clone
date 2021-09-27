import React from "react";
import "./StoryReel.css";
import Story from "./Story";
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="./images/cat.jpg"
        profileSrc="./images/cat.jpg"
        title="Quoona"
      />
      <Story
        image="./images/cat.jpg"
        profileSrc="./images/cat_2.jpg"
        title="Cat"
      />
      <Story
        image="./images/cat.jpg"
        profileSrc="./images/cheems_2.jpg"
        title="Cheems"
      />
      <Story
        image="./images/cat.jpg"
        profileSrc="./images/cheems.jpg"
        title="Joker"
      />
      <Story
        image="./images/cat.jpg"
        profileSrc="./images/cheems_3.jpg"
        title="Girl"
      />
    </div>
  );
}

export default StoryReel;
