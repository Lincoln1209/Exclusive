import React from 'react'
import Banner from '../Component/Banner'
import Catagories from '../Component/Catagories'
import BestSelling from '../Component/BestSelling'
import Enhance from '../Component/Enhance'
import Explore from '../Component/Explore'
import Arrival from '../Component/Arrival'
import Customer from '../Component/Customer'
import BreadCrumb from '../Component/BreadCrumb'
import Container from '../Component/Container'
import Flashsales from '../Component/Flashsales'



const Home = () => {
  return (
    <>
      <Container>
        <BreadCrumb />
        <Banner />
        <Flashsales />
        <Catagories />
        <BestSelling />
        <Enhance />
        <Explore />
        <Arrival />
        <Customer />
      </Container>
    </>
  )
}

export default Home
