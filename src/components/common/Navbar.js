import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-scroll";
import Button from "./Button";

function Navbar() {
  const links = [
    {
      id: 100,
      to: "my_app/home",
      label: "Home",
    },
    {
      id: 200,
      to: "my_app/about",
      label: "About",
    },
    {
      id: 300,
      to: "my_app/services",
      label: "Services",
    },
    {
      id: 400,
      to: "my_app/skills",
      label: "Skills",
    },
    {
      id: 500,
      to: "my_app/projects",
      label: "Portfolio",
    },
    {
      id: 600,
      to: "my_app/testimonials",
      label: "testimonials",
    },
    {
      id: 700,
      to: "my_app/contact",
      label: "Contact",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="md:h-[70px] h-[50px] bg-my-white w-screen max-w-[1400px] border-b-2 border-opacity-10 border-my-black z-10 fixed top-0 items-center md:pl-[100px] px-4 md:pr-[100px] flex justify-between">
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden visible rounded-[4px] p-.5 ring-my-orange ring-1 mr-2"
      >
        <BiMenu size={25} />
      </button>

      <div className="item-center h-full md:mr-10 mr-[150px]  md:text-3xl text-lg grid place-content-center text-my-orange font-extrabold basis-1/8">
        Andy
      </div>
      <nav className="">
        <ul
          className={`md:flex block md:w-fit w-[80%] transition-all duration-500 md:static absolute md:bg-my-white bg-my-blue h-[300px] items-center md:justify-between md:h-full basis-1/2 ${
            open
              ? "top-12 opacity-100  ml-0 left-8 rounded-[20px] md:pt-0 pt-6"
              : "top-[-100px]  md:opacity-100 opacity-0 right-8"
          }`}
        >
          {links.map((link) => (
            <li key={link.id || link.to } className=" md:float-none float-left md:ml-0 ml-[100px] md:mt-0 mt-3">
              <Link
              onClick={() => setOpen(!open)}
                to={link.to}
               
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-50}
                duration={300}
                isDynamic={true}
                activeClass={"active"}
                className="md:text-sm ml-4 mr-4 md:text-my-black text-my-black bg-my-white md:px-0 md:py-0 px-4 py-1 rounded opacity-50 md:font-medium font-bold  cursor-pointer"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className=" h-full grid place-content-center basis-1/8">
        <Link to="contact">
         <Button buttonText={"hire me"} />
        </Link>  
      </div>
    </nav>
  );
}

// activeLinkStyle = ({ active }) => {
//   return {
//     fontWeight: active ? "bold" : "normal",
//     textDecoration: active ? "underline" : "none",
//     textDecorationThickness: active ? "decoration-8" : "decoration-none",
//   };
// };

export default Navbar;
