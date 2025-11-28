import Image from 'next/image'
import React from 'react'
import Duo from '../../../public/duo.png'

function about() {
  return (
    <div className='w-full h-150 bg-gray-100'>
        <div className='flex'>
            <div className="flex flex-col w-1/2 h-150 mx-20 p-4 justify-center">
                <h1 className='text-4xl font-bold'>What's Hunter × Hunter?</h1>
                <p className='text-xl my-5'>
                    Hunter x Hunter is an iconic shonen series that blends adventure, strategy, and emotional storytelling. The story follows Gon Freecss, a kid who dreams of becoming a licensed Hunter—an elite explorer with access to dangerous secrets, rare creatures, and hidden parts of the world.
                    Along the journey, he teams up with Killua, Kurapika, and Leorio, forming one of the most beloved squads in anime. With its brilliant Nen power system, unpredictable plot twists, and mature themes, Hunter x Hunter stands out as one of the most creative and respected series ever made.
                </p>
            </div>
            <div className="flex justify-center items-center w-1/2 h-150 mx-20 p-4">
                <Image
                    src={Duo}
                    width={500}
                    height={500}
                    alt="gon and kilua"
                />
            </div>
        </div>
    </div>
  )
}

export default about