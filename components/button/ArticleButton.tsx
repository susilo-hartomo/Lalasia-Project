import React from 'react'

interface ArticleButtonProps {
    name: string
    choosed: string,
    isActiveTab: boolean,
    onClickFunction: (clicked: string) => void
}

export default function ArticleButton(props: ArticleButtonProps) {

    return (
        <div>
            <button
                className={`px-4 py-3.5 text-lg ${props.isActiveTab ? 'text-black bg-gray-50 font-semibold' : 'text-gray-400 hover:text-gray-500'}`}
                onClick={() => props.onClickFunction(props.name)}
            >
                {props.name}
            </button>
        </div>
    )
}
