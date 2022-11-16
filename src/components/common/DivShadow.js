import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function DivShadow({ text, title }) {
  return (
    <div className="w-fit h-fit pt-6 px-6 block">
      <FaQuoteLeft size={30} className="opacity-50" />
      <h1 className="text-[30px] font-bold text-left mt-0  text-my-orange">{title}</h1>
      <div className="mt-3 h-fit w-fit">
        <span className="text-[17px] font-thin text-my-black">{text}</span>
      </div>
    </div>
  );
}
