import React, { Component } from 'react';
import logo from './logo.svg';
import DataChild from './DataChild'
import SendData from './SendData'
import "./blank.css"
class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
            <h1>User Collection App</h1>
           <SendData/>
        </header>
      </div>
    );
  }
}

export default App;
