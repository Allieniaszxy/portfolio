import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="flex justify-between pt-[15%] pb-[7%] bg-[#f3edfb] max-tablet:flex-col max-tablet:py-[20%] max-tablet:items-center max-mobile:w-full max-mobile:items-center max-mobile:px-5 "
        id="home"
      >
        <div className=" max-mobile:w-full">
          <h1 className="text-7xl font-bold mb-[30px] max-tablet:font-semibold max-tablet:text-5xl ">
            Hello, I'm <br />
            Al-Amin Alaka
          </h1>
          <p className="text-[20px] w-[700px] mb-[20px] flex flex-wrap">
            I specialize in building immersive, user-focused web applications
            that blend clean design with seamless functionality. With a passion
            for crafting intuitive digital experiences, I use thoughtful code
            and a design-first approach to bring ideas to life — one interface
            at a time.
          </p>
          <a href="https://wa.me/2348100059684">
            <button className="bg-[#a53dff] py-2 px-3 text-white rounded">
              Say Hello!
            </button>
          </a>
        </div>
        <div className="w-[500px] h-[500px] bg-white rounded shadow-md flex items-center justify-center max-tablet:w-full ">
          <img src="/hero.png" alt="" className="w-[380px] h-[450px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
