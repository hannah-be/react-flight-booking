import React from 'react';

function Button({ 
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

export default Button
// module.exports = Button