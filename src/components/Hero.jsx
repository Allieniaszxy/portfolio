import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-[#f3edfb] py-16 px-4 max-w-[1480px] mx-auto"
      id="home"
    >
      <div className="flex justify-between items-center gap-10 flex-wrap-reverse">
        {/* LEFT - TEXT */}
        <div className="flex-1 min-w-[280px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Hello, I'm <br />
            <span className="text-[#a53dff]">Al-Amin Alaka</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-[700px] text-gray-700">
            I specialize in building immersive, user-focused web applications
            that blend clean design with seamless functionality. With a passion
            for crafting intuitive digital experiences, I use thoughtful code
            and a design-first approach to bring ideas to life — one interface
            at a time.
          </p>
          <a
            href="https://wa.me/2348100059684"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#a53dff] hover:bg-[#922be6] transition text-white py-2 px-5 rounded-xl text-sm sm:text-base">
              Say Hello!
            </button>
          </a>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="flex-1 flex items-center justify-center min-w-[280px]">
          <div className="w-full max-w-[380px] bg-white rounded-lg shadow-lg p-4">
            <img
              src="/hero.png"
              alt="Al-Amin Alaka"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
