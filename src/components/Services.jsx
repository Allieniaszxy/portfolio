import React from "react";

const Services = () => {
  const servicesBox = [
    {
      topic: "👨‍💻 Software Development",
      desc: "I design and develop robust web applications tailored to meet user needs. Using industry best practices and modern technologies, I ensure that every line of code contributes to speed, security, and scalability.",
    },
    {
      topic: "🌐 Frontend Engineering",
      desc: "I build pixel-perfect interfaces using HTML, CSS, JavaScript, and frameworks like React. My focus is always on usability, performance, and responsive design to deliver seamless user experiences across all devices.",
    },
    {
      topic: "⚙️ Backend & API Integration",
      desc: "I create secure and scalable back-end services using Node.js, Express, and MongoDB. From RESTful APIs to authentication systems, I ensure your applications run smoothly and efficiently behind the scenes.",
    },
  ];
  return (
    <div>
      <div
        className="flex justify-center py-[7%] bg-[#f0f1f3] gap-[7%] max-tablet:w-full max-tablet:flex-col max-tablet:px-[20px]"
        id="services"
      >
        <div className="w-[62%] max-tablet:w-full">
          <h1 className="text-5xl mb-[30px] font-bold">What I do?</h1>
          <p className="text-[18px] mb-[20px]">
            I specialize in crafting responsive and engaging digital
            experiences. From clean and modern front-end designs to scalable
            back-end systems, I transform ideas into functional and
            user-friendly solutions. Whether you're looking to build a brand new
            product or improve an existing one — I’ve got you covered.
          </p>
          <p className="text-[18px] mb-[20px]">
            Whether you're looking to build a brand new product or improve an
            existing one — I’ve got you covered.
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
