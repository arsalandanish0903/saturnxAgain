import React from 'react'
import './Button.css'
function Button({mainButton, btnPath, className}) {
  return (
    <div>
        <button className={`BookAFree ${className}`}>
            {mainButton}
          </button>
    </div>
  )
}

export default Button