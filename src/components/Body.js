import React, { useEffect, useState } from "react";
import "./Body.css";
import CatComp from "./CatComp";
import Feed from "./post/Feed";
import MessageSender from "./post/MessageSender";
import SideBar from "./SideBar";
import { useStateValue } from "./StateProvider";
import db from "./Chatroom/FirebaseConfig/Firebase";
import FlipMove from "react-flip-move";
import PostNew from "./post/PostNew";
import ChatRoom from "./Chatroom/ChatRoom";
import RightSidebar from "./RightSidebar";
import { MessageBox } from "react-chat-elements";

function Body() {
  const [{ user }, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);
  const [localusername, setlocalusername] = useState([]);
  const [localdepartment, setlocaldepartment] = useState([]);
  const [localprofilePic, setlocalprofilePic] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  React.useEffect(() => {
    localStorage.setItem("username", localusername);
    setlocalusername(user.displayName);
    localStorage.setItem("department", localdepartment);
    setlocaldepartment();
    localStorage.setItem("profilepic", localprofilePic);
    setlocalprofilePic(user.photoURL);
  }, [localusername, localdepartment, localprofilePic]);

  return (
    <div className="body">
      <div className="body__contents">
        <SideBar />

        <MessageSender className="msgComp" />
        <div className="feed__content">
          {posts.map((post) => (
            /*  <Feed
              key={post.id}
              profilePic={post.data.profilePic}
              timestamp={post.data.timestamp}
              username={post.data.username}
              image={post.data.image}
              message={post.data.message}
            /> */

            <PostNew
              /*    key={post.id} */
              profilePic={post.data.profilePic}
              timestamp={post.data.timestamp}
              username={post.data.username}
              image={post.data.image}
              message={post.data.message}
            />
          ))}
        </div>
        <RightSidebar />
      </div>
    </div>
  );
}

export default Body;
