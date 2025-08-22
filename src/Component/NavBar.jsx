import React, { useState } from 'react'
import Container from '../Component/Container'
import Flex from '../Component/Flex'
import List from './List'
import ListItems from './ListItems'
import logo from '../assets/Exclusive.png'
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router'



const NavBar = () => {

    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }

    return (
        <>
            <nav className='pb-5 pt-5 lg:pt-10 lg:pb-4 border-b-1 border-[#b3b3b3] relative'>
                <Container>
                    <Flex className="lg:flex gap-5 lg:justify-between items-center">
                        <div className='w-[25%] pl-2 lg:pl-0'>
                            <img src={logo} alt="" />
                        </div>
                        {/* <div className='lg:hidden block w-[50%]'>
                            <div className='relative'>
                                <input type="text" className='bg-[#f5f5f5] py-2.5 pl-5 pr-3 text-xs text-black' />
                                <CiSearch className='absolute top-1.5 right-5 text-2xl' />
                            </div>
                        </div> */}
                        <div className={`${show ? 'block' : 'hidden'} lg:flex lg:justify-between items-center justify-center lg:w-[75%] absolute top-20 lg:static lg:bg-transparent bg-[#000] text-white lg:text-black w-full pl-4 lg:pl-0 py-4 lg:py-0 z-10`}>
                            <div>
                                <List className="flex-wrap lg:flex gap-6 leading-10 lg:leading-0">
                                    <NavLink to="/">
                                    <ListItems className='customize hover:bg-white hover:text-black pl-2.5 lg:pl-0'>Home</ListItems>
                                    </NavLink>
                                    <NavLink to="/Shop">
                                    <ListItems className='customize hover:bg-white hover:text-black pl-2.5 lg:pl-0'>Shop</ListItems>
                                    </NavLink>
                                    <NavLink to="/Contact">
                                    <ListItems className='customize hover:bg-white hover:text-black pl-2.5 lg:pl-0'>Contact</ListItems>
                                    </NavLink>
                                    <NavLink to="/About">
                                    <ListItems className='customize hover:bg-white hover:text-black pl-2.5 lg:pl-0'>About</ListItems>
                                    </NavLink>
                                    <NavLink to="/SignUp">
                                    <ListItems className='customize hover:bg-white hover:text-black pl-2.5 lg:pl-0'>Sign Up</ListItems>
                                    </NavLink>
                                </List>
                            </div>
                            <div className='flex gap-6 items-center mt-2'>
                                <div className='relative'>
                                    <input type="text" className='w-[243px] bg-[#f5f5f5] py-2.5 pl-5 pr-10 text-xs' placeholder='What are you looking for?' />
                                    <CiSearch className='absolute top-1.5 lg:right-2 text-2xl' />
                                </div>
                                <Flex className="gap-4 items-center text-3xl">
                                    <CiHeart />
                                    <PiShoppingCartLight />
                                </Flex>
                            </div>
                        </div>
                    </Flex>
                    <GiHamburgerMenu onClick={handleClick} className='w-[10%] lg:hidden block text-2xl absolute right-2 top-6' />
                </Container>
            </nav>
        </>
    )
}

export default NavBar