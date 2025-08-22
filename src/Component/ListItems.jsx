import React from 'react'

const ListItems = ({children, className, onClick}) => {
  return (
    <>
        <li className={`${className} cursor-pointer capitalize select-none`} onClick={onClick}>
            {children}
        </li>
    </>
  )
}

export default ListItems