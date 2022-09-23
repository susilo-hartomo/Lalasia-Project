import React from "react";
import Image from "next/image";

function PrimaryButton({ text, onClick, icon }) {
  return (
    <div
      className={`max-h-14 ${
        icon ? "flex max-w-fit" : "w-full"
      } text-center cursor-pointer bg-primary-1 px-9 py-4 hover:bg-primary-3`}
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
