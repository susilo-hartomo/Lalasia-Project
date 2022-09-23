import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

function ProductCard({
  img,
  category,
  name,
  desc,
  price,
  responsiveParent,
  idx,
}) {
  const [responsiveStyle, setResponsiveStyle] = useState({
    parentStyle: "w-[394px] h-[544px]",
    parentImgStyle: "w-[394px] h-[360px]",
    categoryStyle: "mb-3",
    nameStyle: "mb-1",
    descStyle: "mb-4",
    priceStyle: "mb-3",
  });

  const [parentDiv, parentImg] = responsiveParent.split(",");

  useEffect(() => {
    responsiveParent &&
      setResponsiveStyle({
        parentStyle: parentDiv,
        parentImgStyle: parentImg,
        categoryStyle: "my-3",
        nameStyle: "whitespace-nowrap truncate text-base my-3 lg:text-2xl",
        descStyle: "whitespace-nowrap truncate my-3",
        priceStyle: "text-sm lg:text-xl",
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsiveParent]);

  let aos = {};
  if (typeof responsiveParent !== "undefined") {
    aos = {
      "data-aos": "fade-up",
      "data-aos-delay": idx * 20 + 120,
      "data-aos-duration": "500",
      "data-aos-easing": "ease-in-out",
    };
  } else {
    aos = {};
  }

  return (
    <div
      className={`${responsiveStyle.parentStyle}`}
      style={{ boxShadow: "0px 4px 100px rgba(175, 173, 181, 0.1)" }}
      {...aos}
    >
      <div className={`${responsiveStyle.parentImgStyle}  relative`}>
        <Image src={img} alt="product" layout="fill" />
      </div>
      <div className="">
        <h5
          className={`heading text-paragraph-1 ${responsiveStyle.categoryStyle}`}
        >
          {category}
        </h5>
        <h3 className={`font-bold text-title-1 ${responsiveStyle.nameStyle}`}>
          {name}
        </h3>
        <p className={`text-paragraph-1 ${responsiveStyle.descStyle}`}>
          {desc}
        </p>
        <h3 className={`heading text-title-1 ${responsiveStyle.priceStyle}`}>
          {price}
        </h3>
      </div>
    </div>
  );
}

export default ProductCard;
