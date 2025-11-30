'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import Logo from '../../../public/Hunter-Logo.png'
import Menu from '../../../public/Menu.png'
import Link from 'next/link'


function nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='px-10 py-3 bg-gray-100 '>
      <div className='flex justify-between items-center'>
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
            className='cursor-pointer'
            onClick={toggleMenu}
          />          
        </div>
      </div>
      {isMenuOpen ? (
        <ul className='flex flex-col gap-4 py-3'>
          <li>
            <Link href="/page">
              Home
            </Link>
          </li>
          <li>
            <Link href="/character">
              Character
            </Link>
          </li>
          <li>
            <Link href="/nen">
              Nen
            </Link>
          </li>
        </ul>      
      ): null}         
    </div>
  )
}

export default nav