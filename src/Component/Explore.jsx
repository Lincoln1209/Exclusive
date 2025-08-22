import React from 'react'
import SecHead from '../Component/SecHead'
import Counter from './Counter'
import Container from './Container'
import Flex from './Flex'
import Explore1 from '../assets/Explore1.png'
import Explore2 from '../assets/Explore2.png'
import Explore3 from '../assets/Explore3.png'
import Explore4 from '../assets/Explore4.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Button from './Button'
import ExploreCard from './ExploreCard'

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


const Explore = () => {

 const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
     <>
      <Container className='mt-[71px]'>
            <SecHead title='Our Products' header='Explore Our Products'/>
            <Slider {...settings} className=' mt-10'>
              <ExploreCard
                img={Explore1}
                heading='Breed Dry Dog Food'
                price='$100'
                rating='(35)'
              />
              <ExploreCard
                img={Explore2}
                heading='CANON EOS DSLR Camera'
                price='$360'
                rating='(95)'
              />
              <ExploreCard
                img={Explore3}
                heading='ASUS FHD Gaming Laptop'
                price='$700'
                rating='(325)'
              />
              <ExploreCard
                img={Explore4}
                heading='Curology Product Set'
                price='$500'
                rating='(145)'
              />
              <ExploreCard
                img={Explore1}
                heading='Breed Dry Dog Food'
                price='$100'
                rating='(35)'
              />
              <ExploreCard
                img={Explore2}
                heading='CANON EOS DSLR Camera'
                price='$360'
                rating='(95)'
              />
              <ExploreCard
                img={Explore3}
                heading='ASUS FHD Gaming Laptop'
                price='$700'
                rating='(325)'
              />
              <ExploreCard
                img={Explore4}
                heading='Curology Product Set'
                price='$500'
                rating='(145)'
              />
              </Slider>
              <div className='flex justify-center mt-[37px] '>
                <Button className='px-12 py-4 bg-primary rounded-sm'>View All Products</Button>
              </div>
      </Container>
    </>
  )
}

export default Explore