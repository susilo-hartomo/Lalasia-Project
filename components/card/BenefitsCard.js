import React, { useRef } from 'react'
import Image from 'next/image'

function BenefitsCard({ img, name, desc }) {
  return (
    <div className="lg:w-fit mt-5 lg:mt-0 lg:mx-7">
      <div
        className="lg:w-[394px] lg:h-[285px] w-full h-[194px] lg:px-6 px-4 lg:py-6 py-4"
        style={{ boxShadow: '0px 4px 100px rgba(175, 173, 181, 0.1)' }}
      >
        <div className="w-11 h-11 lg:w-[62px] lg:h-[62px] mb-[14px] lg:mb-6">
          <Image src={img} alt="iconBenefit1" />
        </div>
        <h3 className="font-bold lg:mb-5 mb-[6px] text-title-1">{name}</h3>
        <p className="text-paragraph-1">{desc}</p>
      </div>
    </div>
  )
}

export default BenefitsCard
