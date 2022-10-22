import React from 'react'

function TextHeader(props) {
  const { title, subtitle } = props
  return (
    <div className="mb-4 mt-16">
      <h1
        data-aos="fade-up"
        className="text-title-1 text-center font-bold md:text-6xl text-2xl md:mb-5 mb-4 "
      >
        {title}
      </h1>
      <p
        data-aos="fade-up"
        className="text-center md:w-3/4 w-11/12 mx-auto md:px-4 text-paragraph-1"
      >
        {subtitle}
      </p>
    </div>
  )
}

export default TextHeader