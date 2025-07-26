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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet,
          </p>
          <h3 className="text-[18px] mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </h3>
        </div>
        <div className="w-[50%] grid grid-cols-2 gap-[30px] max-tablet:grid-cols-1 max-tablet:w-full">
          <div className="w-[300px] h-[250px] rounded-2xl bg-white p-8 max-tablet:w-full max-tablet:mb-[15px]">
            <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#f0f1f3] rounded mb-[25px]">
              <GiArchiveResearch size={25} color="#a53dff" />
            </div>
            <h1>1. Research</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu.
            </p>
          </div>
          <div className="w-[300px] h-[250px] rounded-2xl bg-white p-8 mt-[35px] max-tablet:w-full max-tablet:mb-[15px] max-tablet:mt-0">
            <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#f0f1f3] rounded mb-[25px]">
              <HiPencilSquare size={25} color="#a53dff" />
            </div>
            <h1>2. Design</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu.
            </p>
          </div>
          <div className="w-[300px] h-[250px] rounded-2xl bg-white p-8 max-tablet:w-full max-tablet:mb-[15px]">
            <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#f0f1f3] rounded mb-[25px]">
              <FaCode size={25} color="#a53dff" />
            </div>
            <h1>3. Analyze</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu.
            </p>
          </div>
          <div className="w-[300px] h-[250px] rounded-2xl bg-white p-8 mt-[35px] max-tablet:w-full max-tablet:mb-[15px] max-tablet:mt-0">
            <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#f0f1f3] rounded mb-[25px]">
              <MdOutlineRocketLaunch size={25} color="#a53dff" />
            </div>
            <h1>4. Launch</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
