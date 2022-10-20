import Image from 'next/image'
import React from 'react'
import dateToFormatted from 'lib/helper/dateToFormatted'

function ArticleCardHorizontal(props) {
    const { image, category, title, summary, author, date, index } = props

    return (
        <div className="w-1/3 p-2">
            <div className="h-[150px] lg:h-[360px] relative mt-[50px]">
                <Image
                    src={image ? image : `/article_card_${index + 1}.png`}
                    alt="Articles image"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <p className="paragraph text-small font-bold text-paragraph-1 pt-[26px]">
                {category}
            </p>
            <h3 className="line-clamp-1 pt-[10px] bold md:text-3xl text-base font-bold text-title-1 capitalize">
                {title}
            </h3>
            <p className="line-clamp-2 paragraph text-small font-bold text-paragraph-1 pt-[6px]">
                {summary}
            </p>
            <div className="pt-[16px] flex flex-row">
                <Image
                    src={image ? image : "/avatar_small.png"}
                    alt="Articles image"
                    width={28}
                    height={28}
                />
                <h6 className="pl-2 text-xs pt-[6px]">
                    {author}
                </h6>
                <h6 className="pl-3 paragraph text-paragraph-1 text-xs font-bold pt-[6px]">
                    {dateToFormatted(date)}
                </h6>
            </div>
        </div>
    )
}

export default ArticleCardHorizontal