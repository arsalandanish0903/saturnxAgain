import React from 'react'
import './Button.css'
import { Link, useNavigate } from 'react-router-dom'
function Button({ mainButton, btnPath, className }) {
  const navigate = useNavigate()
  const handleClick = () => {
    if (typeof btnPath === "function") {
      btnPath(navigate)
    } else if (typeof btnPath === "string") {
      navigate(btnPath)
    }
  }
  return (
    <div>
      <button className={`BookAFree ${className}`}
      onClick={handleClick}
      >
        {mainButton}
      </button>
    </div>
  )
}

export default Button