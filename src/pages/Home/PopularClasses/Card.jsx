import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({item}) => {
    const {_id, name, image, availableSeats, price, videoLink, description,instructorName,
        instructorEmail,status, submitted, totalEnrolled, reason} = item;


  return (
    <div className='shadow-lg rounded-lg p-3 flex flex-col justify-between border border-secondary overflow-hidden m-4'>
      <img className='h-48 rounded-lg' src={image} alt="" />
      <div className='mt-4 space-y-2'>
        <h2 className='text-black font-bold text-xl md:text-2xl'>{name}</h2>
        <h2>Available Seats: <span className='font-semibold'> {availableSeats}</span></h2>
        <div className='flex sm:flex-col sm:items-start md:flex-row justify-between md:items-center'>
        <h2>Price: <span className='font-semibold'> {price}</span></h2>
        <h2>Students: <span className='font-semibold'> {totalEnrolled}</span></h2>
        </div>

        <div>
            <Link
            to={`classes/${_id}`}
            className="text-center"
            >
            <button
            className='py-2 w-full bg-secondary rounded-lg text-white font-semibold'
            >Select</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
