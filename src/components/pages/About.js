import React, { Component } from "react";
import Title from "../common/Title";
import AboutImage from "../common/AboutImage";

class About extends Component {
  state = {};
  render() {
    return (
      <div
        id="about"
        className="w-screen max-w-[1400px] h-screen bg-my-lightgray"
      >
        <div className="h-[50%] w-[100%] bg-my-black opacity-10"></div>
        <div className="h-fit w-fit md:flex block place-content-stretch md:mt-[-190px] mt-[-100px] justify-between md:ml-[160px] ml-[18%]">
          <AboutImage />
          <div className="md:w-[450px] md:ml-[100px] ml-[-60px] md:mt-0 mt-[100px] md:h-[400px]">
            <Title title={"About me"} />
            <h1 className="font-extrabold text-[22px] text-left md:ml-8 ml-8 md:pt-2 pt-4 md:mt-2 mt-[30px]">
              Why hire me ?
            </h1>
            <div className=" font-medium text-md md:mt-[70px] mt-[-10px] md:p-6 p-4 w-ful text-left bg-my-lightgray ">
              I'm a Passionate and reliable software developer with 1+ years of
              hands-on experience UI/UX designing, developing, data modelling,
              managing Projects and implementing applications and solutions
              using a range of technologies and programming languages. Seeking
              to leverage broad development experience and hands-on technical
              expertise in a challenging role as a Software developer.
            </div>
          </div>
        </div>

        <div className="h-[20%]  w-full mt-[-30px] bg-my-lightgray"></div>
      </div>
    );
  }
}

export default About;
