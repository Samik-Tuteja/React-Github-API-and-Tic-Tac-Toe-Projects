import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import Repos from "./components/Repos";

function App() {
  return (
    <div>
      <div className="header">
        <h1>Github API</h1>
      </div>
      <div className="Bigger-App">
        <div className="App">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default App;
