import React from "react";
import "./LoginPage.css";
import vcetLogo from "../components/images/vcetImage.png";
import ParticlesBg from "particles-bg";
import googleSignIn from "./images/googlesignIn.png";
import { auth, provider } from "./Chatroom/FirebaseConfig/Firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../components/StateProvider";
import students from "./images/students.png";
import GoogleButton from "react-google-button";

function LoginPage() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="loginpage">
      <ParticlesBg type="cobweb" bg={true} className="bg-particles" />

      <div className="login_left">
        <img
          src="https://velalarengg.ac.in/images/vct-logo.png"
          alt=""
          className="vcetLogo"
        />
        <h1>Place where vcetians meet Together!</h1>
        <img src={students} alt="" className="studentslogo" />
      </div>
      <div className="login_right">
        <h1>Sign in</h1>
        <GoogleButton onClick={signIn} className="G_button" />
      </div>
    </div>
  );
}

export default LoginPage;
