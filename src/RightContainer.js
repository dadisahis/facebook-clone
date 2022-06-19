import React from "react";
import "./RightContainer.css";
import RightElement from "./RightElement";
import Contacts from "./Contacts";

function RightContainer() {
  return (
    <div className="rightContainer">
      <RightElement
        title="Your Pages and Profiles"
        name="Vought International"
        image="https://www.dafont.com/forum/attach/orig/8/9/899543.png?1"
      />
      <RightElement
        title="Friend Requests"
        name="Billy Butcher"
        image="https://www.cheatsheet.com/wp-content/uploads/2022/03/The-Boys-Season-3-Poster-Cut.jpeg"
      />
      <RightElement
        title="Birthdays"
        name="Starlight"
        isBirthday={true}
        image="https://static.tvmaze.com/uploads/images/medium_portrait/265/664985.jpg"
      />
      <Contacts />
    </div>
  );
}

export default RightContainer;
