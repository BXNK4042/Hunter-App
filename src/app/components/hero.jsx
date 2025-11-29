'use client'

import React from 'react'

function hero() {
  return (
    <div className='flex justify-center items-center w-full h-70'>
      <iframe
        className="w-75 h-50 rounded-2xl"
        src="https://www.youtube.com/embed/PxYnfesUCs0"
        title="YouTube video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default hero