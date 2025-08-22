import React from 'react'
import SecHead from '../Component/SecHead'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'

const Arrival = () => {
    return (
        <>
            <Container className='mt-35'>
                <div className='flex justify-center items-center'>
                    <SecHead title='Featured' header='New Arrival' />
                </div>
                <Flex className='justify-between items-center mt-15'>
                    <div className='bg-[url(./assets/Arrival1.png)] bg-cover bg-no-repeat bg-center h-150 w-[570px] rounded-sm pl-8 pt-[446px] pb-8'>
                        <h2 className='w-40.5 text-2xl text-white font-semibold'>PlayStation 5</h2>
                        <p className='w-60.5 text-sm text-white py-4'>Black and White version of the PS5 coming out on sale.</p>
                        <a href="" className='border-b-1 border-b-secondary text-white'>Shop Now</a>
                    </div>
                    <div>
                        <div className='bg-[url(./assets/Arrival2.png)] bg-cover bg-no-repeat bg-center h-71 w-[570px] mb-8 rounded-sm pl-8 pt-[138px] pb-6'>
                            <h2 className='w-[255px] text-2xl text-white font-semibold'>Women’s Collections</h2>
                            <p className='w-[225px] text-sm text-white py-4'>Featured woman collections that give you another vibe.</p>
                            <a href="" className='border-b-1 border-b-secondary text-white'>Shop Now</a>
                        </div>
                        <Flex className='justify-between items-center'>
                            <div className='bg-[url(./assets/Arrival3.png)] bg-cover bg-no-repeat bg-center h-71 w-[270px] rounded-sm pl-6 pt-[175px] pb-6'>
                                <h2 className='w-[114px] text-2xl text-white font-semibold'>Speakers</h2>
                                <p className='w-[191px] text-sm text-white py-2'>Amazon wireless speakers</p>
                                <a href="" className='border-b-1 border-b-secondary text-white'>Shop Now</a>
                            </div>
                            <div className='bg-[url(./assets/Arrival4.png)] bg-cover bg-no-repeat bg-center h-71 w-[270px] rounded-sm pl-6 pt-[175px] pb-6'>
                                <h2 className='w-[104px] text-2xl text-white font-semibold'>Perfume</h2>
                                <p className='w-[191x] text-sm text-white py-2'>GUCCI INTENSE OUD EDP</p>
                                <a href="" className='border-b-1 border-b-secondary text-white'>Shop Now</a>
                            </div>
                        </Flex>
                    </div>
                </Flex>
            </Container>
        </>
    )
}

export default Arrival