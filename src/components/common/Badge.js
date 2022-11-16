import React from "react";

export default function Badge({ badgrStyle, text }) {
  return (
    <div
      className={`md:w-[160px] w-[100px] rounded-lg md:h-[70px] h-[50px] bg-my-white ring-[3px] ring-my-black ring-opacity-20 grid place-items-center  ${
        badgrStyle ? badgrStyle : ""
      }`}
    >
      <span className="text-my-orange md:text-[23px] font-extrabold">
        {text}
      </span>
    </div>
  );
}
