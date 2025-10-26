import React from 'react'
import Hero from '../Components/Hero'
import FeatureSections from '../Components/FeatureSections'
import Banner from '../Components/Banner'
import Testimonial from '../Components/Testimonial'
import Newsletter from '../Components/Newsletter'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Home = () => {
  const location = useLocation();
  const {fetchCars} = useAppContext();

useEffect(() => {
  fetchCars();
}, [location]); 
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