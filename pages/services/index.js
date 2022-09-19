import Layout from "@/components/Layout";
import Image from "next/image";
import { serviceBrandImg } from "../../assets/images";
import { arrowRightIc } from "../../assets/icons";
import { datasListService, dataListPortofolio } from "./datas";

const Service = () => {
  const renderBanner = () => {
    return (
      <div className="px-2 lg:mt-[100px] mt-[72px] w-full">
        <h1 className="text-center text-title-1 mb-5">Services</h1>
        <p className="text-center lg:w-1/2 mx-auto px-4 text-paragraph-1">
          The product crafted by talented crafter and using high quality
          material with love inside
        </p>

        <div className=" mt-14 w-full h-[200px] lg:h-[550px] mx-auto relative">
          <Image
            src={serviceBrandImg}
            alt="Services image brand"
            layout="fill"
            objectFit="cover"
          />
          <div className="w-full flex flex-nowrap lg:hidden">
            <div className="absolute left-1/2 -translate-x-1/2 top-2/3">
              <div className="w-[10px] h-[10px] rounded-full bg-paragraph-3 mr-2 inline-block"></div>
              <div className="w-[10px] h-[10px] rounded-full bg-paragraph-6 mr-2 inline-block"></div>
              <div className="w-[10px] h-[10px] rounded-full bg-paragraph-3 mr-2 inline-block"></div>
              <div className="w-[10px] h-[10px] rounded-full bg-paragraph-3 mr-2 inline-block"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderListService = () => {
    return (
      <div className="mt-28 px-2">
        <div className="flex flex-wrap lg:justify-between gap-5 lg:gap-6">
          {datasListService.map((data, index) => {
            return (
              <div key={index} className="text-left lg:w-[32%]">
                <h1 className="w-9 h-11 text-4xl lg:text-5xl font-bold text-primary-1">
                  {data.number}
                </h1>
                <h5 className="mt-5 font-bold text-lg text-title-1">
                  {data.title}
                </h5>
                <p className="tracking-wide text-paragraph-1 mt-2">
                  {data.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderPortofolio = () => {
    return (
      <div className="mt-28 mb-5 px-2">
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-1/3">
            <h5 className="font-bold text-lg text-secondary-2">Portofolio</h5>
            <h1 className="font-bold text-3xl text-title-1">
              Amazing project We&apos;ve done before
            </h1>
          </div>
          <div className="lg:w-1/3">
            <p className="mt-3 text-md tracking-wider text-paragraph-1">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non.
            </p>

            <h5 className="text-primary-2 font-bold my-9 text-md underline">
              View Portofolio
            </h5>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-col gap-5 lg:h-[632px] lg:w-ful">
          {dataListPortofolio.map((data, index) => {
            if (index === 0) {
              return (
                <div
                  key={index}
                  className="w-full p-2 h-[409px] relative lg:w-1/3 lg:h-full"
                >
                  <Image
                    src={data.img}
                    alt={"portfolio" + index}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="w-full absolute bottom-0 px-7 mb-6 lg:mb-8">
                    <div className="w-full">
                      <h5 className="text-light-white font-semibold text-md lg:text-2xl">
                        {data.title}
                      </h5>
                      <p className="py-2 text-light-white opacity-60 text-sm lg:text-md lg:mb-3 tracking-wider truncate whitespace-nowrap overflow-hidden">
                        {data.description}
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
                <div
                  key={index}
                  className="w-full p-2 h-[409px] relative lg:w-[65%] lg:h-[306px]"
                >
                  <Image
                    src={data.img}
                    alt={"portfolio" + index}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="w-full absolute bottom-0 px-7 mb-6 lg:mb-8">
                    <div className="w-full">
                      <h5 className="text-light-white font-semibold text-md lg:text-2xl">
                        {data.title}
                      </h5>
                      <p className="py-2 text-light-white opacity-60 text-sm lg:text-md lg:mb-3 tracking-wider truncate whitespace-nowrap overflow-hidden">
                        {data.description}
                      </p>
                      <p className="text-light-white opacity-90 text-[15px] tracking-wider cursor-pointer">
                        See Detail
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  };

  const renderInteredted = () => {
    return (
      <div className="mt-28 mb-5 px-2">
        <div className="lg:flex lg:justify-between lg:self-center">
          <div>
            <h1 className="w-2/3 font-bold text-title-1 text-2xl lg:text-3xl">
              Are you interested work with us?
            </h1>
          </div>
          <div className="mt-4 group">
            <button className="bg-primary-1 py-4 px-9 lg:py-2 lg:px-7 text-light-white group-hover:opacity-70">
              Learn More{" "}
              <span className="inline-block ml-2">
                {" "}
                <Image src={arrowRightIc} alt="arrow-right" />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout title="Services" content="We are the one">
      <div className="container mx-auto px-2 lg:px-0">
        {renderBanner()}
        {renderListService()}
        {renderPortofolio()}
        {renderInteredted()}
      </div>
    </Layout>
  );
};

export default Service;
