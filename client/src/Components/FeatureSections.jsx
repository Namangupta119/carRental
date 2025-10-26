import React from 'react'
import Title from './Title'
import { assets , dummyCarData} from '../assets/assets.js'
import CarCards from './CarCards'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext.jsx'
import { motion } from "motion/react";

const FeatureSections = () => {
  
  const {cars} = useAppContext()
  const navigate = useNavigate();
  return (
    <motion.div initial={{y: 40, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1, ease: "easeOut"}} className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
        <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1, delay: 0.5}}>
            <Title title='Featured Vechicles' subTitle='Explore our selection of premium vehicles available for your next adventure.'/>
        </motion.div>

        <motion.div initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1, delay: 0.5}} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
          {
            cars.slice(0,6).map((car)=>(
              <motion.div
              initial={{opacity: 0, scale: 0.95}}
              whileInView={{opacity: 1, scale: 1}}
              transition={{duration: 0.4, ease: "easeOut"}}
              key={car._id}>
                <CarCards car={car}/>
              </motion.div>
            ))
          }
        </motion.div>

        <motion.button initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.6, duration: 0.4}} onClick={()=> {
          navigate('/cars'); scrollTo(0,0)
        }} className='flex items-center justify-center gap-2 px-6 py-2 border border-borderColor hover:bg-gray-50 rounded-md mt-18 cursor-pointer'>
          Explore all cars <img src={assets.arrow_icon} alt="arrow" />
        </motion.button>
    </motion.div>
  )
}

export default FeatureSections