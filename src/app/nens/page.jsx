import React from 'react'
import Image from 'next/image'
import Nen from '../../../public/Nen.png'

function page() {
  return (
    <div className='flex flex-col items-center'>
        <Image
          src={Nen}
          width={300}
          alt='nen-image'
          className='my-10'
        />
        <div className="flex flex-col items-center w-full bg-gray-100 ">
          <div className="flex flex-col my-10 w-70 gap-5">
            <div className="">
              <h1 className='text-lg font-bold'>What is Nen?</h1>
              <p className='text-xs'>Nen is the fundamental life-energy technique in Hunter × Hunter. It allows a person to control and manipulate their aura, unlocking superhuman strength, speed, perception, and unique abilities.</p>              
            </div>
            <hr />
            <div className="">
              <h1 className='text-lg font-bold'>Aura</h1>
              <p className='text-xs'>Aura is the life force that flows through every living being.Nen users can shape and release this energy, turning it into offense, defense, or special abilities.
              </p>              
            </div>
            <hr />
            <div className="">
              <h1 className='text-lg font-bold'>The Four Basic Principles</h1>
              <p className='text-xs'> Ten – Maintains aura around the body for defense. <br />
                  Zetsu – Shuts off aura to hide presence. <br />
                  Ren – Increases aura output for power. <br />
                  Hatsu – The user’s unique ability or personalized attack.
              </p>              
            </div>
            <hr />
            <div className="">
              <h1 className='text-lg font-bold'>Nen Types</h1>
                <p className='text-xs'> Enhancer, Emitter, Manipulator, Transmuter, Conjurer, Specialist <br />
                    Each user fits into one main category based on their natural affinity.
                </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page