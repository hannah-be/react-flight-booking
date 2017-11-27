import React from 'react';

function Button(props) {
  let className = 'btn'

  if (props.primary) {
    className += ' btn--primary'
  }

  if (props.magic) {
    className += ' btn--rainbow'
  }

  return (
    <button className={ className }>
      { props.title }
    </button>
  )
}

export default Button
// module.exports = Button