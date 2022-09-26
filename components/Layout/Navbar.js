import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { brandImg, brandText } from '../../assets/images'
import { humbergerIcn, cartIcn, userIcn, closeIcn } from '../../assets/icons'

import { navlist } from '../../constants'

export default function Navbar() {
  const router = useRouter()
  const [isShowMobileNavbar, setIsShowMobileNavbar] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const [windowSize, setWindowSize] = useState(0)

  const onScroll = (e) => {
    setScrollTop(e.target.documentElement.scrollTop)
  }

  useEffect(() => {
    const getWindowSize = () => {
      const { innerWidth, innerHeight } = window
      return { innerWidth, innerHeight }
    }

    const handleWindowResize = () => {
      setWindowSize(getWindowSize())
    }

    if (!windowSize) handleWindowResize()

    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', handleWindowResize)

    if (windowSize.innerWidth > 800 && isShowMobileNavbar) {
      setIsShowMobileNavbar(false)
      document.getElementsByTagName('body')[0].style = ''
    }

    if (!isShowMobileNavbar) {
      document.getElementsByTagName('body')[0].style = ''
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [scrollTop, windowSize, isShowMobileNavbar])

  const renderBrand = () => (
    <Link href="/">
      <a>
        <div className="flex items-center">
          <div className="mr-3">
            <Image src={brandImg} alt="Lalasia Brand" width={42} height={42} />
          </div>
          <Image src={brandText} alt="Lalasia Brand" width={76} height={18.7} />
        </div>
      </a>
    </Link>
  )

  const renderNavlink = () => {
    const timeDelay = [100, 150, 200, 300, 500, 700]
    return (
      <nav
        className={`lg:flex h-full w-full lg:w-auto lg:static z-50 top-[74px] min-h-screen lg:min-h-fit p-4 lg:p-0  ${
          isShowMobileNavbar && windowSize.innerWidth < 800
            ? 'translate-x-0 duration-1000 ease-in-out lg:traslate-0 left-0 absolute bg-white'
            : 'left-full'
        }`}
      >
        {navlist.map((item, index) => (
          <Link href={item.route} key={index}>
            <a
              className={`paragraph par-1 w-fit lg:h-full lg:leading-[7.5rem] pt-2 pb-5 lg:py-0 block mb-4 lg:mb-0 relative ${
                item.route == router.pathname
                  ? 'text-primary-1 border-b-4 border-primary-1'
                  : 'hover:text-primary-3'
              } ${
                index === 0
                  ? 'lg:mr-[30px]'
                  : index === navlist.length - 1
                  ? 'lg:ml-[30px]'
                  : `lg:mx-[30px]`
              } ${
                isShowMobileNavbar
                  ? `left-6 -translate-x-6 duration-1000 ease-in-out transition delay-${timeDelay[index]}`
                  : 'left-rull'
              }`}
            >
              {item.path}
            </a>
          </Link>
        ))}
      </nav>
    )
  }

  const togleNavbar = () => {
    if (!isShowMobileNavbar) {
      document.getElementsByTagName('body')[0].style =
        'height: 100vh; overflow:hidden'
    } else {
      document.getElementsByTagName('body')[0].style = ''
    }
    setIsShowMobileNavbar(!isShowMobileNavbar)
  }

  const renderAction = () => (
    <div>
      {isShowMobileNavbar ? (
        <div className="lg:hidden cursor-pointer" onClick={togleNavbar}>
          <Image src={closeIcn} alt="chart icon" width={30} height={30} />
        </div>
      ) : (
        <div className="lg:hidden cursor-pointer" onClick={togleNavbar}>
          <Image src={humbergerIcn} alt="chart icon" width={30} height={30} />
        </div>
      )}
      <div className="lg:flex items-center hidden">
        <div className="cursor-pointer">
          <Image src={cartIcn} alt="chart icon" width={30} height={30} />
        </div>
        <div className="ml-6 cursor-pointer">
          <Image src={userIcn} alt="user icon" width={30} height={30} />
        </div>
      </div>
    </div>
  )

  return (
    <header
      className={`border-b-2 border-solid border-light-white w-screen ${
        isShowMobileNavbar ? '' : 'overflow-hidden'
      } ${
        scrollTop > 125
          ? 'fixed bg-white transform ease-in-out duration-1000 -top-[200px] z-50 translate-y-[200px]'
          : 'relative'
      }`}
    >
      <div className="lg:h-[120px] h-[72px] container px-4 xl:px-0 mx-auto flex items-center justify-between">
        {renderBrand()}
        {renderNavlink()}
        {renderAction()}
      </div>
    </header>
  )
}
