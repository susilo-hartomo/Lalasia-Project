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
                'p-4',
                props.choosed === props.name && 'text-black',
                props.choosed !== props.name && 'text-gray-400'
            )}
            onClick={() => props.onClickFunction(props.name)}
        >
            {props.name}
        </button>
    )
}
