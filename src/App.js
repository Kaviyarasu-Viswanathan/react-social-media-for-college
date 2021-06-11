import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import firebase from "firebase";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ChatRoom from "./components/Chatroom/ChatRoom.js";
import LoginPage from "./components/LoginPage";
import Home from "./Home";
import { useStateValue } from "./components/StateProvider";
import ProfilePage from "./components/ProfilePage";
import StaffChatRoom from "./components/StaffChatroom/StaffChatRoom";
import DeptChatRoom from "./components/departChatroom/deptChatRoom";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <LoginPage />
      ) : (
        <Router>
          <>
            <Switch>
              <Route path="/" exact component={Home} />
              {/* <Home /> */}
              <Route path="/chatroom" component={ChatRoom} />
              <Route path="/profile-page" component={ProfilePage} />
              <Route path="/staff-chat" component={StaffChatRoom} />
              <Route path="/students-chat" component={DeptChatRoom} />
              {/* <ChatRoom userid="kavi" /> */}
            </Switch>
          </>
        </Router>
      )}
    </div>
  );
}

export default App;
