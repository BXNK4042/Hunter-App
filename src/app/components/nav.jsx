'use client'

import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/Hunter-Logo.png'
import Menu from '../../../public/Menu.png'

function nav() {
  return (
    <div className='px-10 py-3 bg-gray-100 flex justify-between items-center'>
      <div>
        <Image 
          src={Logo}
          width={80}
          alt='hunter x hunter'
        />        
      </div>
      <div>
        <Image 
          src={Menu}
          width={32}
          alt='menu'
        />        
      </div>        
    </div>
  )
}

export default nav