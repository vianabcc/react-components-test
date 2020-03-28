// @flow
import * as React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello";

type Props = {
  show: boolean
};

type State = {
  counter: number
}
 class App extends Component<Props, State> {
  static defaultProps: Props = {
    show: false
  };
  state: State = {
     counter: 0
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
