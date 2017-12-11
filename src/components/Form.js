import React from 'react'

function Form({
  primary = false,
  firstInput,
  secondInput
}) {
  let className = ""
  if (primary) {
    className="primary"
  }
  return (
    <form>
      <label>
        { firstInput }
        </label>
        <input type="text" name="name" />
        <label className={className}>
          { secondInput }
        </label>
        <input type="text" name="color" className={className} />
        <input type="submit" value="Submit" />
      </form>
  )
}

export default Form