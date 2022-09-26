import clsx from 'clsx'
import React from 'react'

interface ArticleButtonProps {
    name: string
    choosed: string
    onClickFunction: (clicked: string) => void
}

export default function ArticleButton(props: ArticleButtonProps) {
    return (
        <button
            className={clsx(
                'px-4 py-3.5 font-semibold text-lg',
                props.choosed === props.name && 'text-black bg-gray-50',
                props.choosed !== props.name && 'text-gray-400'
            )}
            onClick={() => props.onClickFunction(props.name)}
        >
            {props.name}
        </button>
    )
}
