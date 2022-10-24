import React, { useRef } from 'react'
import Image from 'next/image'

function TestimoniCard({ name, quote, rate, img, iconQute, iconStar }) {
  return (
    <div
      className="lg:w-auto lg:h-[256px] W-[327px] h-[205px] lg:px-6 lg:p-6 lg:mx-4 lg:my-8 px-4 py-4"
      style={{ boxShadow: '0px 4px 100px rgba(175, 173, 181, 0.1)' }}
    >
      <div className="lg:mb-6 mb-4 lg:w-10 lg:h-10 w-8 h-8">
        <Image src={iconQute} alt={'iconQuote'} />
      </div>
      <p className="text-paragraph-1 mt-4">{quote}</p>
      <div className="flex flex-row justify-between lg:mt-6 mt-3 mb-4 lg:mb-6">
        <div className="flex flex-row items-center gap-3">
          <Image src={img} alt={'acountImage'} />
          <h4 className="font-bold">{name}</h4>
        </div>
        <div className="flex flex-row items-center gap-[10px]">
          <Image src={iconStar} alt={'star'} />
          <h5 className="font-bold">{rate}</h5>
        </div>
      </div>
    </div>
  )
}

export default TestimoniCard
