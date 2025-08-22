import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';
import Image from './Image';
import clone from '../assets/clone.png';

const Counter = () => {

    const conduct_date = '2025-08-17 00:00:00';

    const [count, setCount] = useState({})

    useEffect(() => {
        const updateCountdown = () => {
        const countDown = countDownDateAndTime(conduct_date);
        setCount(countDown);
        }
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, [conduct_date]);

    return (
        <>
            <div className= 'flex gap-[17px] justify-center items-center pt-[62px]'>
                <div className='text-center'>
                    <h1 className='text-xs font-medium'>Days</h1>
                    <h2 className='text-[32px] font-bold'>{count.days}</h2>
                </div>
                    <Image src={clone}/>
                <div className='text-center'>
                    <h1 className='text-xs font-medium'>Hours</h1>
                    <h2 className='text-[32px] font-bold'>{count.hours}</h2>
                </div>
                    <Image src={clone}/>
                <div className='text-center'>
                    <h1 className='text-xs font-medium'>Minutes</h1>
                    <h2 className='text-[32px] font-bold'>{count.minutes}</h2>
                </div>
                    <Image src={clone}/>
                <div className='text-center'>
                    <h1 className='text-xs font-medium'>Seconds</h1>
                    <h2 className='text-[32px] font-bold'>{count.seconds}</h2>
                </div>
            </div>
        </>
    )
}

export default Counter