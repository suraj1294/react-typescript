import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component<{}, {}> {
  test() {
    console.log("test");
  }

  testEdit() {
    console.log("eds");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>ok!</code> and save to reload.
          </p>
          <div>test1</div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React ok
          </a>
        </header>
        <div>test</div>
      </div>
    );
  }
}

export default App;
