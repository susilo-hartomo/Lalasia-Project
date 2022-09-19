import React, { useRef } from "react";
import Image from "next/image";

const PortofolioServiceImg = ({ img, title, desc, idx }) => {
  if (idx === 0) {
    return (
      <div className="w-full p-2 h-[409px] relative lg:w-1/3 lg:h-full">
        <Image
          src={img}
          alt={"portfolio" + idx}
          layout="fill"
          objectFit="cover"
        />
        <div className="w-full absolute bottom-0 px-7 mb-6 lg:mb-8">
          <div className="w-full">
            <h5 className="text-light-white font-semibold text-md lg:text-2xl">
              {title}
            </h5>
            <p className="py-2 text-light-white opacity-60 text-sm lg:text-md lg:mb-3 tracking-wider truncate whitespace-nowrap overflow-hidden">
              {desc}
            </p>
            <p className="text-light-white opacity-90 text-[15px] tracking-wider cursor-pointer">
              See Detail
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full p-2 h-[409px] relative lg:w-[65%] lg:h-[306px]">
        <Image
          src={img}
          alt={"portfolio" + idx}
          layout="fill"
          objectFit="cover"
        />
        <div className="w-full absolute bottom-0 px-7 mb-6 lg:mb-8">
          <div className="w-full">
            <h5 className="text-light-white font-semibold text-md lg:text-2xl">
              {title}
            </h5>
            <p className="py-2 text-light-white opacity-60 text-sm lg:text-md lg:mb-3 tracking-wider truncate whitespace-nowrap overflow-hidden">
              {desc}
            </p>
            <p className="text-light-white opacity-90 text-[15px] tracking-wider cursor-pointer">
              See Detail
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default PortofolioServiceImg;
