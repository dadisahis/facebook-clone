import React from "react";
import ChatHead from "./ChatHead";
import "./Contact.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__top">
        <div className="contacts__topleft">
          <h3>Contacts</h3>
        </div>
        <div className="contacts__topright">
          <VideoCallIcon />
          <SearchIcon />
          <MoreHorizIcon />
        </div>
      </div>
      <div className="contacts__chat">
        <ChatHead
          name="Batman"
          image="https://www.boxofficepro.com/wp-content/uploads/2022/01/thebatman-775x970-copy-479x600.png"
        />
        <ChatHead
          name="Billy Butcher"
          image="https://www.cheatsheet.com/wp-content/uploads/2022/03/The-Boys-Season-3-Poster-Cut.jpeg"
        />
        <ChatHead
          name="Wonder Woman"
          image="https://variety.com/wp-content/uploads/2016/10/wonder-woman-75th-anniversary.jpg?w=681&h=383&crop=1"
        />
        <ChatHead
          name="Scarlett Witch"
          image="https://dam.smashmexico.com.mx/wp-content/uploads/2022/04/doctor-strange-in-the-multiverse-of-madness-scarlet-witch-elizabeth-olsen-razon-cover.jpg"
        />
        <ChatHead
          name="Clark Kent"
          image="https://i.ytimg.com/vi/0RAF230M2x8/maxresdefault.jpg"
        />
      </div>
    </div>
  );
}

export default Contacts;
