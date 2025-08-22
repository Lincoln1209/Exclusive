import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import Button from './Button';
import { FaStar } from "react-icons/fa";
import Flex from './Flex';

const ExploreCard = (props) => {
  return (
    <>
        <div className='w-[270px] group'>
            <div className='bg-[#f5f5f5] relative overflow-hidden'>
                <div>
                    <img src={props.img} alt="" />
                </div>
                <div className='absolute top-3 right-3'>
                    <div className='h-8.5 w-8.5 rounded-full bg-white flex items-center justify-center'>
                        <CiHeart />
                    </div>
                    <div className='mt-2 h-8.5 w-8.5 rounded-full bg-white flex items-center justify-center'>
                        <FiEye />
                    </div>
                </div>
                <div className='absolute -bottom-14 group-hover:bottom-0 duration-300 ease-linear left-0 w-full'>
                    <Button className='w-full py-2.25'>Add To Cart</Button>
                </div>
            </div>
            <div>
                <h2 className='font-medium pt-4'>{props.heading}</h2>
                <Flex className='gap-3'>
                    <h2 className='text-primary font-bold py-2'>{props.price}</h2>
                <div className='flex text-[#ffad33] text-sm items-center gap-2'>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    <h2 className='text-secondary'>{props.rating}</h2>
                </div>
                </Flex>
            </div>
        </div>
    </>
  )
}

export default ExploreCard