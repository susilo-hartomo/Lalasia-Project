import React from 'react'

const ListServiceCard = ({ number, title, desc, idx }) => {
    return (
        <div className="text-left w-full">
            <h2 className="heading w-9 text-primary-1">{number}</h2>
            <h5 className="mt-5 font-bold text-lg text-title-1">{title}</h5>
            <p className="tracking-wide text-paragraph-1 mt-2">{desc}</p>
        </div>
    )
}

export default ListServiceCard
