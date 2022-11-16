import React from "react";
import Badge from "./Badge";

export default function AboutImage() {
  return (
    <div className="backdrop-blur-md">
      <Badge text={"Reliable"} badgrStyle={"md:ml-[-60px] ml-[-60px] md:mb-0 mb-[70px] backdrop-blur-xl"} />
      <div className="md:h-[470px] h-[250px] md:w-[470px] w-[250px] md:mt-[-120px] mt-[-300px] rounded-full shadow-md shadow-my-black border-2 border-opacity-30 border-my-black bg-my-lightgray grid place-content-center z-10">
        <img
          src="andy.png"
          alt="andrew mbugua"
          className="rounded-full p-6 md:h-[450px]"
        />
      </div>
      <Badge
        text={"Resilience"}
        badgrStyle={"md:ml-[-60px] ml-[-60px] md:mt-[-120px] mt-[-190px] backdrop-blur-xl"}
      />
      <Badge
        text={"Passionate "}
        badgrStyle={"md:ml-[410px] ml-[200px] md:mt-[-220px] mt-[-20px] z-40 backdrop-blur-xl"}
      />
    </div>
  );
}
