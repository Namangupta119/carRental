import React from 'react'
import Hero from '../Components/Hero'
import FeatureSections from '../Components/FeatureSections'
import Banner from '../Components/Banner'
import Testimonial from '../Components/Testimonial'
import Newsletter from '../Components/Newsletter'

const Home = () => {
  return (
    <>
        <Hero/>
        <FeatureSections/>

        <Banner />
        <Testimonial/>
        <Newsletter/>
    </>
  )
}

export default Home