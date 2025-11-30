import React from 'react'
import Image from 'next/image'
import Plus from '../../../public/Plus.png'

function faq() {
  const questions = [
    {id: 0, q: 'Who created Hunter × Hunter?', a: 'Hunter × Hunter was created by Yoshihiro Togashi, the same manga artist behind Yu Yu Hakusho.'},
    {id: 1, q: 'Is Hunter × Hunter finished?', a: 'The manga is not officially finished. Togashi releases chapters irregularly due to health issues, but the story is not cancelled.'},
    {id: 2, q: 'How many episodes are in the Hunter × Hunter anime?', a: 'The 2011 anime adaptation has 148 episodes.'},
    {id: 3, q: 'What is Nen in Hunter × Hunter?', a: 'Nen is the power system of the series. It lets characters use their life energy (aura) in unique and strategic ways, making fights more about intelligence than raw strength.'},
    {id: 4, q: 'Who are the main characters?', a: 'The main group includes Gon, Killua, Kurapika, and Leorio.'},
  ]

  return (
    <div className='h-80 bg-gray-100'>
      <div className="mx-20 py-10">
        <h1 className='text-2xl font-bold'>FAQ</h1>
        <hr className='my-3'/>
        <ul className=''>
          {questions.map((question) => (
            <li className='w-60 cursor-pointer flex justify-between items-start text-sm my-3' key={question.id}>
              {question.q}
              <Image
                src={Plus}
                width={20}
                alt='plus'
              />
            </li> 
          ))}
        </ul>        
      </div>
    </div>
  )
}

export default faq