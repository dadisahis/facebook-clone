import React from "react";
import "./RightElement.css";
import { Avatar } from "@mui/material";
function RightElement({ title, name, image, isBirthday }) {
  return (
    <div className="rightElement">
      <h3>{title}</h3>
      <div className="rightcontainer__pages_element">
        <Avatar src={image} />
        {isBirthday ? (
          <p>
            <b>{name}</b>'s birthday today
          </p>
        ) : (
          <h5>{name}</h5>
        )}
      </div>
    </div>
  );
}

export default RightElement;
