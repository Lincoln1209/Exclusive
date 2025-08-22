import React from 'react'
import SecHead from '../Component/SecHead'
import Counter from './Counter'
import Container from './Container'
import Flex from './Flex'
import Card from './Card'
import Flash1 from '../assets/flash1.png'
import Flash2 from '../assets/flash2.png'
import Flash3 from '../assets/flash3.png'
import Flash4 from '../assets/flash4.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Button from './Button'

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



const Flashsales = () => {
  const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <>
            <Container className='mt-20 border-b-1 border-secondary pb-17.5'>
                <Flex className='items-end gap-[87px]'>
                    <SecHead title='Todays' header='Flash Sales' />
                    <Counter className='' />
                </Flex>
                <Slider {...settings} className='mt-10'>
                    <Card
                        img={Flash1}
                        discount='40'
                        heading='HAVIT HV-G92 Gamepad'
                        price='120'
                        prev='160'
                        review='88'
                    />
                    <Card
                        img={Flash2}
                        discount='35'
                        heading='AK-900 Wired Keyboard'
                        price='960'
                        prev='1160'
                        review='75'
                    />
                    <Card
                        img={Flash3}
                        discount='30'
                        heading='IPS LCD Gaming Monitor'
                        price='370'
                        prev='400'
                        review='99'
                    />
                    <Card
                        img={Flash4}
                        discount='25'
                        heading='S-Series Comfort Chair '
                        price='375'
                        prev='400'
                        review='99'
                    />
                </Slider>
                <div className='flex justify-center mt-[37px] '>
                    <Button className='px-12 py-4 bg-primary rounded-sm'>View All Products</Button>
                </div>
            </Container>
        </>
    )
}

export default Flashsales