import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import RightContainer from "./RightContainer";
import Login from "./Login";
import { Loader } from "./Loader";
import { useStateValue } from "./configs/stateProvider";
import { auth } from "./firebase";
import { actionTypes } from "./configs/reducer";
import { useEffect } from "react";

function App() {
  const [{ user, isAuthenticated }, dispatch] = useStateValue();
  useEffect(() => {
    const reAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: actionTypes.SET_USER,
          user: user,
        });
        dispatch({
          type: actionTypes.SET_AUTHENTICATED,
          isAuthenticated: true,
        });
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
        dispatch({
          type: actionTypes.SET_AUTHENTICATED,
          isAuthenticated: false,
        });
      }
    });
    return () => {
      reAuth();
    };
  }, [dispatch]);
  return (
    <div className="app">
      {!isAuthenticated && !user ? (
        <Login />
      ) : !isAuthenticated || !user ? (
        <Loader />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <RightContainer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
