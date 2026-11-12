import React from 'react'

function RestaurantCard() {
  return (
    <div className='m-8'>
        <img className='w-58 h-42 rounded-xl' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/10/29/cd779dc2-5933-4160-a769-5b4456922119_659837.JPG" alt="" />
        <h1 className='font-bold'>Bakingo</h1>
        <span className='font-bold'>4.5</span>
        <span className='ml-3'>30-40 mins</span>
        <p>Bakery, Snacks</p>
        <p>Karol Bagh</p>
    </div>
  )
}

export default RestaurantCard