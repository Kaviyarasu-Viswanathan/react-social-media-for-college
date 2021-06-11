import React from "react";
import { Link } from "react-router-dom";
import CatComp from "./CatComp";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__category">
        <h4>Top Categories</h4>
        <h6 style={{ color: "#ff7b77" }}>ALL</h6>
      </div>
      <Link to="/students-chat" className="students-comp">
        <CatComp
          person="students"
          posts="60"
          images="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c976fb79681909.5ccad1df2b7c2.png"
        />
      </Link>
      <Link to="/staff-chat" className="staff-comp">
        <CatComp
          person="teachers"
          posts="40"
          images="https://cdn.dribbble.com/users/1731254/screenshots/14955581/media/5846ef83276506f8bda12e314b304bf1.png?compress=1&resize=800x600"
        />
      </Link>
      <CatComp
        person="Management"
        posts="20"
        images="https://t4.ftcdn.net/jpg/03/56/33/17/360_F_356331734_HomxSGXpDnaIp1A5KxsKwF1CqF8eWThe.jpg"
      />
      <CatComp
        person="workers"
        posts="27"
        images="https://webneel.net/file/images/5-17/1-3d-character-design-by-aaron-martinez.jpg"
      />
    </div>
  );
}

export default SideBar;
