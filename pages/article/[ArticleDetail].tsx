import Image from 'next/image'
import React, { useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Layout from '@/components/Layout'
import Container from '@/components/Layout/Container'
import NewsLetter from '@/components/newsLetter'
import TextHeader from '@/components/text/TextHeader'
import ArticleCardHorizontal from '@/components/card/ArticleCardHorizontal'

import { BlogData } from '../../constants'

function ArticleDetail(props) {
  const [image, setImage] = useState('')
  const { articleId } = props

  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Layout title={'Article Detail'} content={'Article'}>
      <div className="container mx-auto px-6 lg:px-0" data-aos="fade-up">
        <div>
          <TextHeader title="Bedroom Design is the Most Personal Reflection of the Owner, Really?" subtitle="Is it true that the bedroom design is the most personal reflection of the owner? Many people believe that to be able to judge a person's personality, it is enough to" />
        </div>
        <div className="h-[180px] lg:h-[550px] relative mt-[50px]">
          <Image
            src={image ? image : BlogData[articleId].thumbnail}
            alt="Articles image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="lg:flex flex-row py-[50px]">
          <div className="lg:w-1/2 mr-[30px]" data-aos="fade-right">
            <p className="paragraph text-paragraph-1">
              Commodo sodales at eget id dignissim amet consectetur adipiscing elit.At cursus magna libero turpis scelerisque tristique scelerisque mi.Sed nunc auctor faucibus vitae.Gravida erat nisi sed vulputate sed cum viverra enim pretium.Sed nunc consequat, tincidunt pharetra.Mattis quis egestas mi, malesuada morbi morbi porttitor porttitor.Faucibus nunc, turpis malesuada blandit feugiat porttitor feugiat pellentesque condimentum.At nisi, cursus sem blandit sed nunc phasellus.Placerat auctor tincidunt commodo auctor placerat viverra tortor quis eu.Pretium velit eu, massa tristique congue egestas.In arcu tellus tellus urna, orci gravida etiam velit, viverra.Convallis nunc sed tellus eget feugiat ultricies purus.Consectetur sollicitudin id eget facilisis hendrerit nibh.
              <br />
              <br />
              Nisi quam mi est et et.Lectus sed imperdiet non vestibulum volutpat tellus odio aliquam.Eu rutrum tincidunt risus felis sagittis, consequat, iaculis tortor bibendum.At nisl, diam a sagittis nulla nec at.Faucibus ultricies pharetra, faucibus erat varius ornare.Viverra pharetra nibh leo et purus in et.Amet felis lectus consectetur duis ut orci.Sed vitae quam vel pretium urna, duis neque.Vitae commodo interdum adipiscing mi ultrices.Aliquam risus nibh tincidunt mauris faucibus gravida eleifend.

              <br />
              Ornare tincidunt gravida sed adipiscing vel adipiscing turpis neque elementum.Donec duis malesuada quam vehicula.Mauris sem tellus vitae cursus pellentesque semper nam est erat.Vulputate dui nisi neque, morbi mauris id augue.Habitant ultrices egestas vitae eget mattis ipsum sed.Ornare porttitor lobortis mauris nulla et vitae risus augue commodo.Nunc placerat nascetur semper est facilisis.Arcu cum aliquam vitae sit ultrices.Aliquet amet elit nibh sapien a.Id eu sagittis est eu ornare.
            </p>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <p className="paragraph text-paragraph-1">
              Faucibus facilisi morbi pharetra quis sed.Vitae suspendisse facilisis facilisis ligula felis et a parturient aenean.Ac maecenas ultricies felis risus scelerisque duis posuere.Lectus tellus montes, ac sed diam.Habitant amet, leo cras dui ac eu magna.
              <br />
              Sed neque lorem mi laoreet orci aliquam maecenas.
              Molestie enim, nulla egestas id metus quisque eget.Tempor ante hendrerit venenatis et pellentesque viverra.Ornare mattis dui viverra suspendisse habitant tempus ornare aliquam.Condimentum tellus cursus diam interdum.Quam dictum pellentesque vestibulum mi.Aliquet laoreet sem proin viverra nec, at.Malesuada aliquam quisque felis, faucibus.Diam duis nunc tincidunt integer risus sit parturient urna.Etiam sed id nisi, tempus fames.Tempor ultrices massa eleifend id aliquet integer.Phasellus felis convallis fames habitasse sagittis, dui tellus.
              <br />
            </p>
            <div className="h-[180px] lg:h-[350px] relative mt-[50px]">
              <Image
                src={image ? image : "/article_image_1.png"}
                alt="Articles image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <h3 className="pt-[50px] bold md:text-3xl text-base font-bold text-title-1 capitalize">
            bedroom collection
          </h3>
          <div className="lg:flex flex-row pt-[15px]">
            <div className="lg:w-1/2 mr-[30px]" data-aos="fade-right">
              <p className="paragraph text-paragraph-1">
                Nisi quam mi est et et. Lectus sed imperdiet non vestibulum volutpat tellus odio aliquam. Eu rutrum tincidunt risus felis sagittis, consequat, iaculis tortor bibendum. At nisl, diam a sagittis nulla nec at. Faucibus ultricies pharetra, faucibus erat varius ornare. Viverra pharetra nibh leo et purus in et. Amet felis lectus consectetur duis ut orci.
              </p>
            </div>
            <div className="lg:w-1/2" data-aos="fade-left">
              <p className="paragraph text-paragraph-1">
                Praesent tempus vel urna suspendisse cursus. Ac proin vitae viverra lorem nulla mattis in. Urna diam accumsan quisque adipiscing sagittis, in. Adipiscing dolor, morbi placerat sit vitae ipsum amet consequat. Imperdiet lacus tempus, nibh eget metus, sed pellentesque mattis aenean.
              </p>
            </div>
          </div>
          <div className="h-[180px] lg:h-[350px] relative mt-[50px]">
            <Image
              src={image ? image : "/article_image_2.png"}
              alt="Articles image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div data-aos="fade-up">
          <h3 className="pt-[50px] bold md:text-3xl text-base font-bold text-title-1 capitalize">
            The Knot
          </h3>
          <div className="lg:flex flex-row pt-[15px] pb-[180px]">
            <div className="lg:w-1/2 mr-[30px]" data-aos="fade-right">
              <p className="paragraph text-paragraph-1">
                Nisi quam mi est et et. Lectus sed imperdiet non vestibulum volutpat tellus odio aliquam. Eu rutrum tincidunt risus felis sagittis, consequat, iaculis tortor bibendum. At nisl, diam a sagittis nulla nec at. Faucibus ultricies pharetra, faucibus erat varius ornare. Viverra pharetra nibh leo et purus in et. Amet felis lectus consectetur duis ut orci.
              </p>
            </div>
            <div className="lg:w-1/2" data-aos="fade-left">
              <p className="paragraph text-paragraph-1">
                Nisi quam mi est et et. Lectus sed imperdiet non vestibulum volutpat tellus odio aliquam. Eu rutrum tincidunt risus felis sagittis, consequat, iaculis tortor bibendum. At nisl, diam a sagittis nulla nec at. Faucibus ultricies pharetra, faucibus erat varius ornare. Viverra pharetra nibh leo et purus in et. Amet felis lectus consectetur duis ut orci.
              </p>
            </div>
          </div>
        </div>
        <h5
          data-aos="fade-up"
          className="font-bold text-center text-secondary-1 md:text-lg text-sm"
        >
          Similar Topics
        </h5>
        <h2 data-aos="fade-up" className="heading md:mb-0 mb-4 text-center">
          Maybe you're interested
        </h2>
        <div className="lg:flex flex-row pb-[180px]" data-aos="fade-up">
          {
            BlogData.map((item, i) => (
              i < 3 ? <ArticleCardHorizontal
                category={item.category}
                title={item.title}
                summary={item.summary}
                author={item.author}
                date={item.date}
                key={i}
                index={i}
              /> : <></>
            ))
          }
        </div>
        <NewsLetter />
      </div>
    </Layout >
  )
}

export const getServerSideProps = async (context) => {
  const { ArticleDetail: articleId } = context.query;    // Your dynamic page is [storyId].js

  return {
    props: { articleId }
  }
}

export default ArticleDetail