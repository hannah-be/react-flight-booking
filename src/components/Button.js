// semi-colons are optional here
// Importing react is necessary for the JSX to work - it creates a react element
import React from 'react'

// When React sees a capitalised element it knows it's custom
function Button({ 
  // Use curly braces to destructure props object into key-value pairs and add default values where appropriate:
  children, 
  primary = false, 
  magic  = false,
  href
}) {
  let className = 'btn'
  if (primary) {
    className += ' btn--primary'
  }
  if (magic) {
    className += ' btn--rainbow'
  }
  const renderLink = !!href
  const Component = renderLink ? 'a' : 'button'

  return (
    <Component href={ href } className={ className }>
    { children }
    </Component>
  )

  // if (renderLink) {
  //   return (
  //     <a href={ href } className={ className }>
  //       { children }
  //       </a>
  //   )
  // } else {
  //   return (
  //     <button className={ className }>
  //       { children }
  //     </button>
  //   )
  // }
}

// Export default is the modern version of module.exports = Button
export default Button