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
        <h1 className="text-center text-title-1 mb-5">About Us</h1>
        <p className="text-center lg:w-1/2 mx-auto px-4 text-paragraph-1">
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </p>
        <div className="lg:my-20 mb-12 mt-8">
          <VideoPlayer
            urlVideo={'https://www.youtube.com/watch?v=1czjJGA5dHQ'}
          />
        </div>
      </div>
    )
  }

  const renderOurMission = () => {
    return (
      <div className="lg:my-[90px] px-4 lg:px-8 xl:px-0">
        <h5 className="text-secondary-1 mb-4">Our Mission</h5>
        <div className="lg:flex  lg:gap-20 xl:gap-24 ">
          <div className="lg:w-1/2">
            <h2 className="heading pr-6">
              Our team dedicated to help find smart home product
            </h2>
            <div className="flex gap-12 lg:mt-12 mt-8">
              <CountingDesc total={20} prefix="+" desc="Years Experience" />
              <CountingDesc total={483} desc="Happy Client" />
              <CountingDesc total={150} prefix="+" desc="Project Finished" />
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <MissionDesc
              containerStyle="mb-10"
              icon={callRecivedIc}
              alt="mission priority"
              title={'24/7 Supports'}
              desc={
                '24/7 support means a support service that is provided 24 hours a day and 7 days a week.'
              }
            />
            <MissionDesc
              containerStyle="mb-10"
              icon={messageIc}
              alt="mission priority"
              title={'Free Consultation'}
              desc={`A free consultation is a one-on-one interaction or conversation given freely to share one's thoughts and discuss possible`}
            />
            <MissionDesc
              containerStyle="mb-10"
              icon={awardIc}
              alt="mission priority"
              title={'Overall Guarantee'}
              desc={
                'The comprehensive guarantee is required for import, warehousing, transit, processing and specific use.'
              }
            />
          </div>
        </div>
      </div>
    )
  }

  const renderOurTeam = () => {
    return (
      <div className="lg:my-[90px] lg:px-8 xl:px-0">
        <div className="lg:my-[90px] px-4 lg:px-8 xl:px-0">
          <h5 className="text-secondary-1 mb-4">Our Team</h5>
          <div className="lg:flex  lg:gap-20 xl:gap-24 ">
            <div className="lg:w-1/2">
              <h2 className="heading pr-6">Meet our leading and strong team</h2>
            </div>
            <div className="lg:w-1/2 lg:pl-20">
              <p className="text-paragraph-1">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non purus parturient.
              </p>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap justify-between mt-12">
            {OurTeam.map((item, index) => (
              <ProfileOurTeamCard
                key={index}
                img={item.img}
                name={item.name}
                grade={item.grade}
              />
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
          <h2 className="heading lg:w-1/3 w-4/5 mb-4 lg:mb-0">
            Are you interested work with us?
          </h2>
          <PrimaryButton
            text="Let's Talk"
            onClick={() => alert('press button')}
            icon={arrowRightIc}
          />
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
