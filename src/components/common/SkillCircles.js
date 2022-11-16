import React from "react";

export default function SkillCircles({ icon, left, right }) {
  return (
    <>
      <div className="w-fit h-fit">
        <>
          {right && (
            <div className="w-1.5 md:h-[50px] ml-[33px] bg-my-orange shadow-md shadow-my-black"></div>
          )}
          <div className=" flex items-center h-fit w-fit place-content-center">
            {left && (
              <div className="h-1.5 w-[120px] bg-my-orange shadow-md shadow-my-black"></div>
            )}
            <div className="md:w-[70px] w-[50px] md:h-[70px] h-[50px] bg-my-white ring-4 shadow-md shadow-my-black ring-my-orange rounded-full grid place-content-center">
              <div className="">{icon}</div>
            </div>
            {right && (
              <div className="h-1.5 w-[120px] bg-my-orange shadow-md shadow-my-black"></div>
            )}
          </div>
        </>
        {right && (
          <div className="w-1.5 md:h-[50px]  md:ml-8 bg-my-orange shadow-md shadow-my-black"></div>
        )}
      </div>
    </>
  );
}
