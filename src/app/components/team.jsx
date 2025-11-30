import React from 'react'
import Image from 'next/image'
import Character from '../../../public/Character.png'

function team() {
  return (
    <div className='flex justify-center items-center h-70'>
        <div>
            <Image
                src={Character}
                width={150}
                height={200}
                alt='hunterxhunter character'
            />
        </div>
    </div>
  )
}

export default team