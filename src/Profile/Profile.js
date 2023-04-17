import React from "react";
import profileLogo from "./profile-logo.png";
// adding bootstrap to the checkpoint
// npm add react-bootstarp , npm add bootstrap
import Button from 'react-bootstrap/Button';  // or import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

function Profile(props) {
  const alertMe = () => props.handlName(`${props.fullName}`)
  const nameStyle={ color:"blue"}
  const bioStyle={ color:"green"}
  const profession={ color:"brown"}

  return (
    <div>
      <img src={profileLogo} alt="myLogo" />
      <h1 style={nameStyle}>My name is: {props.fullName}</h1>
      <h3 style={bioStyle}>Bio: {props.bio}</h3>
      <h2 style={profession}>Profession: {props.profession}</h2>
      <Button onClick={alertMe}>
        alert me
      </Button>
      {/* or direclty */}
      {/* {props.handlName(`${props.fullName}`)} */}
    </div>
  );
}
// adding default props value
Profile.defaultProps = {
  fullName: "enter your name",
  bio: "tell us about you",
  profession: "what is your job"
};
// adding props type as string
Profile.propTypes={
  fullName:PropTypes.string,
  bio:PropTypes.string,
  profession:PropTypes.string
}


export default Profile;
