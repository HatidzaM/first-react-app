import React from "react";
import './App.css';
import Greeting from "./components/Greeting";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <> {/* fragment - najcesce se koristi sa wrapovanje*/}
      <div className="App">
        <Navbar> {/* <P>samo za primer</P> */} </Navbar>
        {/* <header className="header">
          <h1 style={{ color: "#ffffff", fontFamily: "Arial" }}>Logo</h1>
        </header> */}
        <Greeting appName={"my first app"} username={"Hatidza Mahmuttovic"} />
      </div>
    </>
  );
}

export default App;
