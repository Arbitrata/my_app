import React from "react";

export default function Title({ title }) {
  return (
    <div className="ml-9 block">
      <div className="text-my-orange text-[32px] font-bold text-left tracking-widest">
        {title}
      </div>
      <div className="flex items-center w-[70px] justify-between mt-2.5">
        <div className="bg-my-orange h-1 w-[35px] rounded"></div>
        <div className="bg-my-orange h-1 w-[15px] rounded"></div>
        <div className="bg-my-orange h-1 w-[10px] rounded"></div>
      </div>
    </div>
  );
}
