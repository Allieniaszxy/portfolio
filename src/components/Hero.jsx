import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="flex justify-between py-[15%] bg-[#f3edfb] max-tablet:flex-col max-tablet:py-[20%] max-tablet:items-center max-mobile:w-full max-mobile:items-center max-mobile:px-5 "
        id="home"
      >
        <div className=" max-mobile:w-full">
          <h1 className="text-7xl font-bold mb-[30px] max-tablet:font-semibold max-tablet:text-5xl ">
            Hello, I'm <br />
            Al-Amin Alaka
          </h1>
          <p className="text-[20px] w-[700px] mb-[20px]">
            I'm a Freelance UI/UX Developer based in Islamabad, Pakistan. I
            strives to build immersive and beautiful web applications through
            carefully crafted code and user-centric
          </p>
          <button className="bg-[#a53dff] py-2 px-3 text-white rounded">
            Say Hello!
          </button>
        </div>
        <div className="w-[500px] h-[500px] bg-white rounded shadow-md flex items-center justify-center max-tablet:w-full ">
          <img src="/hero.png" alt="" className="w-[380px] h-[450px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
