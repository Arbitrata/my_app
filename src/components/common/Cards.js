import React, { Component } from "react";
import { FiArrowRight } from "react-icons/fi";
import Avater from "./Avater";
import Button from "./Button";

class Cards extends Component {
  static get CARD_STYLE() {
    return {
      margin: "40px 230px",
      boxSizing: "border-box",
    };
  }

  render() {
    return (
      <>
        {this.props.serviceCard && (
          <div
            style={Cards.CARD_STYLE}
            className="bg-my-black bg-opacity-20 md:w-[400px] w-[350px] h-[350px] block px-6 py-6 rounded-[10px] "
          >
            <div className=" bg-my-orange h-[100px] w-[100px] items-center place-content-center grid text-[45px]  rounded-l-[30px] rounded-t-[30px]">
              {this.props.icon}
            </div>
            <h1 className="text-my-black font-extrabold text-[25px] float-left capitalize pt-6">
              {this.props.title}
            </h1>
            <span className=" float-left pt-6 text-left text-[15px] font-medium">
              {this.props.text}
            </span>
          </div>
        )}
        {this.props.skillsCard && (
          <div className="w-[300px] h-[200px] rounded-[20px] ring-1 ring-my-orange shadow-md shadow-my-black block bg-my-white">
            <h1 className="h-[45px] w-full rounded-[20px] bg-my-orange grid place-content-center text-[23px] font-bold">
              {this.props.title}
            </h1>
            <div className="w-full grid place-content-center px-8 py-2">
              <span className=" float-left pt-3 text-left text-[16px] font-bold">
                {this.props.text}
              </span>
            </div>
          </div>
        )}
        {this.props.projectCard && (
          <div className="md:w-[380px] w-full md:mb-0 mb-2 bg-my-black bg-opacity-80 rounded-[5px] py-0 px-0 block place-content-center md:h-[450px] h-fit md:pb-1 pb-3">
            <div className="h-[50%] p-1 w-full rounded-[20px]">
              <img
                alt="andy"
                className=" w-full h-full rounded-[0px]"
                src={this.props.image}
              />
            </div>

            <div className="h-[50%] pl-6 pt-3 inline-block ">
              <h2 className=" md:text-[23px] text-[18px] font-bold float-left p-2 md:mr-0 mr-3 text-my-white">
                {this.props.title}
              </h2>
              <span className=" float-left text-left text-my-white text-[14px] pt-1 mr-2 font-medium">
                {this.props.text}
              </span>
              <a
                href={this.props.to}
                className="flex items-center font-medium md:absolute md:bottom-12 md:pl-0"
              >
                {this.props.view}
                <Button
                  buttonText={"view project"}
                  buttonIcon={<FiArrowRight size={20} />}
                  buttonStyle={"ml-1"}
                />
              </a>
            </div>
          </div>
        )}
        {this.props.testimonialCard && (
          <div className=" w-[300px] h-[80px] py-2 px-2 mb-2 bg-my-white ring-2 shadow-sm hover:shadow-my-black ring-my-black ring-opacity-5 hover:bg-my-lightgray  rounded-[10px] items-center">
            <div className="flex">
              <Avater imgSrc={this.props.image} alt={this.props.alt} />
              <div className="block pl-4">
                <div>
                  <h1 className="font-bold text-[17px] pr-0 float-left text-my-blue">
                    {this.props.name}
                  </h1>
                </div>
                <div>
                  <span className="float-left text-[13px]  text-my-orange pt-1 text-opacity-100 font-medium">
                    {this.props.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default Cards;
