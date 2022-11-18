import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import { FiCode, FiCommand, FiDatabase, FiFigma } from "react-icons/fi";
import Title from "../common/Title";
import Cards from "../common/Cards";

class Services extends Component {
  render() {
    return (
      <div id="my_app/services" className="md:h-screen max-w-[1400px] md:mt-0 mt-12">
        <div className="h-[120px] pt-8 block md:ml-[60px]">
          <div className="text-my-black text-[20px] text-left font-extrabold md:pt-0 pt-14 ml-8">
            Services
          </div>
          <Title title={"My Expertise"} />
        </div>
        <div className="md:flex items-center mt-6">
          <div className="relative h-[70vh] md:flex flex-1 items-start">
            <ReactCardCarousel
              autoplay={true}
              spread={"wide"}
              autoplay_speed={5000}
              disable_box_shadow={true}
            >
              <Cards
                icon={<FiCode size={60} />}
                serviceCard={true}
                title={"Frontend developer"}
                text="I can fit a front end software developer role with skills in :- JavaScript ( React JS ), Html/CSS, Tailwinds CSS, Bootstrap CSS
              "
              />
              <Cards
                serviceCard={true}
                icon={<FiDatabase size={60} />}
                title={"backend developer"}
                text="I can fit a Back end software developer role with skills in :- Node JS, Express Framework, postgresql, Rest APIs, MongoDB"
              />
              <Cards
                serviceCard={true}
                icon={<FiFigma size={60} />}
                title={"UI/UX Designer"}
                text="I can fit a Ui/Ux designer role with skills in :- Figma for high fidelity mock ups and Miro for low fidelity mock ups and adobbe"
              />
              <Cards
                serviceCard={true}
                icon={<FiCommand size={60} />}
                title={"Project management"}
                text="I can fit a Back end software developer role with skills in :- Node JS, Express Framework, postgresql, Rest APIs, MongoDB"
              />
            </ReactCardCarousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
