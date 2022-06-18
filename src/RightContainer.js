import React from "react";
import "./Widgets.css";

function RightContainer({ title, image }) {
  return (
    <div className="rightContainer">
      <div className="rightContainer__pages">
        <h3>Your Pages and profiles</h3>
        <div className="rightcontainer__pages_element">
          <image src={image} alt="" />
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  );
}

export default RightContainer;
