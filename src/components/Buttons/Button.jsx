import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'
function Button({mainButton, btnPath, className}) {
  return (
    <div>
        <button className={`BookAFree ${className}`}>
            <Link to={btnPath}>
              {mainButton}
            </Link>
          </button>
    </div>
  )
}

export default Button