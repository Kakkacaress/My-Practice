import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styles from "./App.css";

class App extends Component {
  state = {
    name: "Chima"
  };

  changeName = () => this.setSate({ name: "LF" });

  render() {
    return (
      <div className={styles.App}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onMouseOver={this.changeName}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React By: {this.state.name}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
