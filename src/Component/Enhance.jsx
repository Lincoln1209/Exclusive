import React from 'react'
import Container from './Container'
import Button from './Button'
import EnhanceCounter from './EnhanceCounter'

const Enhance = () => {
  return (
    <>
        <Container className='bg-[url(./assets/Enhance.png)] bg-cover bg-no-repeat bg-center h-125 pl-14 py-[69px] mt-35'>
            <h5 className='font-semibold text-tertiary'>Categories</h5>
            <h1 className='text-5xl leading-15 font-inter text-white font-semibold w-100 h-30 py-8'>Enhance Your Music Experience</h1>
            <EnhanceCounter days='h-15.5 w-15.5 rounded-full bg-white text-center py-[14px]' hours='h-15.5 w-15.5 rounded-full bg-white text-center py-[14px]' minutes='h-15.5 w-15.5 rounded-full bg-white text-center py-[14px]' seconds='h-15.5 w-15.5 rounded-full bg-white text-center py-[14px]'/>
            <Button className='bg-tertiary mt-10'>Buy Now!</Button>
        </Container>
    </>
  )
}

export default Enhance