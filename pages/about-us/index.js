import Layout from '@/components/Layout'
import React from 'react'

import {
  callRecivedIc,
  messageIc,
  awardIc,
  arrowRightIc,
} from '../../assets/icons'

import { OurTeam } from '../../constants'

import CountingDesc from '@/components/items/CountingDesc'
import MissionDesc from '@/components/items/MissionDesc'
import ProfileOurTeamCard from '@/components/card/ProfileOurTeamCard'
import PrimaryButton from '@/components/button/PrimaryButton'
import VideoPlayer from '@/components/items/VideoPlayer'

export default function aboutUs() {
  const renderBanner = () => {
    return (
      <div className="lg:mt-[100px] mt-[72px] w-full">
        <h1
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
          className="text-center text-title-1 mb-5"
        >
          About Us
        </h1>
        <p
          className="text-center lg:w-1/2 mx-auto px-4 text-paragraph-1"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-easing="ease-in-sine"
        >
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </p>
        <div
          data-aos="zoom-out-up"
          data-aos-duration="800"
          data-aos-delay="600"
          data-aos-easing="ease-in-sine"
          className="lg:my-20 mb-12 mt-8"
        >
          <VideoPlayer
            urlVideo={'https://www.youtube.com/watch?v=1czjJGA5dHQ'}
          />
        </div>
      </div>
    )
  }

  const renderOurMission = () => {
    const countedTarget = [
      {
        total: '20',
        desc: 'Years Experience',
        prefix: '+',
      },
      {
        total: '483',
        desc: 'Happy Client',
        prefix: null,
      },
      {
        total: '150',
        desc: 'Project Finished',
        prefix: '+',
      },
    ]

    const missionTargeted = [
      {
        icon: callRecivedIc,
        title: '24/7 Supports',
        desc: '24/7 support means a support service that is provided 24 hours a day and 7 days a week.',
      },
      {
        icon: messageIc,
        title: 'Free Consultation',
        desc: `A free consultation is a one-on-one interaction or conversation given freely to share one's thoughts and discuss possible`,
      },
      {
        icon: awardIc,
        title: 'Overall Guarantee',
        desc: 'The comprehensive guarantee is required for import, warehousing, transit, processing and specific use.',
      },
    ]
    return (
      <div className="lg:my-[90px] px-4 lg:px-8 xl:px-0">
        <h5
          className="heading text-secondary-1 mb-4"
          data-aos="zoom-out-up"
          data-aos-duration="800"
        >
          Our Mission
        </h5>
        <div className="lg:flex  lg:gap-20 xl:gap-24 ">
          <div className="lg:w-1/2">
            <h2
              className="heading pr-6"
              data-aos="zoom-out-up"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              Our team dedicated to help find smart home product
            </h2>
            <div className="flex gap-12 lg:mt-12 mt-8">
              {countedTarget.map((item, index) => (
                <div
                  key={index}
                  data-aos="zoom-out-up"
                  data-aos-duration="500"
                  data-aos-delay={`${300 + index * 100}`}
                  data-aos-easing="ease-in-sine"
                >
                  <CountingDesc
                    total={item.total}
                    prefix={item.prefix}
                    desc={item.desc}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            {missionTargeted.map((item, index) => (
              <div
                key={index}
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay={`${700 + index * 100}`}
                data-aos-easing="ease-in-sine"
              >
                <MissionDesc
                  containerStyle="mb-10"
                  icon={item.icon}
                  alt="mission priority"
                  title={item.title}
                  desc={item.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const renderOurTeam = () => {
    return (
      <div className="lg:my-[90px] lg:px-8 xl:px-0">
        <div className="lg:my-[90px] px-4 lg:px-8 xl:px-0">
          <h5
            className="heading text-secondary-1 mb-4"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay={`${10}`}
            data-aos-easing="ease-in-sine"
          >
            Our Team
          </h5>
          <div className="lg:flex lg:gap-20 xl:gap-24 ">
            <div className="lg:w-1/2">
              <h2
                className="heading pr-6"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay={`${40}`}
                data-aos-easing="ease-in-sine"
              >
                Meet our leading and strong team
              </h2>
            </div>
            <div
              className="lg:w-1/2 lg:pl-20"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={`${150}`}
              data-aos-easing="ease-in-sine"
            >
              <p className="text-paragraph-1">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non purus parturient.
              </p>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap justify-between mt-12">
            {OurTeam.map((item, index) => (
              <div
                key={index}
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-delay={`${300 + index * 100}`}
                data-aos-easing="ease-in-sine"
              >
                <ProfileOurTeamCard
                  key={index}
                  img={item.img}
                  name={item.name}
                  grade={item.grade}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const renderInterest = () => {
    return (
      <div className="lg:my-[90px] my-8 px-4 lg:px-8 xl:px-0">
        <div className="lg:flex  lg:gap-20 xl:gap-24 justify-between items-center">
          <h2
            className="heading lg:w-1/3 w-4/5 mb-4 lg:mb-0"
            data-aos="zoom-out-up"
            data-aos-duration="500"
            data-aos-delay={`${300}`}
            data-aos-easing="ease-in-sine"
          >
            Are you interested work with us?
          </h2>
          <div
            data-aos="zoom-out-up"
            data-aos-duration="500"
            data-aos-delay={`${500}`}
            data-aos-easing="ease-in-sine"
            className="w-auto"
          >
            <PrimaryButton
              text="Let's Talk"
              onClick={() => alert('press button')}
              icon={arrowRightIc}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout title="About Us" content="We are the one">
      <div className="container mx-auto px-2 lg:px-0">
        {renderBanner()}
        {renderOurMission()}
        {renderOurTeam()}
        {renderInterest()}
      </div>
    </Layout>
  )
}
