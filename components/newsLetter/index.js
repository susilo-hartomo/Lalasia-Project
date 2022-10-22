import React from 'react'

import PrimaryButton from '@/components/button/PrimaryButton'
import { arrowRightIc } from '../../assets/icons'

function NewsLetter() {
  return (
    <div className="flex md:flex-row flex-col md:justify-between justify-start my-8">
      <h2 data-aos="fade-up" className="heading md:mb-0 mb-4">
        Subscribe to our newsletter
      </h2>
      <div data-aos="fade-up" className="flex flex-start whitespace-nowrap">
        <PrimaryButton
          text="Let's Talk"
          onClick={() => alert('press button')}
          icon={arrowRightIc}
          width={undefined}
        />
      </div>
    </div>
  )  
}

export default NewsLetter