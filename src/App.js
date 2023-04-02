import React from "react";
import './App.css';
import Greeting from "./components/Greeting";

function App() {
  return (
    <> {/* fragment - najcesce se koristi sa wrapovanje*/}
      <div className="App">
        <header className="header">
          <h1 style={{ color: "#ffffff", fontFamily: "Arial" }}>Logo</h1>
        </header>
        <Greeting appName={"my first app"} username={"Alen Muslic"} />
      </div>
    </>
  );
}

export default App;
