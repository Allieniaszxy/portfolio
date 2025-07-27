import React from "react";
import { GiArchiveResearch } from "react-icons/gi";
import { HiPencilSquare } from "react-icons/hi2";
import { FaCode } from "react-icons/fa6";
import { MdOutlineRocketLaunch } from "react-icons/md";

const Work = () => {
  return (
    <div>
      <div
        className="flex items-center justify-between gap-[7%] bg-[#eeeff1] py-[10%] max-tablet:flex-col max-tablet:p-[20px]"
        id="work"
      >
        <div className="w-[53%] max-tablet:w-full max-tablet:py-[3%]">
          <h1 className="text-4xl mb-[20px] font-bold">Work Process</h1>
          <p className="text-[18px] mb-[20px]">
            Every successful project starts with a structured and thoughtful
            process. My work approach is centered around understanding your
            vision and translating it into a seamless digital experience. From
            concept to completion, I prioritize collaboration, clarity, and
            creativity. Whether it's a simple portfolio or a complex web app, I
            guide each phase with precision, ensuring the end result not only
            looks great but functions beautifully.
          </p>
          <h3 className="text-[18px] mb-[20px]">
            Whether it's a simple portfolio or a complex web app, I guide each
            phase with precision, ensuring the end result not only looks great
            but functions beautifully.
          </h3>
        </div>
        <div className="w-[50%] grid grid-cols-2 gap-[30px] max-tablet:grid-cols-1 max-tablet:w-full">
          <div className="w-[300px] h-[250px] rounded-2xl bg-white p-8 max-tablet:w-full max-tablet:mb-[15px]">
            <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#f0f1f3] rounded mb-[25px]">
              <GiArchiveResearch size={25} color="#a53dff" />
            </div>
            <h1>1. Research</h1>
            <p className="text-[14px] line-clamp-3">
              I begin every project with in-depth research to understand your
              goals, audience, and industry. This foundation ensures every
              design decision aligns with your brand and business objectives.
            </p>
          </div>
          <div className="w-[300px] h-[250px] rounded-2xl bg-white p-8 mt-[35px] max-tablet:w-full max-tablet:mb-[15px] max-tablet:mt-0">
            <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#f0f1f3] rounded mb-[25px]">
              <HiPencilSquare size={25} color="#a53dff" />
            </div>
            <h1>2. Design</h1>
            <p className="text-[14px] line-clamp-3">
              Using wireframes, mockups, and UI/UX principles, I create visually
              compelling and intuitive interfaces tailored for seamless user
              experiences across all devices.
            </p>
          </div>
          <div className="w-[300px] h-[250px] rounded-2xl bg-white p-8 max-tablet:w-full max-tablet:mb-[15px]">
            <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#f0f1f3] rounded mb-[25px]">
              <FaCode size={25} color="#a53dff" />
            </div>
            <h1>3. Analyze</h1>
            <p className="text-[14px] line-clamp-3">
              Every design is evaluated for functionality, accessibility, and
              user flow. I refine and optimize based on feedback, data, and
              usability to ensure the best possible outcome.
            </p>
          </div>
          <div className="w-[300px] h-[250px] rounded-2xl bg-white p-8 mt-[35px] max-tablet:w-full max-tablet:mb-[15px] max-tablet:mt-0">
            <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#f0f1f3] rounded mb-[25px]">
              <MdOutlineRocketLaunch size={25} color="#a53dff" />
            </div>
            <h1>4. Launch</h1>
            <p className="text-[14px] line-clamp-3">
              After thorough testing, your project goes live — responsive, fast,
              and fully functional. I also provide ongoing support to keep
              things running smoothly post-launch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
