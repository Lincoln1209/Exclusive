import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import Customer1 from '../assets/Customer1.png'
import Customer2 from '../assets/Customer2.png'
import Customer3 from '../assets/Customer3.png'

const Customer = () => {
  return (
    <>
        <Container className='mt-35'>
            <Flex className='gap-22 items-center px-[114px]'>
                <div className='w-64 h-40 text-center'>
                    <Image src={Customer1} className='mx-auto'/>
                    <h2 className='text-xl font-semibold mt-6 mb-2'>FREE AND FAST DELIVERY</h2>
                    <p className='text-sm'>Free delivery for all orders over $140</p>
                </div>
                <div className='w-64 h-40 text-center'>
                    <Image src={Customer2} className='mx-auto'/>
                    <h2 className='text-xl font-semibold mt-6 mb-2'>24/7 CUSTOMER SERVICE</h2>
                    <p className='text-sm'>Friendly 24/7 customer support</p>
                </div>
                <div className='w-64 h-40 text-center'>
                    <Image src={Customer3} className='mx-auto'/>
                    <h2 className='text-xl font-semibold mt-6 mb-2'>MONEY BACK GUARANTEE</h2>
                    <p className='text-sm'>We reurn money within 30 days</p>
                </div>
            </Flex>
        </Container>
    </>
  )
}

export default Customer