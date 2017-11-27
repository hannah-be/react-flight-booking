import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is a heading</h1>
        <Button title='Find Flights' primary />
        <Button title="Sign up" />
        <Button title='Enter competition' magic />
        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
          </ul>
        <p>No more content</p>
      </div>
    );
  }
}

export default App;
