import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import RightContainer from "./RightContainer";
import Login from "./Login";
import { useStateValue } from "./configs/stateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
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
