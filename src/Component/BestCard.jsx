import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import Button from './Button';
import { FaStar } from "react-icons/fa";
import Flex from './Flex';

const BestCard = (props) => {
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
            </div>
            <div>
                <h2 className='font-medium pt-4'>{props.heading}</h2>
                <Flex className='gap-3'>
                    <h2 className='text-primary font-bold py-2'>{props.price}</h2>
                    <h2 className='text-secondary font-bold py-2 line-through'>{props.prev}</h2>
                </Flex>
                <div className='flex text-[#ffad33] text-sm items-center gap-2'>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    <h2 className='text-secondary'>{props.rating}</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default BestCard