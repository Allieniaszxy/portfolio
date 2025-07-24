import React from "react";
import { BsArrowRight } from "react-icons/bs";
import blog from "../assets/images/blog-4.jpg";

const Projects = () => {
  const boxArray = [
    {
      label: "Software Development",
      topic: "piggvest website",
      desc: "ahfkadkjakfjaklfdssssssssssssssssfffffffffffffffffffffffffffffff",
      img: `${blog}`,
    },
    {
      label: "Software Development",
      topic: "piggvest website",
      desc: "ahfkadkjakfjaklfdssssssssssssssssfffffffffffffffffffffffffffffff",
      img: `${blog}`,
    },
    {
      label: "Software Development",
      topic: "piggvest website",
      desc: "ahfkadkjakfjaklfdssssssssssssssssfffffffffffffffffffffffffffffff",
      img: `${blog}`,
    },
    {
      label: "Software Development",
      topic: "piggvest website",
      desc: "ahfkadkjakfjaklfdssssssssssssssssfffffffffffffffffffffffffffffff",
      img: `${blog}`,
    },
    {
      label: "Software Development",
      topic: "piggvest website",
      desc: "ahfkadkjakfjaklfdssssssssssssssssfffffffffffffffffffffffffffffff",
      img: `${blog}`,
    },
    {
      label: "Software Development",
      topic: "piggvest website",
      desc: "ahfkadkjakfjaklfdssssssssssssssssfffffffffffffffffffffffffffffff",
      img: `${blog}`,
    },
  ];
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center py-[5%]"
        id="projects"
      >
        <div>
          <h1 className="text-4xl mb-[20px] font-bold">Projects</h1>
          <p className="text-[18px] mb-[20px]">lorem ipsum</p>
        </div>
        <div className=" grid-cols-3 grid gap-[1rem] mb-[5%] max-tablet:grid-cols-1 max-tablet:w-full">
          {boxArray.map((items, i) => (
            <div
              className="w-[450px] h-[500px] flex flex-col rounded overflow-hidden border max-tablet:w-full"
              key={i}
            >
              <div className="w-full h-[250px]">
                <img src={items.img} alt="" className="w-full h-[250px]" />
              </div>
              <div className="p-[20px]">
                <h6 className="text-[14px]">{items.label}</h6>
                <h1 className="font-bold text-2xl mb-[20px]">{items.topic}</h1>
                <p className="text-[14px] mb-[30px]">{items.desc}</p>
                <button className="border border-[#a53dff] flex items-center justify-center py-2 px-3 text-yellow rounded gap-2.5">
                  <BsArrowRight />
                  <span>Case Study</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button className="bg-[#a53dff] py-2 px-3 text-white rounded">
            More Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
