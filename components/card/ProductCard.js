import React, { useRef, useState } from "react";
import Image from "next/image";

function ProductCard({
  img,
  category,
  name,
  desc,
  price,
  responsiveParent,
  responsiveImg,
  idx,
}) {
  //   const [resParent, setResParent] = useState("");
  //   const [resImg, setResImg] = useState("");
  //   const [resCategory, setResCategory] = useState("");
  //   const [resName, setResName] = useState("");
  //   const [resDesc, setResDesc] = useState("");
  //   const [resPrice, setResPrice] = useState("");
  let setResParent = "";
  let setResCategory = "";
  let setResName = "";
  let setResDesc = "";
  let setResPrice = "";
  let aos = {};

  if (typeof responsiveParent !== "undefined") {
    setResParent = responsiveParent;
    setResCategory = "my-3";
    setResName = "whitespace-nowrap truncate text-base my-3 lg:text-2xl";
    setResDesc = "whitespace-nowrap truncate my-3";
    setResPrice = "text-sm lg:text-xl";
    aos = {
      "data-aos": "fade-up",
      "data-aos-delay": idx * 20 + 120,
      "data-aos-duration": "500",
      "data-aos-easing": "ease-in-out",
    };
  } else {
    setResParent = "w-[394px] h-[544px]";
    setResCategory = "mb-3";
    setResName = "mb-1";
    setResDesc = "mb-4";
    setResPrice = "mb-3";
    aos = {};
  }

  return (
    <div
      className={`${setResParent}`}
      style={{ boxShadow: "0px 4px 100px rgba(175, 173, 181, 0.1)" }}
      {...aos}
    >
      <div
        className={`${
          typeof responsiveImg !== "undefined"
            ? responsiveImg
            : "w-[394px] h-[360px]"
        }  relative`}
      >
        <Image src={img} alt="product" layout="fill" />
      </div>
      <div className="">
        <h5 className={`heading text-paragraph-1 ${setResCategory}`}>
          {category}
        </h5>
        <h3 className={`font-bold text-title-1 ${setResName}`}>{name}</h3>
        <p className={`text-paragraph-1 ${setResDesc}`}>{desc}</p>
        <h3 className={`heading text-title-1 ${setResPrice}`}>{price}</h3>
      </div>
    </div>
  );
}

export default ProductCard;
