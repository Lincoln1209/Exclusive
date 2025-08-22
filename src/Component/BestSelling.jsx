import React from 'react'
import SecHead from '../Component/SecHead'
import Button from './Button'
import Container from './Container'
import Flex from './Flex'
import BestCard from './BestCard'
import Best1 from '../assets/Best1.png'
import Best2 from '../assets/Best2.png'
import Best3 from '../assets/Best3.png'
import Best4 from '../assets/Best4.png'


const BestSelling = () => {
  return (
    <>
         <Container className='mt-[70px]'>
          <Flex className='justify-between items-end'>
            <SecHead title='This Month' header='Best Selling Products' />
            <Button className='px-12 py-4 bg-primary rounded-sm'>View All</Button>
          </Flex>
            <Flex className='justify-between items-center mt-15'>
              <BestCard
                img={Best1}
                heading='The north coat'
                price='$260'
                prev='$360'
                rating='(65)'
              />
              <BestCard
                img={Best2}
                heading='Gucci duffle bag'
                price='$960'
                prev='$1160'
                rating='(65)'
              />
              <BestCard
                img={Best3}
                heading='RGB liquid CPU Cooler'
                price='$160'
                prev='$170'
                rating='(65)'
              />
              <BestCard
                img={Best4}
                heading='Small BookSelf'
                price='$360'
                rating='(65)'
              />
              </Flex>
      </Container>
    </>
  )
}

export default BestSelling