import PrimaryButton from '@/components/button/PrimaryButton'
import BenefitsCard from '@/components/card/BenefitsCard'
import Layout from '@/components/Layout/index'
import ProductSlick from '@/components/slick/ProductSlick'
import Image from 'next/image'
import { isTemplateSpan } from 'typescript'
import {
  abstractStars,
  spiral,
  searchNormal,
  banner,
  ourProduct1,
  ourProduct2,
} from '../assets/images'
import { Benefits } from '../constants'
import CountingDesc from '@/components/items/CountingDesc'
import TestimoniSlick from '@/components/slick/TestimoniSlick'
import { articles } from 'constants/articles'
import ArticleCard from '@/components/card/ArticleCard'
import ArticlesSlick from '../components/slick/ArticlesSlick'

export default function Home() {
  const renderBanner = () => {
    return (
      <div className="container mx-auto relative">
        <div className="lg:mb-24 mb-12">
          <h1 className="heading text-center lg:w-[724px] mx-auto lg:mt-[100px] mt-[50px] relative">
            Discover Furniture With High Quality Wood
            <span className="lg:-mt-[12px] absolute mx-1 lg:mx-2 w-[24px] h-[24px] lg:w-[51px] lg:h-[51px]">
              <Image src={abstractStars} alt="Lalasia stars" />
            </span>
          </h1>
          <div className="absolute top-[60px] lg:mx-[100px] w-[83.43px] h-[83.43px] lg:w-[249.07px] lg:h-[249.07px]">
            <Image src={spiral} alt="Lalasia spiral" />
          </div>
          <p className="relative text-center mx-auto  lg:w-[796px] paragraph par1 lg:px-4 mt-[30px]">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non. Purus parturient
            viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing
            tempor.
          </p>
        </div>
        <div className="relative">
          <div className="lg:absolute z-10 lg:-top-24 lg:w-full w-[327px] lg:left-auto lg:right-auto left-8 -top-32">
            <div
              className="mx-auto lg:w-[810px] mt-[50px] lg:h-[84px] bg-white flex justify-between items-center px-4 gap-[18px]"
              style={{
                boxShadow: '0px 4px 80px rgba(175, 173, 181, 0.2)',
              }}
            >
              <div className="w-[32px] h-[32px] relative">
                <Image src={searchNormal} alt="search" layout="fill" />
              </div>
              <input
                className="w-[100%] h-[50px] p-2 focus:outline-none text-paragraph-1"
                type="search"
                placeholder="Search Property"
              />
              <PrimaryButton
                text={'Search'}
                onClick={() => alert('press button')}
              />
            </div>
          </div>
          <div className="lg:w-full lg:h-[480px] w-[327px] h-[160px] mx-auto mt-7 relative">
            <Image src={banner} alt="banner" layout="fill" />
          </div>
        </div>
      </div>
    )
  }

  const renderBenefit = () => {
    return (
      <div className="container mx-auto relative lg:mt-44 mt-24">
        <div className="lg:flex flex-row justify-between items-center px-4 lg:px-0">
          <div className="lg:w-[427px]  w-[327px] mb-4 lg:mb-0">
            <h5 className="heading text-secondary-1 mb-4">Benefits</h5>
            <h2 className="heading">Benefit when using our services</h2>
          </div>
          <p className="text-paragraph-1 lg:w-[505px] w-[327px]">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>
        </div>
        <div className="lg:flex justify-between mt-12">
          {Benefits.map((item, i) => (
            <BenefitsCard
              key={i}
              img={item.img}
              name={item.name}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    )
  }

  const renderProduct = () => {
    return (
      <div className="lg:mt-44 mt-24">
        <div className="container mx-auto relative">
          <div className="lg:mb-7 mb-4 mx-auto lg:w-[440px] h-[94px]">
            <p className="text-secondary-1 text-center">Product</p>
            <h2 className="heading text-center">Our Popular Product</h2>
          </div>
          <p className="text-paragraph-1 text-center lg:w-[656px] lg:mx-auto mx-6">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>
        </div>
        <ProductSlick />
      </div>
    )
  }

  const renderOurProduct = () => {
    return (
      <div className="container mx-auto lg:mt-44 px-4 lg:px-0 mt-24">
        <div className="lg:flex justify-between">
          <div>
            <div className="lg:w-[511px] h-[151px] ">
              <h5 className="text-secondary-1 mb-3">Our Products</h5>
              <h2 className="heading font-bold">
                Crafted by talented and high quality material
              </h2>
            </div>
            <div className="lg:w-[580px] h-[96px] lg:my-12 my-4">
              <p className="text-paragraph-1">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non purus parturient.
                morbi fermentum, vivamus et accumsan dui tincidunt pulvinar
              </p>
            </div>
            <PrimaryButton text="Learn More" />
            <div className="mt-12">
              <Image src={ourProduct1} alt={'product1'} />
            </div>
          </div>
          <div>
            <div className="flex gap-12 lg:mt-12 mt-8 justify-end">
              <CountingDesc total={20} prefix="+" desc="Years Experience" />
              <CountingDesc total={483} desc="Happy Client" />
              <CountingDesc total={150} prefix="+" desc="Project Finished" />
            </div>
            <div className="mt-[58px]">
              <Image src={ourProduct2} alt={'product2'} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderTestimonial = () => {
    return (
      <div className="container lg:mt-44 mt-24 ">
        <div className="mb-7 text-center">
          <h5 className="text-secondary-1">Testimonials</h5>
          <h2 className="heading font-bold">What our customer say</h2>
        </div>
        <div className="lg:w-[656px] h-[54px] w-[327px] mx-auto">
          <p className="lg:text-center text-left text-paragraph-1">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>
        </div>
        <TestimoniSlick />
      </div>
    )
  }

  const renderArticles = () => {
    return (
      <div className="container mx-auto lg:mt-44 lg:px-0 px-6 mt-24">
        <p className="text-secondary-1">Articles</p>
        <div className="lg:flex flex-row justify-between gap-8">
          <div className="lg:w-1/2 w-full">
            <div className="lg:w-[544px] lg:h-[151px] h-[88px]">
              <h2 className="heading font-bold">
                The best furniture comes from Lalasia
              </h2>
              <p className="mt-4 mb-7 lg:mt-7 lg:mb-12 text-paragraph-1">
                Pellentesque etiam blandit in tincidunt at donec.
              </p>
            </div>
            <ArticlesSlick />
          </div>

          <div className="w-1/2">
            <div>
              {articles.map((item, i) => (
                <ArticleCard
                  key={i}
                  img={item.img}
                  category={item.category}
                  title={item.title}
                  prefix={item.prefix}
                  iconProfil={item.iconProfil}
                  name={item.name}
                  date={item.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderJoinWithUs = () => {
    return (
      <div className="container lg:flex lg:mt-[280px] mt-24 flex-row justify-between  lg:px-0 px-6">
        <h2 className="font-bold sm:mb-4">
          Join with me for get special discount
        </h2>
        <PrimaryButton text="Learn More --->" />
      </div>
    )
  }

  return (
    <Layout>
      <div className="px-6 lg:px-0">
        {renderBanner()}
        {renderBenefit()}
        {renderProduct()}
        {renderOurProduct()}
        {renderTestimonial()}
        {renderArticles()}
        {renderJoinWithUs()}
      </div>
    </Layout>
  )
}
