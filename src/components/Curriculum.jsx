import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";
import { BsDownload } from "react-icons/bs";

const Curriculum = () => {
  return (
    <div>
      <div
        className="flex items-center justify-center gap-[10rem] shadow-md py-[5%] max-tablet:flex-col max-tablet:space-y-6 max-tablet:gap-[20px]"
        id="about"
      >
        <div className="relative">
          <div className="w-[400px] h-[500px] bg-[#f0f1f3] rounded shadow-md flex items-center justify-center">
            <img src="/hero.png" alt="" className="w-[380px] h-[500px]" />
            <div className="absolute bottom-[-20px] flex items-center justify-center bg-white w-[300px] rounded gap-5 h-[50px] shadow-md">
              <FaFacebook color="#a53dff" size={25} />
              <a href="  https://www.linkedin.com/in/al-amin-alaka/">
                <FaLinkedin color="#a53dff" size={25} />
              </a>

              <FaInstagram color="#a53dff" size={25} />
              <a href="https://github.com/prometheus">
                <FaXTwitter color="#a53dff" size={25} />
              </a>
              <a href="https://github.com/Allieniaszxy/">
                <FaGithub color="#a53dff" size={25} />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-[700px]">
          <h1 className="text-4xl mb-[20px] max-tablet:font-bold max-tablet:text-[40px]">
            I am Professional User Experience Developer
          </h1>
          <p className="text-[20px] mb-[20px]">
            I develop services for customers specializing creating stylish,
            modern websites, web services and online stores. My passion is to
            develop digital user experiences. I develop services for customers
            specializing creating stylish, modern websites, web services.
          </p>
          <div className="flex items-center gap-5 max-tablet:flex-col">
            <button className="bg-[#a53dff] py-2 px-3 text-white rounded">
              My Projects
            </button>
            <button className="border border-[#a53dff] flex items-center justify-center py-2 px-3 text-yellow rounded gap-2.5">
              <BsDownload />
              <a href="/src/assets/ALAKA AL-AMIN AYOMIDE word cv.pdf">
                <span className="text-yellow">Download CV</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
