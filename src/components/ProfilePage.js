import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./ProfilePage.css";
import { useStateValue } from "./StateProvider";
import db from "./Chatroom/FirebaseConfig/Firebase";
import FlipMove from "react-flip-move";

function ProfilePage({}) {
  const [{ user }, dispatch] = useStateValue();
  const [userPosts, setUserPosts] = useState([]);
  const [departmentValue, setDepartmentValue] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setUserPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, []);
  console.log(userPosts);
  return (
    <div className="profilepage">
      <Header />
      <div className="profile__content">
        <div className="profile__cover">
          <img
            src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/nature-design.jpg"
            alt=""
            className="profile__cover-img"
          />
        </div>
        <div className="profile__info">
          <Avatar clasName="avatar" src={user.photoURL} />
        </div>
        <div className="profile__userdata">
          <p className="username-p">Username: {user.displayName}</p>
          <p className="email_address-p">Email address: {user.email}</p>
        </div>
        <div className="user__posts">
          {userPosts.map((userPost) => (
            <img src={userPost.data.image} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
