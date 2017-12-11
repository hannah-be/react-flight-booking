// Imports React and the base class 'Component'
import React, { Component } from 'react';
// App specific CSS
import './App.css';
// My custom components
import Button from './components/Button';
import Emoji from './components/Emoji';
import Form from './components/Form'

// Creates the class App and subclasses Component
class App extends Component {
  // Render method is equivalent to the 'view'
  render() {
    // Return is the result of the HTML you want to display
    return (
      // Note 'className' rather than 'class' in JSX - otherwise very similar to HTML
      <div className="App">
        <h1>This is a heading</h1>
        <hr />
        <Button primary >
          Find Flights
        </Button>
        <Button>
          Sign up
        </Button>
        <Button magic href="/competition">
          <Emoji cat emotion='fear' />
          { ' ' }
          Enter competition
          </Button>
          <hr />
          <Form firstInput="First" secondInput="Second" primary={true} > 
            </Form>
          <hr />
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
