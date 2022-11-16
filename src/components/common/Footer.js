import React from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiTwitter,
} from "react-icons/fi";

export default function Footer() {
  const icons = [
    {
      icon: <FiLinkedin size={20} />,
      href: "https://www.linkedin.com/in/andrew-mbugua-04a575237/",
    },
    {
      icon: <FiGithub size={20} />,
      href: "https://github.com/Arbitrata",
    },
    {
      icon: <FiInstagram size={20} />,
      href: "http://3",
    },
    {
      icon: <FiFacebook size={20} />,
      href: "http://4",
    },
    {
      icon: <FiTwitter size={20} />,
      href: "http://5",
    },
  ];

  return (
    <footer className="w-screen md:grid grid-rows-4 divide-y-2 max-w-[1400px] divide-my-white bg-my-black bg-opacity-30 opacity-100 md:h-[220px] h-fit pt-6 mt-24">
      <div className=" md:row-span-3 w-screen grid place-content-center">
        <div className="h-1 w-screen grid place-content-center">
            <div className="bg-my-black md:w-[900px] w-[100%] h-1 bg:opacity-90 "></div>
        </div>
        <div className="md:flex block md:px-[70px] w-screen place-content-center">
          <div className="md:h-full grid place-content-center md:w-[35%] w-full">
            <div className="item-center h-full text-[45px] text-my-orange font-bold">
              Andy
            </div>
          </div>
          <div className="md:grid md:grid-rows-3 md:pl-[100px] pl-10 md:h-[150px] h-fit md:w-[60%] w-[100%]">
            <div className="flex text-my-black md:mt-0 mt-6 items-center underline">
              <FiMail />
              <Link
                to="/"
                className="text-[15px] font-bold md:ml-10"
              >
                andrewmbugua76@gmail.com
              </Link>
            </div>
            <div className="flex text-my-black md:mt-0 mt-6 items-center">
              <FiPhone />
              <span className="text-[15px] font-bold md:mt-0 mt-4 md:ml-10">
                +254700463499
              </span>
            </div>
            <div className="flex items-center md:mt-0 mt-12">
              <span className="text-[16px] text-my-black font-bold md:mt-0 mt-4 md:pr-10 pr-6">
                Social media
              </span>
              {icons.map((icon) => (
                <a
                key={icon.href}
                  href={icon.href}
                  className="md:p-2 p-1 ring-1 ring-my-black hover:ring-my-white mr-4 hover:text-my-white bg-my-white hover:bg-my-blue rounded"
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="md:pl-[53%] grid md:mt-0 mt-8 md:py-0 py-4 place-items-center">
        <span className="text-[13px] font-medium">
          copyright andyportfolio. All Rights observed
        </span>
      </div>
    </footer>
  );
}
