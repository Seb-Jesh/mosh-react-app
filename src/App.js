import React, { Component } from "react";
import "./App.css";
import Counter from "./components/counter";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <Counter />
        </header>
      </div>
    );
  }
}
