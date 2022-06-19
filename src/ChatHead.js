import React from "react";
import "./ChatHead.css";

function ChatHead({ name, image }) {
  return (
    <div className="chathead">
      <img src={image} alt="" />
      <div className="chathead__statuscircle" />
      <h5>{name}</h5>
    </div>
  );
}

export default ChatHead;
