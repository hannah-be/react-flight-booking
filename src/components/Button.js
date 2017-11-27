import React from 'react';

function Button({ 
  title, 
  primary = false, 
  magic  = false
}) {
  let className = 'btn'

  if (primary) {
    className += ' btn--primary'
  }

  if (magic) {
    className += ' btn--rainbow'
  }

  return (
    <button className={ className }>
      { title }
    </button>
  )
}

export default Button
// module.exports = Button