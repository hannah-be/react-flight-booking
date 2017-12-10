# Learning React #1

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Setup
First establish what the components of your design are and break them down into groups and unique pieces (remove duplicates), giving them appropriate names.
Then determine the elements of each component (e.g. a button group may have two elements which will each have a value). 
Each componenent will have it's own file.

- To install React initially (and globally): ``yarn global add create-react-app``
- To create a new project, run this in your preferred directory: ``yarn create react-app [insert name]``
- This will create a new directory with your chosen name, and 
- Run ``yarn start`` to run a server and view the app.

## Customising the app
- Remove the default contents from the inner ``/div`` in src/App.js
- Remove the default css from src/App.css and add your own.
- Create a folder called 'components' within the src folder.
- Within the components folder, create a file for each component, e.g. Button.js
```javascript
import React from 'react'

function Button() {
  return (
    <button>
      Click me!
    </button>
  )
}

export default Button
```
- Each component must be imported into the App.js file:
`import Button from './components/Button',