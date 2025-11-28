import React from 'react'
import Image from 'next/image'
import Background from '../../../public/hunter_background.avif'

function hero() {
  return (
    <div>
      <div className='m-10 relative h-150 rounded-2xl overflow-hidden shadow-lg'>
        <Image 
          src={Background}
          alt="background"
          fill
          className="object-cover"
        />
      </div> 
      
    </div>
  )
}

export default hero