import React from 'react'
import SecHead from '../Component/SecHead'
import Container from './Container'
import cat1 from '../assets/cat1.svg'
import cat2 from '../assets/cat2.svg'
import cat3 from '../assets/cat3.svg'
import cat4 from '../assets/cat4.svg'
import cat5 from '../assets/cat5.svg'
import cat6 from '../assets/cat6.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CatCard from './CatCard'

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='absolute -top-22 right-5 text-2xl bg-[#f5f5f5] rounded-full p-2.75'
            onClick={onClick}
        >
            <FaArrowRight />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='absolute -top-22 right-20 text-2xl bg-[#f5f5f5] rounded-full p-2.75'
            onClick={onClick}
        >
            <FaArrowLeft />
        </div>
    );
}


const Catagories = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <>
            <Container className='mt-20 border-b-1 border-secondary pb-15'>
                    <SecHead title='Categories' header='Browse By Category' />
                    <Slider {...settings} className='mt-15'>
                        <CatCard
                            img={cat1}
                            title='Phones'
                        />
                        <CatCard
                            img={cat2}
                            title='Computers'
                        />
                        <CatCard
                            img={cat3}
                            title='SmartWatch'
                        />
                        <CatCard
                            img={cat4}
                            title='Camera'
                        />
                        <CatCard
                            img={cat5}
                            title='HeadPhones'
                        />
                        <CatCard
                            img={cat6}
                            title='Gaming'
                        />
                    </Slider>
            </Container>
        </>
    )
}

export default Catagories