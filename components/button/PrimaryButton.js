import React from "react";
import Image from "next/image";

function PrimaryButton({ text, onClick, icon }) {
  return (
    <div
      className="flex max-h-14 max-w-fit text-center cursor-pointer bg-primary-1 px-9 py-4 hover:bg-primary-3"
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-duration="600"
      data-aos-easing="ease-in-out"
      onClick={onClick}
    >
      <h5 className="heading text-light-white">{text}</h5>
      {icon ? (
        <div className="w-6 h-full ml-4 my-auto">
          <img src={icon.src} alt={text} className="max-h-6" />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PrimaryButton;
