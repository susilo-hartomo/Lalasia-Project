import React from "react";

function ListServiceCard({ number, title, desc }) {
  return (
    <div className="text-left lg:w-[32%]">
      <h1 className="w-9 h-11 text-4xl lg:text-5xl font-bold text-primary-1">
        {number}
      </h1>
      <h5 className="mt-5 font-bold text-lg text-title-1">{title}</h5>
      <p className="tracking-wide text-paragraph-1 mt-2">{desc}</p>
    </div>
  );
}

export default ListServiceCard;
