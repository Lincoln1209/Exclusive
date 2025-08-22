import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { MdKeyboardArrowDown } from "react-icons/md";
import List from './List';
import ListItems from './ListItems';

const Header = () => {
    
    const [show, setShow] = useState(false);
        
    const handleClick = () => {
            setShow(!show);
        }
    
    
    return (
        <>
            <header className='bg-black py-3 px-2 lg:px-0'>
                <Container>
                    <Flex className='justify-between items-center'>
                        <div className='text-white w-full lg:w-[90%] text-center text-sm'>
                            <h3 className=''>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#" className='font-bold underline'>ShopNow</a></h3>
                        </div>
                        <div className='relative'>
                            <button onClick={handleClick} className='flex items-center text-white text-sm cursor-pointer'>
                                English <MdKeyboardArrowDown className='text-2xl'/>
                            </button>
                            {
                            show ? 
                                <div className='absolute top-9 right-0 bg-black text-white text-sm px-5 z-20'>
                                    <List className='leading-9 cursor-pointer'>
                                        <ListItems>English</ListItems>
                                        <ListItems>Bangla</ListItems>
                                    </List>
                                </div> : null
                            }
                        </div>
                    </Flex>
                </Container>
            </header>
        </>
    )
}

export default Header
