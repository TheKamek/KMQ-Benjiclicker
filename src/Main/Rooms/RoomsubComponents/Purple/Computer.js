import React from 'react'
import './Computer.css'
const Computer = ({ backButtonClickRoom }) => {
  return (
    <div>Computer      <button
    className="backButton"
    onClick={(event) => {
      event.stopPropagation();
      backButtonClickRoom(event);
    }}
  >
    Back
  </button></div>
  )
}

export default Computer