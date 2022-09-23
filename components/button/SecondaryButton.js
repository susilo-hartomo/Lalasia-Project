import React from "react";

function SecondaryButton({ text, onClick }) {
  return (
    <div
      className="w-full max-h-14 h-14 text-center cursor-pointer bg-transparent hover:bg-primary-4 border border-paragraph-6 px-9 py-4"
      onClick={onClick}
    >
      <h5 className="heading text-title-1">{text}</h5>
    </div>
  );
}

export default SecondaryButton;
