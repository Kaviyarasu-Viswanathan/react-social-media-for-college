import React, { useState, useEffect } from "react";
import FlipMove from "react-flip-move";
import { FormControl, Input } from "@material-ui/core";
import firebase from "firebase";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

import db from "./FirebaseConfig/Firebase";
import Message from "./Messages/Message";
import { useStateValue } from "../StateProvider";

import "./ChatRoom.css";
import Header from "../Header";
import Body from "../Body";

function ChatRoom({ userid }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [department, setDepartment] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            message: doc.data(),
            department: doc.department,
          }))
        );
      });
  }, []);

  useEffect(() => {
    const departname = prompt("Enter your department");
    setUsername(user.displayName);
    setDepartment(departname);
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      department: department,
    });
    setInput("");
  };

  return (
    <div className="chatroom">
      <Header />
      <img
        className="app-image"
        src="https://velalarengg.ac.in/images/vct-logo.png"
        alt="Facebook-messenger-logo"
      />
      <h2 className="app-title">
        Welcome to VCET Chat room <strong className="user">{username}</strong>
      </h2>

      <form className="app-form">
        <FormControl className="app-formControl">
          <Input
            className="app-input"
            placeholder="Enter a messege..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app-iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {/* messages themselves */}
        {messages.map(({ id, message }) => (
          <Message
            key={id}
            username={user.displayName}
            message={message}
            department={department}
            timestamp={timestamp}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default ChatRoom;
