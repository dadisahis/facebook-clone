import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./configs/stateProvider";
import { actionTypes } from "./configs/reducer";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        dispatch({
          type: actionTypes.SET_AUTHENTICATED,
          isAuthenticated: true,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
          alt=""
          className="login__logo__top"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png"
          alt=""
          className="login__logo__bottom"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
