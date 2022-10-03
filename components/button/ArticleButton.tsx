import React from 'react'

interface ArticleButtonProps {
  name: string
  choosed: string
  isActiveTab: boolean
  onClickFunction: (clicked: string) => void
}

export default function ArticleButton(props: ArticleButtonProps) {
  return (
    <div>
      <button
        className={`md:px-4 md:py-3.5 px-3.5 py-3 md:text-lg text-sm whitespace-nowrap ${
          props.isActiveTab
            ? 'text-black bg-gray-50 font-semibold'
            : 'text-gray-400'
        }`}
        onClick={() => props.onClickFunction(props.name)}
      >
        {props.name}
      </button>
    </div>
  )
}
