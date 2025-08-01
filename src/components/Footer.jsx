import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#283446] py-[5%] px-[20px]" id="contacts">
      <div className="flex items-center justify-between max-tablet:flex-col max-tablet:space-y-5">
        <div className="flex items-center gap-[15px]">
          <div className="w-[50px] h-[50px] rounded-full bg-[#a53dff] flex items-center justify-center font-semibold text-2xl">
            I
          </div>
          <h1 className="text-3xl font-semibold text-white">Ingenious</h1>
        </div>
        <div className="flex items-center gap-[30px] text-white max-tablet:flex-col ">
          <a href="#home" className="hover:text-[#a53dff] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[#a53dff] transition">
            About
          </a>
          <a href="">
            <nav className="hover:text-[#a53dff] transition">Services</nav>
          </a>
        </div>
        <div>
          <nav className="text-white">Copyright © 2025 Picto.</nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
