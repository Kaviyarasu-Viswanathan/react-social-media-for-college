import { Avatar } from "@material-ui/core";
import "./MessageSender.css";
import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import db from "../Chatroom/FirebaseConfig/Firebase";
import firebase from "firebase";
import PostNew from "./PostNew";

function MessageSender({ userscomment }) {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [{ user }, dispatch] = useStateValue();
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });
    setInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <h4>Make a post</h4>
      <div className="messageSender__top">
        <Avatar src={user.photoURL} className="avatar" />

        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messenger__input"
            placeholder={`what's on your mind`}
          />
          <input
            placeholder="img URL"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            hidden submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default MessageSender;
