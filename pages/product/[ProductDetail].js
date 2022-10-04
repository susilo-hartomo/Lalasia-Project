import Layout from '@/components/Layout'
import Image from 'next/image'
import PrimaryButton from '@/components/button/PrimaryButton'
import SecondaryButton from '@/components/button/SecondaryButton'
import { products, colorProductDetail } from '../../constants/products'
import ProductCard from '@/components/card/ProductCard'
import { useState } from 'react'

const ProductDetail = () => {
  const [image, setImage] = useState('')
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  const handleColorImg = (data) => {
    setImage(data)
  }

  const renderProductDetail = () => {
    return (
      <div className="mt-14 px-2">
        <div className="lg:flex lg:flex-wrap lg:gap-10">
          <div className="w-full h-[327px] relative lg:w-1/2 lg:h-[600px]">
            <Image
              src={image ? image : colorProductDetail.img}
              alt="Services image brand"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="mt-7 lg:w-[45%]">
            <h2 className="heading text-title-1">{colorProductDetail.name}</h2>
            <p className="mt-2 text-paragraph-1 paragraph">
              {colorProductDetail.category}
            </p>

            <h6 className="heading mt-5 text-title-1">Color</h6>
            <div className="mt-2 flex flex-wrap">
              {colorProductDetail.color.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={
                      'h-8 w-8 lg:h-12 lg:w-12 border-0 cursor-pointer'
                    }
                    style={{ backgroundColor: `#${data.hexColor}` }}
                    onClick={handleColorImg.bind(this, data.image)}
                  ></div>
                )
              })}
            </div>

            <p className="mt-4 text-paragraph-1 paragraph">
              {isReadMore
                ? colorProductDetail.desc.slice(0, 150)
                : colorProductDetail.desc}
              <span
                onClick={toggleReadMore}
                className="inline-block text-primary-1 cursor-pointer"
              >
                {isReadMore ? '... Read More' : ' Show Less'}
              </span>
            </p>

            <h3 className="mt-5 heading text-title-1 lg:text-4xl">
              {colorProductDetail.price}
            </h3>

            <div className="mt-12 grid gap-5 grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2">
              <PrimaryButton
                text="Buy Now"
                onClick={() => alert('press button')}
                width="w-full"
              />
              <SecondaryButton
                text="Add to Cart"
                onClick={() => alert('press button')}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderProductRelated = () => {
    return (
      <div className="mt-28 px-2">
        <h2 className="heading text-title-1">Related Items</h2>
        <div className="mt-6 grid gap-4 grid-cols-2 grid-rows-2 lg:grid-cols-3 lg:grid-rows-3">
          {products.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100 + 150}`}
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <ProductCard
                key={index}
                img={item.img}
                category={item.category}
                name={item.name}
                desc={item.desc}
                price={item.price}
                responsiveParent="w-full h-[280px] lg:h-[535px]"
                responsiveImgParent="w-full h-[130px] lg:h-[360px]"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <Layout title="Product Details" content="We are the one">
      <div className="container mx-auto px-2 lg:px-0">
        {renderProductDetail()}
        {renderProductRelated()}
      </div>
    </Layout>
  )
}

export default ProductDetail
