import React from 'react'

const CatCard = (props) => {
  return (
    <>
        <div className='w-[170px] pt-[25px] pb-6 border-2 border-secondary rounded-sm hover:bg-primary duration-300 ease-linear'>
            <img className='text-[56px] mb-4 mx-auto' src={props.img} alt="" />
            <h5 className='text-center'>{props.title}</h5>
        </div>
    </>
  )
}

export default CatCard