import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaBold,
} from "react-icons/fa6";
import { CiLocationOn, CiAt } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div
      className="
    bg-black z-30"
    >
      <div
        className="bg-white rounded-2xl max-w-[1400px] mx-auto border flex  justify-center gap-[5rem] p-[80px] max-tablet:flex-col"
        id="contact"
      >
        <div className="w-[50%] max-tablet:w-full">
          <h1 className="text-3xl font-bold mb-[20px]">
            Let’s discuss your Project
          </h1>
          <p className="text-[20px] text-gray-500 mb-[20px]">
            There are many variations of passages of Lorem Ipsu available. but
            the majority have suffered alte.
          </p>
          <div className="space-y-[25px] mb-[50px]">
            <div className="flex p-5 border gap-5 items-center ">
              <span className="w-[50px] h-[50px] flex items-center justify-center bg-gray-200 rounded">
                <CiLocationOn size={30} color="#a53dff" />
              </span>
              <div>
                <p>Address:</p>
                <h1>Lagos, Nigeria.</h1>
              </div>
            </div>
            <div className="flex p-5 border gap-5 items-center">
              <span className="w-[50px] h-[50px] flex items-center justify-center bg-gray-200 rounded ">
                <CiAt size={30} color="#a53dff" className="font-bold" />
              </span>
              <div>
                <p>My Email:</p>
                <h1>alakaalamin@gmail.com</h1>
              </div>
            </div>
            <div className="flex p-5 border gap-5 items-center">
              <span className="w-[50px] h-[50px] flex items-center justify-center bg-gray-200 rounded">
                <BsTelephone size={30} color="#a53dff" />
              </span>
              <div>
                <p>Call Me Now:</p>
                <h1>+234-810-0059-684</h1>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <FaFacebook color="#a53dff" size={30} />
            <a href="  https://www.linkedin.com/in/al-amin-alaka/">
              <FaLinkedin color="#a53dff" size={30} />
            </a>

            <FaInstagram color="#a53dff" size={30} />
            <a href="https://github.com/prometheus">
              <FaXTwitter color="#a53dff" size={30} />
            </a>
            <a href="https://github.com/Allieniaszxy/">
              <FaGithub color="#a53dff" size={30} />
            </a>
          </div>
        </div>
        <div className="w-[50%] max-tablet:w-full">
          <h1 className="text-[20px] font-bold text-gray-500 mb-[30px]">
            There are many variations of passages of Lorem Ipsu available, but
            the majority have suffered alte.
          </h1>
          <form action="">
            <div className="flex flex-col space-y-[20px]">
              <input
                type="text"
                placeholder="Name*"
                className=" border-b-1 border-b-black-500 h-[50px]"
              />
              <input
                type="text"
                placeholder="Email*"
                className=" border-b-1 border-b-black-500 h-[50px]"
              />
              <input
                type="text"
                placeholder="Location"
                className=" border-b-1 border-b-black-500 h-[50px]"
              />
              <div className="space-x-6 flex">
                <input
                  type="text"
                  placeholder="Budget*"
                  className=" border-b-1 border-b-black-500 h-[50px] w-[30%]"
                />
                <input
                  type="text"
                  placeholder="Subject*"
                  className=" border-b-1 border-b-black-500 h-[50px] w-[70%]"
                />
              </div>
              <textarea
                name="message"
                id=""
                placeholder="message"
                className=" border-b-1 border-b-black-500 h-[100px] mb-[30px]"
              ></textarea>
              <button className="flex items-center justify-center py-2 px-4 font-bold text-white text-[18px] bg-[#a53dff] w-[max-content] rounded-[10px] gap-2.5">
                Submit
                <span>
                  <FiSend color="white" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
