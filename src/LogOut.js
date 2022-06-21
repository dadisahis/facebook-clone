import React, { useState } from "react";
import { auth, provider } from "./firebase";
import { useStateValue } from "./configs/stateProvider";
import { actionTypes } from "./configs/reducer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, Button, IconButton } from "@mui/material";
import "./LogOut.css";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FeedbackIcon from "@mui/icons-material/Feedback";
import LogoutIcon from "@mui/icons-material/Logout";

function LogOut() {
  const [{ user, isAuthenticated }, dispatch] = useStateValue();
  const [display, setDisplay] = useState(false);
  const signOut = () => {
    auth
      .signOut(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
        dispatch({
          type: actionTypes.SET_AUTHENTICATED,
          isAuthenticated: false,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="logout">
      <div className="logout__arrow">
        <IconButton onClick={() => setDisplay(!display)}>
          <ExpandMoreIcon />
        </IconButton>
      </div>
      {display ? (
        <div className="logout__info__parent">
          <div className="logout__info">
            <Avatar src={user.photoURL} />
            <h4>{user.displayName}</h4>
          </div>
          <div className="logout__options">
            <div className="logout__option">
              <div className="logout__option__icon">
                <SettingsIcon />
              </div>
              <p>Settings & Privacy</p>
            </div>
            <div className="logout__option">
              <div className="logout__option__icon">
                <HelpIcon />
              </div>
              <p>Help & Support</p>
            </div>
            <div className="logout__option">
              <div className="logout__option__icon">
                <DarkModeIcon />
              </div>
              <p>Display & accessibility</p>
            </div>
            <div className="logout__option">
              <div className="logout__option__icon">
                <FeedbackIcon />
              </div>
              <p>Give feedback</p>
            </div>
            <div className="logout__option" onClick={() => signOut()}>
              <div className="logout__option__icon">
                <LogoutIcon />
              </div>
              <p>Log Out</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default LogOut;
