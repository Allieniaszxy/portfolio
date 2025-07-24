import React from "react";

const Services = () => {
  const servicesBox = [
    {
      topic: "Software Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
    },
    {
      topic: "Software Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
    },
    {
      topic: "Software Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
    },
  ];
  return (
    <div>
      <div className="flex justify-center py-[7%] bg-[#f0f1f3] gap-[7%] max-tablet:w-full max-tablet:flex-col max-tablet:px-[20px]">
        <div className="w-[62%] max-tablet:w-full">
          <h1 className="text-5xl mb-[30px] font-bold">What I do?</h1>
          <p className="text-[18px] mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet,
          </p>
          <p className="text-[18px] mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </p>
          <button></button>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5 w-[53%] group max-tablet:w-full">
          {servicesBox.map((items, i) => (
            <div
              key={i}
              className="bg-white p-[30px] rounded-xl group-hover:border-l-amber-300 max-tablet:w-full"
            >
              <h1 className="text-[22px] mb-[10px] text-gray-500">
                {items.topic}
              </h1>
              <p className="text-[16px]">{items.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
