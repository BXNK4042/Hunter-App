'use client'

import React from 'react'
import Link from 'next/link'

function nav() {
  return (
    <div className='flex justify-between px-20 py-5 bg-gray-100'>
      <h1 className='text-2xl font-bold'>Hunter × Hunter</h1>
      <ul className='flex justify-between w-80'>
        <li>
          <Link className='text-xl' href="/home">Home</Link>
        </li>
        <li>
          <Link className='text-xl'  href="/character">Character</Link>
        </li>
        <li>
          <Link className='text-xl'  href="/nen">Nen</Link>
        </li>
      </ul>
    </div>
  )
}

export default nav