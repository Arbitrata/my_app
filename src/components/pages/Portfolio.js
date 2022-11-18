import React, { Component } from "react";
import Cards from "../common/Cards";
import Title from "../common/Title";
import "tw-elements";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Button from "../common/Button";

class Portfolio extends Component {
  state = {
    projects1: [
      {
        image: "duka.png",
        to: "https://arbitrata.github.io/bzproject-1/",

        title: "Duka Project",
        text: "Duka app is a dummy system that help shop owners to display there products to the buyers ,The system is created using Html and css for fronted part. my 1st project ",
      },
      {
        image: "room.booking-pic.png",
        to: "https://arbitrata.github.io/room-booking/",
        title: "Booking platform",
        text: "This is a Dummy platform that help users to book a room from a restaurant. Technologogies used: Html, CSS and Javascript to give user feedback after booking a room ",
      },
      {
        image: "akan-app-pic.png",
        to: "https://arbitrata.github.io/akan-project/",
        title: "Akan-name Generator",
        text: "Akan-name generator is A dummy system tha generates ones akan name according to the gender and day of the week the person was born. Html and Css is used for the frontend part and Javascript for the logic part",
      },
    ],
    projects2: [
      {
        image: "ujenzi.png ",
        to: "",
        title: "Ujenzi Platform",
        text: "This is a platform that the user registers and and views and updates their profiles . Technologies used : React Js, tailwinds CSS, Node js, Postgres",
      },
      {
        image: "crud-app-pic.png",
        to: "https://andy-crud-application.herokuapp.com/",
        title: "CRUD-Application",
        text: "This is system that helps the user to perfom the crud operations on their daily tasks. Technologies used: react js, fake json server, tailwinds css",
      },
      {
        image: "cout.png",
        to: "",
        title: "Couter app",
        text: "This is a dummy counter project where one can add delete or and the number of counts in a counter.Technologies used: react js, tailwinds css",
      },
    ],
  };
  render() {
    return (
      <div
        id="my_app/projects"
        className="bg-my-white md:h-fit md:pb-0 pb-10 max-w-[1400px]"
      >
        <div className="flex justify-between">
          <div className="h-[120px] w-[600px] md:pt-4 pt-14 block md:pl-[70px] pl-0">
            <div className="text-my-black text-[20px] text-left font-extrabold md:pl-8 pl-8">
              Resent project
            </div>
            <Title title={"My Portfolio"} />
          </div>

          <div className="w-full h-[50px] mt-[60px] md:pl-[37%] md:ml-[150px] ml-[40px]">
            <button
              className="carousel-control-prev "
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                aria-hidden="true"
                className="carousel-control-prev inline-block md:mr-1 mr-[220px]"
              >
                <span>
                  <Button buttonIcon={<FiArrowLeft size={30} />} />
                </span>
              </span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                aria-hidden="true"
                className="carousel-control-prev inline-block  md:mr-[-200px]"
              >
                <span>
                  <Button buttonIcon={<FiArrowRight size={30} />} />
                </span>
              </span>
            </button>
          </div>
        </div>

        <div
          id="carouselExampleControls"
          className="carousel slide relative"
          data-bs-ride="carousel"
          data-bs-interval="false"
        >
          <div className="carousel-inner relative w-full md:px-0 px-3 overflow-hidden md:pt-[30px] pt-[100px] pb-[10px]">
            <div className="carousel-item relative float-left  w-full md:h-fit pb-11">
              <div className="md:flex w-full justify-between md:px-[100px] md:h-full h-fit">
                {this.state.projects1.map((p) => (
                  <Cards
                    key={p.image || p.text || p.to || p.title}
                    projectCard={true}
                    image={p.image}
                    text={p.text}
                    title={p.title}
                    to={p.to}
                  />
                ))}
              </div>
            </div>

            <div className="carousel-item relative float-left active w-full h-fit pb-11">
              <div className="md:flex w-full md:px-[100px] justify-between h-full">
                {this.state.projects2.map((p) => (
                  <Cards
                    key={p.image || p.text || p.to || p.title}
                    projectCard={true}
                    image={p.image}
                    text={p.text}
                    title={p.title}
                    to={p.to}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
