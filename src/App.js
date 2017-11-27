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
        <Button title='Find Flights' primary />
        <Button title="Sign up" />
        <Button title='Enter competition' magic />
        <ul>
          <li><Emoji /></li>
          <li><Emoji emotion = 'sad' /></li>
          <li><Emoji emotion = 'love' /></li>
          <li><Emoji cat /></li>
          <li><Emoji cat emotion = 'sad' /></li>
          <li><Emoji cat emotion = 'love' /></li>
          </ul>
        <p>No more content</p>
      </div>
    );
  }
}

export default App;
