import clsx from 'clsx'
import React from 'react'

interface ArticleButtonProps {
    name: string
    choosed: string
    onClickFunction: (clicked: string) => void
}

export default function ArticleButton(props: ArticleButtonProps) {
    return (
        <div>
            <button
                className={clsx(
                    'px-4 py-3.5 text-lg',
                    props.choosed === props.name && 'text-black bg-gray-50 font-semibold',
                    props.choosed !== props.name && 'text-gray-400'
                )}
                onClick={() => props.onClickFunction(props.name)}
            >
                {props.name}
            </button>
        </div>
    )
}
