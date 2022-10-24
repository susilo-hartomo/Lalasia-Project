import React from 'react'
import { searchNormal, banner } from '../../assets/images'
import PrimaryButton from '@/components/button/PrimaryButton'
import Image from 'next/image'

function FormSearch({ onClick }) {
  return (
    <div
      className="mx-auto w-full lg:w-[810px] lg:mt-[50px] lg:h-[84px] bg-white flex justify-between items-center p-2 lg:p-4"
      style={{ boxShadow: '0px 4px 80px rgba(175, 173, 181, 0.2)' }}
    >
      <div className="flex flex-1 lg:gap-4 gap-1 items-center">
        <label
          className="flex items-center cursor-pointer lg:ml-3"
          htmlFor="product-search"
        >
          <Image
            className="w-[32px] h-[32px]"
            src={searchNormal}
            alt="search"
          />
        </label>
        <input
          id="product-search"
          className="w-full h-[50px] p-2 focus:outline-none text-paragraph-1 cursor-text"
          type="search"
          placeholder="Search Property"
        />
      </div>
      <PrimaryButton onClick={onClick} text={'Search'} />
    </div>
  )
}

export default FormSearch
