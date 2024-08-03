import React from 'react'

const ColorInput = (props) => {

  const handleChange = (e) => {
    e.preventDefault();
    props.setColors(props.num, e.target.value);
  }

  return (
    <div>
        <h1>Input hexcode for color {props.num}</h1>
        <input type='text' className={`color-${props.num}`} onChange={handleChange} />
    </div>
  )
}

export default ColorInput