import React from 'react'

const Button = ({children, className}) => {
  return (
    <div>
        <button className={`text-white bg-black py-4 px-12 rounded-sm cursor-pointer ${className}`}>
            {children}
        </button>
    </div>
  )
}

export default Button