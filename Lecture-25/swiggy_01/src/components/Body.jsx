import React from 'react'
import RestaurantCard from './RestaurantCard'
import ApiCalling from './ApiCalling'

function Body() {
    let restArray = ApiCalling(); //array 9 ele
  return (
    <div>
        <h1 className='font-bold text-xl m-8'>Restaurants with online food delivery in Delhi</h1>
        <button className='ml-20 p-2 border rounded-lg'>Rating 4.5+</button>
        <button className='mx-2 p-2 border rounded-lg'>Reset</button>

        <div className='flex flex-wrap w-10/12 m-auto'>
            <RestaurantCard restArray={restArray}  />
        </div>
    </div>
  )
}

export default Body