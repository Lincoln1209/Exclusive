import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import { VscSend } from "react-icons/vsc";
import List from './List'
import ListItems from './ListItems';
import Qr from '../assets/Qr.png'
import Google from '../assets/Google.png'
import Apple from '../assets/Apple.png'
import Facebook from '../assets/Facebook.png'
import Twitter from '../assets/Twitter.png'
import Instagram from '../assets/Instagram.png'
import Linkedin from '../assets/Linkedin.png'
import Copyright from '../assets/Copyright.png'

const Footer = () => {
    return (
        <>
            <footer className='bg-black px-[135px]'>
                <Container className='mt-35'>
                    <Flex className='gap-[87px] pt-20 text-white'>
                        <div className='w-[217px] h-[188px]'>
                            <h1 className='text-2xl font-bold'>Exclusive</h1>
                            <h2 className='text-xl font-medium py-6'>Subscribe</h2>
                            <p className='pb-4'>Get 10% off your first order</p>
                            <div className='relative'>
                                <input type="text" className='w-[217px] h-12 rounded-sm bg-black py-3 pl-4 pr-18 text-[#FAFAFA] border-1 border-white' placeholder='Enter your email' />
                                <VscSend className='absolute top-3 right-4 text-2xl' />
                            </div>
                        </div>
                        <div className='w-[175px]'>
                            <h2 className='text-xl font-medium mb-6'>Support</h2>
                            <List>
                                <ListItems>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</ListItems>
                                <ListItems className='py-4'>exclusive@gmail.com</ListItems>
                                <ListItems>+88015-88888-9999</ListItems>
                            </List>
                        </div>
                        <div>
                            <h2 className='text-xl font-medium mb-6'>Account</h2>
                            <List className='leading-8'>
                                <ListItems>My Account</ListItems>
                                <ListItems>Login / Register</ListItems>
                                <ListItems>Cart</ListItems>
                                <ListItems>Wishlist</ListItems>
                                <ListItems>Shop</ListItems>
                            </List>
                        </div>
                        <div>
                            <h2 className='text-xl font-medium mb-6'>Quick Link</h2>
                            <List className='leading-8'>
                                <ListItems>Privacy Policy</ListItems>
                                <ListItems>Terms Of Use</ListItems>
                                <ListItems>FAQ</ListItems>
                                <ListItems>Contact</ListItems>
                            </List>
                        </div>
                        <div>
                            <h2 className='text-xl font-medium mb-6'>Download App</h2>
                            <p className='text-xs font-medium mb-2'>Save $3 with App New User Only</p>
                            <Flex className='gap-2 items-center mb-6'>
                                <div>
                                    <Image src={Qr} />
                                </div>
                                <div className='grid gap-y-2'>
                                    <Image src={Google} />
                                    <Image src={Apple} />
                                </div>
                            </Flex>
                            <Flex className='justify-between items-center text-2xl w-42'>
                                <Image src={Facebook} />
                                <Image src={Twitter} />
                                <Image src={Instagram} />
                                <Image src={Linkedin} />
                            </Flex>
                        </div>
                    </Flex>
                    <Flex className='gap-0.5 justify-center items-center pt-19 pb-6'>
                        <Image src={Copyright} className='text-xl' />
                        <h3 className='text-white'>Copyright Rimel 2022. All right reserved</h3>
                    </Flex>
                </Container>
            </footer>
        </>
    )
}

export default Footer