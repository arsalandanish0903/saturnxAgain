import React from 'react'
import './Button.css'
function Button({mainButton, btnPath}) {
  return (
    <div>
        <button className="BookAFree">
            {mainButton}
          </button>
    </div>
  )
}

export default Button