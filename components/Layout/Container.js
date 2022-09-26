import React from 'react'

export default function Container({ children }) {
    return (
        <div className="container lg:flex lg:flex-col mx-auto lg:pt-24 pt-5 border-t-2 border-ligh-white">
            {children}
        </div>
    )
}
