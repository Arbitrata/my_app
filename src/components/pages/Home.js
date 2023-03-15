import React, { Component } from "react";
import { FiArrowRight, FiDownloadCloud } from "react-icons/fi";
import Button from "../common/Button";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import { Link } from "react-scroll";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className=" overflow-x-hidden overflow-y-auto max-w-[1400px]">
        <div
          id="my_app/home"
          className="w-full md:h-screen h-fit md:flex block md:px-0 px-4 overflow-x-hidden md:max-w-[1400px]"
        >
          <div className="md:w-[55%] grid place-content-center">
            <div className="md:h-[600px] md:w-[520px] md:pr-12 float-left text-left pt-[140px]">
              <h1>
                <span className=" tracking-widest text-[23px] font-serif">
                  Hello, I'm
                </span>
                <br />
                <span className="text-[55px] font-extrabold text-my-orange">
                  Andrew
                </span>
                <br />
                <br />
                <span className="text-[16px] font-semibold text-my-black opacity-90">
                  FULLSTACK SOFTWARE ENGINEER , UI/UX DESIGNER & PROJECT MANAGER
                </span>
                <br />
                <br />
                <div className="">
                <span className="text-center text-[15px] text-my-black opacity-60 font-medium">
                  Meet Andrew, a full-stack software engineer who
                  is passionate about his work. Andrew is a dedicated and
                  talented developer who has honed his skills in building
                  complex software solutions that are efficient, scalable, and
                  user-friendly. 
                </span>
                </div>
              </h1>
              <div className=" bottom-0 mt-[40px] h-[70px] w-full flex justify-between items-center">
                <Link to="contact">
                  <Button
                    buttonText={"Get in tounch"}
                    buttonStyle={"md:pl-3 pl-1 text-[10px]"}
                    buttonIcon={<FiArrowRight size={25} />}
                  />
                </Link>
                <a href="MBUGUA.pdf." download>
                  <Button
                    buttonText={"Download CV"}
                    buttonIcon={<FiDownloadCloud size={25} />}
                    buttonStyle={"md:pl-3 pl-1"}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className=" md:w-[55%] bg-my-black pb-[10px] md:skew-x-12 md:mr-[-100px] opacity-80 grid place-content-center">
            <div className="md:w-[360px] md:h-[450px] md:-skew-y-12 md:rotate-12">
              <img
                src="my_app/andy.png"
                alt="andrew mbugua"
                className="top-1 opacity-80 h-full brightness-10 brightness-60 contrast-150"
              />
            </div>
          </div>
        </div>
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>
    );
  }
}

export default Home;
