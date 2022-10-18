import React from 'react'
import Image from 'next/image'

function PrimaryButton({ text, onClick, icon, width }) {
  return (
    <div
      className={`max-h-14 group self-center ${width ? width : 'max-w-fit'} ${
        icon ? 'flex max-w-fit' : 'w-full'
      } text-center cursor-pointer bg-primary-1 px-9 py-4 hover:bg-primary-2`}
      onClick={onClick}
    >
      <h5
        className={`group-hover:text-white heading text-light-white ${
          icon ? 'w-max' : 'w-full'
        }`}
      >
        {text}
      </h5>
      {icon ? (
        <div className="w-6 h-full ml-4 my-auto">
          <img src={icon.src} alt={text} className="max-h-6" />
        </div>
      ) : null}
    </div>
  )
}

export default PrimaryButton
