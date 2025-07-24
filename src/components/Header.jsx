import Sidebar from "./Sidebar";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
// import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between h-[80px] fixed w-full bg-white max-w-[1480px] mx-auto z-30 ">
        <div className="flex items-center gap-[15px]">
          <div className="w-[50px] h-[50px] rounded-full bg-[#a53dff] flex items-center justify-center font-semibold text-2xl">
            I
          </div>
          <h1 className="text-3xl font-semibold">Ingenious</h1>
        </div>
        <div className="flex items-center gap-[30px] max-tablet:hidden cursor-pointer">
          <a href="#home">
            <nav>Home</nav>
          </a>

          <a href="#about">
            <nav>About</nav>
          </a>
          <a href="#projects">
            <nav>Services</nav>
          </a>
          <nav className="bg-[#a53dff] py-2 px-3 text-white rounded">
            Contact
          </nav>
        </div>

        <div
          className="md:hidden max-tablet:block"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <FaTimes className="w-[50px] h-[50px]" />
          ) : (
            <RxHamburgerMenu className="w-[50px] h-[50px]" />
          )}{" "}
        </div>
        {isOpen && (
          <div className="md:hidden bg-[#1e293b] text-white space-y-3 px-4 py-4">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="block hover:text-[#14b8a6]"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block hover:text-[#14b8a6]"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="block hover:text-[#14b8a6]"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block hover:text-[#14b8a6]"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
