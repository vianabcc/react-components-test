// @flow
import * as React from 'react';
import Hello from './components/Hello';
import Navbar from './components/Navbar';
import "./App.css"

const App = () => (
  <div className="App">
    <Navbar />
    <div className="App-header">
      <Hello />
    </div>
  </div>
);

export default App;
