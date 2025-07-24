import React from "react";

const Idea = () => {
  return (
    <div>
      <div className="bg-[#132238] py-[5%] flex flex-col items-center justify-center text-white max-tablet:w-full">
        <h1 className="text-5xl mb-[20px] font-bold w-[60%] text-center max-tablet:w-full max-tablet:px-[20px]">
          Do you have Project Idea? Let's discuss your project!
        </h1>
        <p className="text-[18px] mb-[50px] w-[50%] text-center max-tablet:w-full max-tablet:px-[20px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <button className="bg-[#a53dff] py-2 px-3 text-white rounded text-[20px]">
          Let's Work Together
        </button>
      </div>
    </div>
  );
};

export default Idea;
