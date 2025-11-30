import React from 'react'
import Image from 'next/image'
import Gon from '../../../public/gon.png'

function page() {
  return (
    <div className='h-[650px]'>
      <div className="h-full flex justify-center items-center">
        <div className='w-65 h-120 shadow-2xl flex flex-col bg-black rounded-2xl'>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center mt-3 rounded-2xl w-60 h-90 bg-[#BAC3A0] ">
              <Image
                src={Gon}
                width={170}
                alt='gon_hunterxhunter'
              />
            </div>            
          </div>
          <div className="ml-5 text-white">
            <div className="flex items-end mt-2 ">
              <h1 className='text-2xl font-bold'>GON</h1>
              <p className='ml-2 text-lg'>Freecss</p>            
            </div>
            <p className='text-md'>Nen: Enhancer</p>            
          </div>
        </div>        
      </div>
    </div>
  )
}

export default page