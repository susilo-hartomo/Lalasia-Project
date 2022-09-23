import React from "react";

function SecondaryButton({ text, onClick, bg }) {
  return (
    <div
      className={`w-full max-h-14 h-14 text-center cursor-pointer ${
        bg === "bg-transparent"
          ? bg + " hover:bg-primary-4 border border-paragraph-6"
          : bg + " hover:bg-primary-3"
      } px-9 py-4`}
      onClick={onClick}
    >
      <h4
        className={`heading ${
          bg === "bg-transparent" ? "text-title-1" : "text-light-white"
        }`}
      >
        {text}
      </h4>
    </div>
  );
}

export default SecondaryButton;
