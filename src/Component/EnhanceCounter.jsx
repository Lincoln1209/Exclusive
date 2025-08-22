import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';

const EnhanceCounter = ({days,hours,minutes,seconds}) => {
    
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
            <div className= 'flex gap-6 items-center pt-16'>
                <div className={days}>
                    <h2 className='font-bold'>{count.days}</h2>
                    <h1 className='text-xs font-medium'>Days</h1>
                </div>
                <div className={hours}>
                    <h2 className='font-bold'>{count.hours}</h2>
                    <h1 className='text-xs font-medium'>Hours</h1>
                </div>
                <div className={minutes}>
                    <h2 className='font-bold'>{count.minutes}</h2>
                    <h1 className='text-xs font-medium'>Minutes</h1>
                </div>
                <div className={seconds}>
                    <h2 className='font-bold'>{count.seconds}</h2>
                    <h1 className='text-xs font-medium'>Seconds</h1>
                </div>
            </div>
        </>
  )
}

export default EnhanceCounter