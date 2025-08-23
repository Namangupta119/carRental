import React, {useEffect, useState} from 'react'
import { assets, dummyCarData } from '../assets/assets'

const MyBookings = () => {
  const [bookings, setBookings]=async()=>{
    setBookings(dummyCarData)
  }
  useEffect(()=>{
    fetchMyBookings()
  },[])


  return (
    <div className='px-6 md:px-16 1g:px-24 xl:px-32 2x1:px-48 mt-16 text-sm max-w-7x1'>
<Title title='My Bookings'
subTitle='View and manage your all car bookings'align="left"/>
</div>
 {bookings.map((booking, index)=>(
<div key={booking._id} className='grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg mt-5 first:mt-12'>
  {/*Car image + Info  */}
  <div className='md:col-span-1'>
    <div className='rounded-md overflow-hidden mb-3'>
      <img src={booking.car.image}alt="" className='w-full h-auto aspect-video object-cover'/>
    </div>
    <p className='text-lg from-neutral mt-2'>{booking.car.brand}{booking.car.model}</p>
    <p className='text-grey-500'>{booking.car.year}.{booking.car.category}.{booking.car.location}</p>
  </div>
  {/*Booking Info  */}
<div className='md:col-span-2'>
  <div className='flex items-center gap-2'>
    <p className='px-4 py-1.5 bg-light rounded'>Booking # {index+1}</p>
   
</div>
</div>
</div>
  ))}
  </div>
  </div>
  )}
export default MyBookings
