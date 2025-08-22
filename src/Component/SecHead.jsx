import React from 'react'

const secHead = ({title, header}) => {
  return (
    <div>
      <h4 className='border-l-20 border-primary rounded-[4px] text-primary pl-4 h-10 flex items-center'>{title}</h4>
      <h2 className='text-[36px] font-semibold pt-6'>{header}</h2>
    </div>
  )
}

export default secHead