import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Emoji from './components/Emoji';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is a heading</h1>
        <Button primary >
          Find Flights
        </Button>
        <Button>
          Sign up
        </Button>
        <Button magic href="/competition">
          <Emoji cat emotion='love' />
          { ' ' }
          Enter competition
          </Button>
        <ul>
          <li><Emoji /></li>
          <li><Emoji emotion = 'sad' /></li>
          <li><Emoji emotion = 'love' /></li>
          <li><Emoji emotion = 'fear' /></li>
          <li><Emoji cat /></li>
          <li><Emoji cat emotion = 'sad' /></li>
          <li><Emoji cat emotion = 'love' /></li>
          <li><Emoji cat emotion = 'fear' /></li>
          </ul>
      </div>
    );
  }
}

export default App;
