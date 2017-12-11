# Learning React #1

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

## Setup
First establish what the components of your design are and break them down into groups and unique pieces (remove duplicates), giving them appropriate names.
Then determine the elements of each component (e.g. a button group may have two elements which will each have a value). 
Each componenent will have it's own file.
A component takes in parameters, called props, and returns a hierarchy of views to display via the render method.

- To install React initially (and globally): ``yarn global add create-react-app``
- To create a new project, run this in your preferred directory: ``yarn create react-app [insert name]``
- This will create a new directory with your chosen name, and 
- Run ``yarn start`` to run a server and view the app.

View the index.js to see how React and React-DOM are imported. 
- Note: registerServiceWorker is for offline support - can disable.
- Finds the element with ID 'root' on the page and render the 'App.js' within it:
`ReactDOM.render(<App />, document.getElementById('root'))`
- App.js imports CSS and React with its class: Component. It uses JSX (JavaScriptXML) to incorporate HTML within Javascript. 
- Also delete default CSS from App.css.
- File names for 'classes' are capitalised by convention (i.e. App vs index)
- App.js focuses on what the app actually does, where index.js provides a central point to import all other files. 
- Use App.css to style elements specific to the App. 

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
`import Button from './components/Button'
- JSX uses 'className' rather than 'class' when defining HTML element classes.
- Can write the entire app within the render method, but that would become quite unwieldy. By separating out 'components', they become easier to manage. 
- When using custom elements, can use a self-closing element if no children. 
- Then you can attributes to the custom element tag. 
- Key-value pair attributes, or 'props' as React calls them, then get passed through to the component: 
```javascript
<Button title='Click me' primary={ true }/>

function Button(props) {
  let className = 'btn'

  if (props.primary) {
    className += ' btn--primary'
  }
  return (
    <button className={ className }>
      { props.title }
    </button>
  )
}
```
- Anywhere we have an object, JSX allows it to be replaced with curly braces and extract key-value pairs - this is called 'destructuring': e.g. (props) to ({ title, primary, magic }). This creates these as local variables so can shorten ``props.primary`` to ``primary`` etc making it simpler to use the variables.
- Then you can set default values. If nothing is set, values will be undefined by default, so better to explicitly set as `false`.
- Curly braces in JSX is analogous to <%%> in erb. 
- You can set logic within the component, e.g. for a certain class to only apply if a given condition is met.
- Pass along ``children`` to specify where you want them to be placed.
- Use !! to specify 'present' or 'true' - i.e. x = undefined will not equal true or false. !x implicitly converts into a boolean value of true, so !!x will be false. Can be read as 'present' or 'does not equal false'. 

#### React Developer Tools add-on for browser allows you to inspect React elements.