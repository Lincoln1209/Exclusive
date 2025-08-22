import React, { useState } from 'react'
import List from './List'
import ListItems from './ListItems'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from './Image';
import banner from '../assets/banner.jpg';
import Container from './Container';
import Flex from './Flex';
import { BsMenuButtonWideFill } from "react-icons/bs";




const Banner = () => {

    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "10px"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "30px",
                    height: "30px",
                }}
            >
                {/* {i + 1} */}
            </div>
        )
    };

    return (
        <>
            <Container>
                <div className='lg:flex'>
                    <div onClick={handleClick} className='flex lg:hidden items-center gap-2 text-2xl font-bold pl-2.5 mt-5'>
                        <BsMenuButtonWideFill className='cursor-pointer'/>
                        <h1>Catagory</h1>
                    </div>
                    <div className={`${show ? 'block' : 'hidden'} lg:flex w-[217px] border-r-1 border-r-[#b3b3b3]`}>
                        <List className='w-[217px] mt-10 grid gap-4 font-poppins'>
                            <ListItems>Woman’s Fashion</ListItems>
                            <ListItems>Men’s Fashion</ListItems>
                            <ListItems>Electronics</ListItems>
                            <ListItems>Home & Lifestyle</ListItems>
                            <ListItems>Medicine</ListItems>
                            <ListItems>Sports & Outdoor</ListItems>
                            <ListItems>Baby’s & Toys</ListItems>
                            <ListItems>Groceries & </ListItems>
                            <ListItems>Health & Beauty</ListItems>
                        </List>
                    </div>
                    <div className='w-full ml-11.25 mt-10'>
                        <Slider {...settings}>
                            <div>
                                <Image src={banner} />
                            </div>
                            <div>
                                <Image src={banner} />
                            </div>
                            <div>
                                <Image src={banner} />
                            </div>
                            <div>
                                <Image src={banner} />
                            </div>
                            <div>
                                <Image src={banner} />
                            </div>
                            <div>
                                <Image src={banner} />
                            </div>
                        </Slider>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Banner