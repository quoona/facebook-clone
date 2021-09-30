import { Avatar } from "@mui/material";
import React, { useState } from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import MoodIcon from "@mui/icons-material/Mood";
import { useStateValue } from "./StateProvider";
import "./MessageSender.css";
function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const handleSubmit = (e) => {
    e.preventDefault();

    //some clever db stuff
    setInput("");
    setimageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender_input"
            placeholder={`What's on your mind, ${user.displayName}?`}
          ></input>
          <input
            value={imageUrl}
            onChange={(e) => setimageUrl(e.target.value)}
            placeholder="Image URL (just optional)"
          ></input>
          <button onClick={handleSubmit} type="submit">
            Hidden Button
          </button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender_option">
          <PhotoLibraryIcon style={{ color: "Green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender_option">
          <MoodIcon style={{ color: "yellow" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
