import React from "react";
import { BsArrowRight } from "react-icons/bs";
import piggy from "../assets/images/piggyvest.PNG";

const Projects = () => {
  const boxArray = [
    {
      label: "Frontend Development",
      topic: "Moove Website Clone",
      desc: "A pixel-perfect clone of the Moove Africa homepage built with HTML, CSS, and vanilla JavaScript to demonstrate layout and responsiveness.",
      img: "/moove.PNG",
      link: "https://github.com/Allieniaszxy/Moove",
      link2: "https://moove-one.vercel.app/",
    },
    {
      label: "UI/UX Implementation",
      topic: "Abode Agency Website",
      desc: "Designed and built a static marketing website for a digital agency using only HTML, CSS, and JavaScript with responsive design for all screen sizes.",
      img: "/abode2.PNG",
      link: "https://github.com/Allieniaszxy/myabodes",
      link2: "https://myabode-sooty.vercel.app/",
    },
    {
      label: "Static Landing Page",
      topic: "Snap Product Page",
      desc: "Created a clean and interactive landing page using HTML, CSS, and JS focusing on animations, dropdowns, and user-friendly layout.",
      img: "/snap.PNG",
      link: "https://github.com/Allieniaszxy/snap",
      link2: "https://snap-sigma-rust.vercel.app/",
    },
    {
      label: "Web App",
      topic: "PiggyVest Clone",
      desc: "A PiggyVest savings platform replica built with React, TypeScript, and Tailwind CSS; includes components like cards, savings plans, and routes.",
      img: piggy,
      link: "https://github.com/Allieniaszxy/piggyCollab",
      link2: "https://piggy-collab.vercel.app/",
    },
    {
      label: "Meta Homepage UI",
      topic: "Meta Website UI",
      desc: "Replicated Meta’s homepage using React and Tailwind, with stateful components and route simulation for navigation.",
      img: "/meta.PNG",
      link: "https://github.com/Allieniaszxy/metaReact",
      link2: "https://meta-react-zeta.vercel.app/",
    },
    {
      label: "Student Utility Tool",
      topic: "CGPA Calculator",
      desc: "Built a CGPA calculator with React and TypeScript, supporting 4.0 and 5.0 scales, semester-wise input, and dynamic GPA computation.",
      img: "/cgpa.PNG",
      link: "https://github.com/Allieniaszxy/CGPACalculator",
      link2: "https://cgpa-calculator-blond-sigma.vercel.app/",
    },
  ];

  return (
    <div>
      <div
        className="flex flex-col items-center justify-center py-[5%]"
        id="projects"
      >
        <div>
          <h1 className="text-4xl mb-[20px] font-bold text-center">Projects</h1>
          <p className="text-[18px] mb-[20px]">
            A selection of recent frontend development projects built using
            various stacks.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[1rem] mb-[5%] max-tablet:grid-cols-1 max-tablet:w-full">
          {boxArray.map((item, i) => (
            <div
              className="w-[450px] h-[500px] flex flex-col rounded overflow-hidden border max-tablet:w-full"
              key={i}
            >
              <div className="w-full h-[250px]">
                <img
                  src={item.img}
                  alt={item.topic}
                  className="w-full h-[250px] object-cover object-center"
                />
              </div>
              <div className="p-[20px]">
                <h6 className="text-[14px] text-gray-500">{item.label}</h6>
                <h1 className="font-bold text-2xl mb-[20px]">{item.topic}</h1>
                <p className="text-[14px] mb-[30px]">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-[#a53dff] flex items-center justify-center py-2 px-3 text-[#a53dff] rounded gap-2.5 hover:bg-[#a53dff] hover:text-white transition"
                    >
                      <BsArrowRight />
                      <span>Case Study</span>
                    </a>
                  </div>
                  <div>
                    <a
                      href={item.link2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#a53dff] font-semibold hover:underline"
                    >
                      Visit Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <button className="bg-[#a53dff] py-2 px-4 text-white rounded hover:bg-[#922be6] transition">
            More Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
